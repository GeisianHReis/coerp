import { X } from '@phosphor-icons/react';
import { Event } from '../../pages/ferraz/Programacao';

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
  event: Event;
}

export function EventModal({ isOpen, onClose, event }: EventModalProps) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{event.evento}</ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <ModalDate>{event.horario}</ModalDate>
          <ModalDescription>
            {event.descricao?.value.document.children[0].children[0].value}
            <a href={event.descricao?.value.document.children[0].children[1]?.url} target="_blank" rel="noopener noreferrer">
              {event.descricao?.value.document.children[0].children[1]?.children[0]?.value}
            </a>
          </ModalDescription>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}