import React, { useState } from 'react';
import { CaretLeft, CaretRight, X } from '@phosphor-icons/react'; 
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

export interface AgendaEventProps {
  id: string; 
  date: string; 
  title: string; 
  shortDescription: string; 
  fullDescription: string; 
}

const dummyEvents: AgendaEventProps[] = [
  {
    id: '1',
    date: 'Dia 18/04 às 13h',
    title: 'Páscoa Solidária',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui est. Cura bitur imper diet nisl sit amet dolor mole stie pelle nte.',
    fullDescription: 'Detalhes completos sobre a Páscoa Solidária: A Páscoa Solidária é um evento anual da nossa igreja dedicado a levar esperança e ajuda às comunidades carentes. Neste ano, estaremos arrecadando alimentos não perecíveis e kits de higiene pessoal. Agradecemos a sua participação!',
  },
  {
    id: '2',
    date: 'Dia 19/04 às 19h',
    title: 'Ordenação Pastoral',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui est. Cura bitur imper diet nisl sit amet dolor mole stie pelle nte.',
    fullDescription: 'Detalhes completos sobre a Ordenação Pastoral: Celebração especial para a ordenação de novos pastores em nossa comunidade. Venha prestigiar e abençoar a vida daqueles que dedicam suas vidas ao serviço de Deus. Teremos um momento de louvor, pregação e consagração.',
  },
  {
    id: '3',
    date: 'Mês de Abril',
    title: 'Aniversário da Igreja',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui est. Cura bitur imper diet nisl sit amet dolor mole stie pelle nte.',
    fullDescription: 'Detalhes completos sobre o Aniversário da Igreja: Um mês de celebração e gratidão pelos anos de bênçãos da nossa igreja! Teremos uma programação especial durante todo o mês de abril, com cultos temáticos, eventos sociais e momentos de comunhão. Fique ligado na nossa agenda para não perder nada!',
  },
  {
    id: '4',
    date: 'Dia 00/00 às 00h',
    title: 'Nome do Evento',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui est. Cura bitur imper diet nisl sit amet dolor mole stie pelle nte.',
    fullDescription: 'Detalhes completos sobre o Evento 4: Descrição detalhada do quarto evento para o popup.',
  },
  {
    id: '5',
    date: 'Dia 00/00 às 00h',
    title: 'Nome do Evento',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui est. Cura bitur imper diet nisl sit amet dolor mole stie pelle nte.',
    fullDescription: 'Detalhes completos sobre o Evento 5: Descrição detalhada do quinto evento para o popup.',
  },
  {
    id: '6',
    date: 'Dia 00/00 às 00h',
    title: 'Nome do Evento',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui est. Cura bitur imper diet nisl sit amet dolor mole stie pelle nte.',
    fullDescription: 'Detalhes completos sobre o Evento 6: Descrição detalhada do sexto evento para o popup.',
  },
];

export function ProgramacaoF() {
  const [currentMonth, setCurrentMonth] = useState('ABRIL.2025');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AgendaEventProps | null>(null);

  const handleMonthChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentMonth('MARÇO.2025');
    } else {
      setCurrentMonth('MAIO.2025');
    }
  };

  const handleOpenModal = (event: AgendaEventProps) => {
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
            <CaretLeft size={24} />
          </MonthButton>
          <MonthDisplay>{currentMonth}</MonthDisplay>
          <MonthButton onClick={() => handleMonthChange('next')}>
            <CaretRight size={24} />
          </MonthButton>
        </MonthNavigator>
      </HeaderSection>

      <EventsGrid>
        {dummyEvents.map((event) => (
          <EventCard key={event.id} event={event} onMoreInfoClick={handleOpenModal} />
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
