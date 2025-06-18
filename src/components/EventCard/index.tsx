import { DownloadSimple } from '@phosphor-icons/react';
import { Event } from '../../pages/ferraz/Programacao';

import {
  EventCardWrapper,
  EventDate,
  EventTitle,
  EventSeparator,
  EventDescription,
  MoreInfoButton,
} from './styles';

interface EventCardProps {
  event: Event;
  onMoreInfoClick: (event: Event) => void;
}

export function EventCard({ event, onMoreInfoClick }: EventCardProps) {
  return (
    <EventCardWrapper>
      <EventDate>{event.horario}</EventDate>
      <EventTitle>{event.evento}</EventTitle>
      <EventSeparator />
      <EventDescription>{event.informacoes}</EventDescription>
      <MoreInfoButton onClick={() => onMoreInfoClick(event)}>
        Mais Informações <DownloadSimple size={20} />
      </MoreInfoButton>
    </EventCardWrapper>
  );
}