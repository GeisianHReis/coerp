import React from 'react';
import { DownloadSimple } from '@phosphor-icons/react';
import { AgendaEventProps } from '../../pages/ferraz/Programacao';

import {
  EventCardWrapper,
  EventDate,
  EventTitle,
  EventSeparator,
  EventDescription,
  MoreInfoButton,
} from './styles';

interface EventCardProps {
  event: AgendaEventProps;
  onMoreInfoClick: (event: AgendaEventProps) => void;
}

export function EventCard({ event, onMoreInfoClick }: EventCardProps) {
  return (
    <EventCardWrapper>
      <EventDate>{event.date}</EventDate>
      <EventTitle>{event.title}</EventTitle>
      <EventSeparator />
      <EventDescription>{event.shortDescription}</EventDescription>
      <MoreInfoButton onClick={() => onMoreInfoClick(event)}>
        Mais Informações <DownloadSimple size={20} />
      </MoreInfoButton>
    </EventCardWrapper>
  );
}