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

  // Safe access helpers
  const childrenArr = event?.descricao?.value?.document?.children;
  const hasChildren = Array.isArray(childrenArr) && childrenArr.length > 0;
  const firstChild = hasChildren ? childrenArr[0] : undefined;
  const firstChildChildren = firstChild && Array.isArray(firstChild.children) ? firstChild.children : [];
  const mainText = firstChildChildren[0]?.value || '';
  const hasLink = firstChildChildren.length > 1 && firstChildChildren[1]?.url;
  const linkUrl = hasLink ? firstChildChildren[1].url : undefined;
  const linkText = hasLink && firstChildChildren[1].children && firstChildChildren[1].children[0]?.value ? firstChildChildren[1].children[0].value : '';

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
            {mainText}
            {hasLink && linkUrl && (
              <>
                <br />
                <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                  {linkText || linkUrl}
                </a>
              </>
            )}
          </ModalDescription>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}