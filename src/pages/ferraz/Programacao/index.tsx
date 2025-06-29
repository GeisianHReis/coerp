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
import { EventModal } from '../../../components/EventModal';
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
  // Get current date for initial state
  const today = new Date();
  const currentMonthName = today.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();
  const currentYear = today.getFullYear();

  const [currentMonth, setCurrentMonth] = useState(`${currentMonthName}.${currentYear}`);
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const getMonthNumber = (monthName: string): number => {
    const monthMap: { [key: string]: number } = {
      'JANEIRO': 1, 'FEVEREIRO': 2, 'MARÇO': 3, 'ABRIL': 4,
      'MAIO': 5, 'JUNHO': 6, 'JULHO': 7, 'AGOSTO': 8,
      'SETEMBRO': 9, 'OUTUBRO': 10, 'NOVEMBRO': 11, 'DEZEMBRO': 12
    };
    const monthPart = monthName.split('.')[0];
    return monthMap[monthPart] || 1;
  };

  const handleMonthChange = (direction: 'prev' | 'next') => {
    const monthNames = [
      'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO',
      'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'
    ];

    const [currentMonthNamePart, currentYearPart] = currentMonth.split('.');
    const currentMonthNumber = getMonthNumber(currentMonthNamePart);
    const currentYearDisplayed = parseInt(currentYearPart, 10); // Use a new variable to avoid confusion with the `currentYear` from `new Date()`

    let newMonthNumber = currentMonthNumber;
    let newYear = currentYearDisplayed;

    if (direction === 'prev') {
      newMonthNumber--;
      if (newMonthNumber < 1) {
        newMonthNumber = 12;
        newYear--;
      }
    } else { // direction === 'next'
      newMonthNumber++;
      if (newMonthNumber > 12) {
        newMonthNumber = 1;
        newYear++;
      }
    }

    // Define the maximum allowed date (December 2025)
    const maxYear = 2025;
    const maxMonthNumber = 12; // December

    // Get the current system date
    const todayDate = new Date();
    const currentSystemMonth = todayDate.getMonth() + 1; // getMonth() is 0-indexed
    const currentSystemYear = todayDate.getFullYear();

    // Prevent navigating before the current system month/year
    if (newYear < currentSystemYear || (newYear === currentSystemYear && newMonthNumber < currentSystemMonth)) {
        return; // Don't allow navigation
    }

    // Prevent navigating beyond December 2025
    if (newYear > maxYear || (newYear === maxYear && newMonthNumber > maxMonthNumber)) {
        return; // Don't allow navigation
    }

    setCurrentMonth(`${monthNames[newMonthNumber - 1]}.${newYear}`);
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
    const filtered = events.filter(event => event.mes === monthNumber);
    setFilteredEvents(filtered);
  }, [events, currentMonth]);

  const handleOpenModal = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
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
          <EventCard key={event.key} event={event} onMoreInfoClick={handleOpenModal} />
        ))}
      </EventsGrid>

      {isModalOpen && selectedEvent && (
        <EventModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          event={selectedEvent}
        />
      )}
    </AgendaContainer>
  );
}