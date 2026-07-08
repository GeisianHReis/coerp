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
  const today = new Date();
  const currentMonthName = today.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();
  const currentYear = today.getFullYear();

  const [currentMonth, setCurrentMonth] = useState(`${currentMonthName}.${currentYear}`);
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  const getMonthNumber = (monthLabel: string): number => {
    const monthMap: Record<string, number> = {
      JANEIRO: 1,
      FEVEREIRO: 2,
      MARÇO: 3,
      ABRIL: 4,
      MAIO: 5,
      JUNHO: 6,
      JULHO: 7,
      AGOSTO: 8,
      SETEMBRO: 9,
      OUTUBRO: 10,
      NOVEMBRO: 11,
      DEZEMBRO: 12,
    };

    const monthPart = monthLabel.split('.')[0];
    return monthMap[monthPart] ?? 1;
  };

  const handleMonthChange = (direction: 'prev' | 'next') => {
    const monthNames = [
      'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO',
      'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO',
    ];

    const [currentMonthNamePart, currentYearPart] = currentMonth.split('.');
    let currentMonthNumber = getMonthNumber(currentMonthNamePart);
    let newYear = parseInt(currentYearPart, 10);

    if (direction === 'prev') {
      currentMonthNumber -= 1;
      if (currentMonthNumber < 1) {
        currentMonthNumber = 12;
        newYear -= 1;
      }
    } else {
      currentMonthNumber += 1;
      if (currentMonthNumber > 12) {
        currentMonthNumber = 1;
        newYear += 1;
      }
    }

    setCurrentMonth(`${monthNames[currentMonthNumber - 1]}.${newYear}`);
  };

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
    const monthNumber = getMonthNumber(currentMonth);
    const filtered = events.filter((event) => event.mes === monthNumber);
    setFilteredEvents(filtered);
  }, [events, currentMonth]);

  const handleMoreInfoClick = (event: Event) => {
    const childrenArr = event?.descricao?.value?.document?.children;
    const hasChildren = Array.isArray(childrenArr) && childrenArr.length > 0;
    const firstChild = hasChildren ? childrenArr[0] : undefined;
    const firstChildChildren = firstChild && Array.isArray(firstChild.children) ? firstChild.children : [];
    const hasLink = firstChildChildren.length > 1 && firstChildChildren[1]?.url;
    const linkUrl = hasLink ? firstChildChildren[1].url : undefined;

    if (linkUrl) {
      window.open(linkUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <AgendaContainer>
      <HeaderSection>
        <SectionTitle>O QUE VEM POR AÍ</SectionTitle>
        <MonthNavigator>
          <MonthButton onClick={() => handleMonthChange('prev')}>
            <CaretLeftIcon size={24} />
          </MonthButton>
          <MonthDisplay>{currentMonth}</MonthDisplay>
          <MonthButton onClick={() => handleMonthChange('next')}>
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