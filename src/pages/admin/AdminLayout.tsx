import React, { useState } from 'react';
import {
  AdminContainer,
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  MenuItem,
  MainContent,
  MobileMenuButton,
  MobileOverlay,
} from './styles';

interface AdminLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

interface MenuItemData {
  key: string;
  label: string;
  icon: string;
  path?: string;
  comingSoon?: boolean;
}

const menuItems: MenuItemData[] = [
  { key: 'eventos', label: 'Eventos', icon: '📅', path: '/admin/Dato' },
  { key: 'lideres', label: 'Líderes', icon: '👥', comingSoon: true },
  { key: 'ministerios', label: 'Ministérios', icon: '⛪', comingSoon: true },
  { key: 'uploads', label: 'Arquivos', icon: '📁', comingSoon: true },
  { key: 'configuracoes', label: 'Configurações', icon: '⚙️', comingSoon: true },
];

export function AdminLayout({ children, currentPage = 'eventos' }: AdminLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (item: MenuItemData) => {
    if (item.comingSoon) {
      alert('Funcionalidade em desenvolvimento! 🚧');
      return;
    }
    if (item.path) {
      window.location.href = item.path;
    }
    // Fechar menu mobile após clique
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AdminContainer>
      {/* Botão do menu mobile */}
      <MobileMenuButton onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MobileMenuButton>

      {/* Overlay para fechar menu mobile */}
      {isMobileMenuOpen && <MobileOverlay onClick={() => setIsMobileMenuOpen(false)} />}

      <Sidebar isOpen={isMobileMenuOpen}>
        <SidebarHeader>
          <h2>Admin COERP</h2>
          <p>Painel de administração</p>
        </SidebarHeader>
        
        <SidebarMenu>
          {menuItems.map((item) => (
            <MenuItem
              key={item.key}
              active={currentPage === item.key}
              onClick={() => handleMenuClick(item)}
              style={{ 
                opacity: item.comingSoon ? 0.6 : 1,
                cursor: item.comingSoon ? 'not-allowed' : 'pointer'
              }}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">
                {item.label}
                {item.comingSoon && ' (Em breve)'}
              </span>
            </MenuItem>
          ))}
        </SidebarMenu>
      </Sidebar>

      <MainContent>
        {children}
      </MainContent>
    </AdminContainer>
  );
}