import styled from 'styled-components';
import { defaultTheme } from '../../styles/defaultTheme';

export const AdminContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: ${defaultTheme['font-family-default']};
`;

export const Sidebar = styled.aside<{ isOpen?: boolean }>`
  width: 250px;
  background: linear-gradient(135deg, ${defaultTheme['dark-blue']} 0%, ${defaultTheme.blue} 100%);
  color: ${defaultTheme.white};
  padding: 2rem 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    z-index: 1001;
  }
`;

export const SidebarHeader = styled.div`
  padding: 0 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 2rem;

  h2 {
    font-family: ${defaultTheme['font-family-heading']};
    font-size: 1.5rem;
    margin: 0;
    color: ${defaultTheme.white};
  }

  p {
    font-family: ${defaultTheme['font-family-paragraph']};
    font-size: 0.9rem;
    margin: 0.5rem 0 0;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    padding: 0 1rem 1.5rem;
    margin-bottom: 1.5rem;
    margin-top: 3rem; /* Espaço para o botão de fechar */
    
    h2 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.85rem;
    }
  }
`;

export const SidebarMenu = styled.nav`
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }

  .icon {
    margin-right: 0.75rem;
    font-size: 1.2rem;
  }

  .label {
    font-family: ${defaultTheme['font-family-botton']};
    font-size: 0.95rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 0.75rem;
    margin-bottom: 0.25rem;
    
    .icon {
      margin-right: 0.6rem;
      font-size: 1.1rem;
    }
    
    .label {
      font-size: 0.9rem;
    }
  }
`;

export const MainContent = styled.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
    padding-top: 4rem; /* Espaço para o botão do menu */
  }
`;

export const PageHeader = styled.div`
  background: ${defaultTheme.white};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  border-left: 4px solid ${defaultTheme.blue};

  h1 {
    font-family: ${defaultTheme['font-family-heading']};
    font-size: ${defaultTheme['size-heading']};
    color: ${defaultTheme['dark-blue']};
    margin: 0 0 0.5rem;
  }

  p {
    font-family: ${defaultTheme['font-family-paragraph']};
    font-size: ${defaultTheme['size-paragraph']};
    color: #666;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const ContentCard = styled.div`
  background: ${defaultTheme.white};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 8px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-family: ${defaultTheme['font-family-botton']};
    font-size: 0.95rem;
    font-weight: 600;
    color: ${defaultTheme['dark-blue']};
    margin-bottom: 0.5rem;
  }

  input, textarea, select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-family: ${defaultTheme['font-family-default']};
    font-size: 1rem;
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${defaultTheme.blue};
      box-shadow: 0 0 0 3px rgba(51, 99, 181, 0.1);
    }

    &:disabled {
      background-color: #f8f9fa;
      cursor: not-allowed;
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  input[type="checkbox"] {
    width: auto;
    margin: 0;
  }

  label {
    margin: 0;
    font-size: 0.9rem;
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-family: ${defaultTheme['font-family-botton']};
  font-size: ${defaultTheme['size-button']};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${props => {
    switch (props.variant) {
      case 'danger':
        return `
          background: ${defaultTheme.red};
          color: ${defaultTheme.white};
          &:hover { background: #d60707; transform: translateY(-1px); }
          &:disabled { background: #ccc; cursor: not-allowed; }
        `;
      case 'secondary':
        return `
          background: transparent;
          color: ${defaultTheme.blue};
          border: 2px solid ${defaultTheme.blue};
          &:hover { background: ${defaultTheme.blue}; color: ${defaultTheme.white}; }
          &:disabled { border-color: #ccc; color: #ccc; cursor: not-allowed; }
        `;
      default:
        return `
          background: ${defaultTheme.blue};
          color: ${defaultTheme.white};
          &:hover { background: ${defaultTheme['dark-blue']}; transform: translateY(-1px); }
          &:disabled { background: #ccc; cursor: not-allowed; }
        `;
    }
  }}
`;

export const Alert = styled.div<{ type: 'success' | 'error' | 'info' }>`
  padding: 1rem 1.25rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-family: ${defaultTheme['font-family-default']};
  font-size: 0.95rem;
  
  ${props => {
    switch (props.type) {
      case 'success':
        return `
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        `;
      case 'error':
        return `
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        `;
      default:
        return `
          background: #d1ecf1;
          color: #0c5460;
          border: 1px solid #bee5eb;
        `;
    }
  }}
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, ${defaultTheme['dark-blue']} 0%, ${defaultTheme.blue} 100%);
  font-family: ${defaultTheme['font-family-default']};
`;

export const LoginCard = styled.div`
  background: ${defaultTheme.white};
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;

  h2 {
    font-family: ${defaultTheme['font-family-heading']};
    font-size: 1.75rem;
    color: ${defaultTheme['dark-blue']};
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }
`;

// Componentes para menu mobile
export const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1002;
  background: ${defaultTheme.blue};
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  width: 50px;
  height: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    height: 3px;
    width: 100%;
    background: ${defaultTheme.white};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &:hover {
    background: ${defaultTheme['dark-blue']};
    transform: scale(1.05);
  }
`;

export const MobileOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;