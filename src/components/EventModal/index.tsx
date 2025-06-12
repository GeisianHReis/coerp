import React from 'react';
import { X } from '@phosphor-icons/react';
import { AgendaEventProps } from '../../pages/ferraz/Programacao';

import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalDate,
  ModalDescription,
} from './styles';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: AgendaEventProps; // The event data to display
}

export function EventModal({ isOpen, onClose, event }: EventModalProps) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{event.title}</ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <ModalDate>{event.date}</ModalDate>
          <ModalDescription>{event.fullDescription}</ModalDescription>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}