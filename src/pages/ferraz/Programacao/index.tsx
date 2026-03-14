import { useEffect, useState, useCallback } from 'react';
import { CaretLeftIcon, CaretRightIcon} from '@phosphor-icons/react';
import {
  AgendaContainer,
  HeaderSection,
  SectionTitle,
  MonthNavigator,
  MonthButton,
  MonthDisplay,
  EventsGrid,
} from './styles';

import { EventCard } from '../../../components/EventCard';
import client from '../../../cms/Dato/client';
import gql from 'graphql-tag';
import { v4 as uuidv4 } from 'uuid';

export interface Event {
  key: string;
  evento: string;
  horario: string;
  informacoes: string;
  descricao: {
    value: {
      document: {
        children: [
          {
            children: [
              {
                value: string;
              },
              {
                url?: string;
                children: [
                  {
                    value: string;
                  }
                ];
              }
            ]
          }
        ]
      }
    }
  };
  mes: number;
}

export function ProgramacaoF() {
  // Fixar para abril de 2026
  const fixedMonth = 'ABRIL.2026';
  const [currentMonth] = useState(fixedMonth);
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  // Modal removido pois não será mais usado


  const fetchData = useCallback(() => {
    client.query({
      query: gql`
          {
            allProgramacaoferrazs (first:100) {
              evento
              horario
              destaque
              mes
              informacoes
              descricao {
                value
                links
              }
            }
          }
        `
    })
      .then((res) => {
        const eventsComKeys = res.data.allProgramacaoferrazs.map((event: Event) => ({
          ...event,
          key: uuidv4(),
        }));
        console.log(eventsComKeys);
        setEvents(eventsComKeys);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    // Filtrar apenas eventos do mês 4 (abril)
    const filtered = events.filter(event => event.mes === 4);
    setFilteredEvents(filtered);
  }, [events]);


  // Função para abrir o link do Sympla em nova guia
  const handleMoreInfoClick = () => {
    window.open('https://www.sympla.com.br/evento/celebracao-de-aniversario-50-anos-da-coerp/3345273?algoliaID=9c8da1994516efc0fdaa83927d8cd4aa', '_blank');
  };

  return (
    <AgendaContainer>
      <HeaderSection>
        <SectionTitle>O QUE VEM POR AÍ</SectionTitle>
        <MonthNavigator>
          <MonthButton disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
            <CaretLeftIcon size={24} />
          </MonthButton>
          <MonthDisplay>{currentMonth}</MonthDisplay>
          <MonthButton disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
            <CaretRightIcon size={24} />
          </MonthButton>
        </MonthNavigator>
      </HeaderSection>

      <EventsGrid>
        {filteredEvents.map((event) => (
          <EventCard key={event.key} event={event} onMoreInfoClick={handleMoreInfoClick} />
        ))}
      </EventsGrid>
    </AgendaContainer>
  );
}