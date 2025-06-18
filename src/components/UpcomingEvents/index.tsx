import React, { useCallback, useEffect, useState } from 'react';
import { DownloadSimple } from '@phosphor-icons/react';
import {
  UpcomingEventsContainer,
  SectionTitle,
  EventsGrid,
  EventCard,
  EventDate,
  EventTitle,
  EventSeparator,
  EventDescription,
  MoreInfoButton
} from './styles';
import client from '../../cms/Dato/client';
import gql from 'graphql-tag';
import { v4 as uuidv4 } from 'uuid';
import { EventModal } from '../EventModal';

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
              }
            ]
          }
        ]
      }
    }
  };
  mes: number;
  destaque: boolean;
}

export function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const fetchData = useCallback(() => {
    client.query({
      query: gql`
            {
              allProgramacaoferrazs (
                filter: {destaque: {eq: true}}
                orderBy: horario_ASC
                first: 3
              ) {
                evento
                horario
                destaque
                mes
                informacoes
                descricao {
                  value
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

  const handleOpenModal = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };
  return (
    <UpcomingEventsContainer>
      <SectionTitle>O QUE VEM POR AÍ</SectionTitle>
      <EventsGrid>
        {events.map((event) => (
          <EventCard key={event.key}>
            <EventDate>{event.horario}</EventDate>
            <EventTitle>{event.evento}</EventTitle>
            <EventSeparator />
            <EventDescription>{event.informacoes}</EventDescription>
            <EventCard onClick={() => handleOpenModal(event)}>
              Mais Informações <DownloadSimple size={20} />
            </EventCard>
          </EventCard>
        ))}
      </EventsGrid>
      {
        isModalOpen && selectedEvent && (
          <EventModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            event={selectedEvent}
          />
        )
      }
    </UpcomingEventsContainer>
  );
}