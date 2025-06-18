import styled from 'styled-components';

const theme = {
  "text-dark-blue": "#3363B5",
  "text-gray": "#555",
  "background-modal-overlay": "rgba(0, 0, 0, 0.5)",
  "background-modal-content": "#fff",
  "font-family-body": "Arial, sans-serif",
  "font-family-heading": "Georgia, serif",
  "border-gray": "#ccc",
};

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme["background-modal-overlay"]};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  background-color: ${theme["background-modal-content"]};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 600px;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  max-height: 90vh; 
  overflow-y: auto; 
  position: relative;
  font-family: ${theme["font-family-body"]};

  @media (max-width: 768px) {
    padding: 1em;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  margin-bottom: 1em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid ${theme["border-gray"]};
`;

export const ModalTitle = styled.h2`
  font-size: 1.8em;
  color: ${theme["text-dark-blue"]};
  margin: 0;
  line-height: 1.2;
  font-family: ${theme["font-family-heading"]};

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${theme["text-dark-blue"]};
  cursor: pointer;
  font-size: 1.5em;
  padding: 0.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const ModalBody = styled.div`
  line-height: 1.6;
  color: ${theme["text-gray"]};
`;

export const ModalDate = styled.p`
  font-weight: bold;
  color: ${theme["text-dark-blue"]};
  margin-bottom: 1em;
  font-size: 1.1em;
`;

export const ModalDescription = styled.p`
  font-size: 1em;
  white-space: pre-wrap;
`;