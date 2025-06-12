import React from 'react';
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
  MoreInfoButton,
} from './styles';

interface EventProps {
  date: string;
  title: string;
  description: string;
  infoLink?: string;
}

const upcomingEvents: EventProps[] = [
  {
    date: 'Dia 18/04 às 13h',
    title: 'Páscoa Solidária',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui est. Cura bitur imper diet nisl sit amet dolor mole stie pelle nte.',
    infoLink: '#pascoa-solidaria', 
  },
  {
    date: 'Dia 19/04 às 19h',
    title: 'Ordenação Pastoral',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui est. Cura bitur imper diet nisl sit amet dolor mole stie pelle nte.',
    infoLink: '#ordenacao-pastoral', 
  },
  {
    date: 'Mês de Abril',
    title: 'Aniversário da Igreja',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui est. Cura bitur imper diet nisl sit amet dolor mole stie pelle nte.',
    infoLink: '#aniversario-igreja',
  },
];

export function UpcomingEvents() {
  const handleMoreInfoClick = (link?: string) => {
    if (link) {
      console.log(`Navigating to/downloading info for: ${link}`);
    }
  };

  return (
    <UpcomingEventsContainer>
      <SectionTitle>O QUE VEM POR AÍ</SectionTitle>
      <EventsGrid>
        {upcomingEvents.map((event, index) => (
          <EventCard key={index}>
            <EventDate>{event.date}</EventDate>
            <EventTitle>{event.title}</EventTitle>
            <EventSeparator />
            <EventDescription>{event.description}</EventDescription>
            <MoreInfoButton onClick={() => handleMoreInfoClick(event.infoLink)}>
              Mais Informações <DownloadSimple size={20} />
            </MoreInfoButton>
          </EventCard>
        ))}
      </EventsGrid>
    </UpcomingEventsContainer>
  );
}