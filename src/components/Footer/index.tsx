import * as React from 'react';
import qrcoe from "../../assets/qrCode.webp";
import logoCoerp from "../../assets/Logo Coerp azul.png"; // Assuming you have a logo for the footer
import Alert from "@mui/material/Alert";
import {
  FooterContainer,
  MainContent,
  Section,
  LogoSection,
  SocialIcons,
  SocialButton,
  LinksSection,
  LocationSection,
  LocationButton,
  AddressText,
  ContributeSection,
  PixKeyContainer,
  Separator,
  PixCopyButton,
} from './styles';
import { Snackbar } from '@mui/material';
import {
  YoutubeLogo,
  FacebookLogo,
  InstagramLogo,
  Phone,
  Copy,
  CaretDown,
  CaretRight,
} from '@phosphor-icons/react';
import { useContext } from 'react';
import UnidadeContext from '../../UnidadeContext';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const copiarPix = () => {
    navigator.clipboard.writeText("59.643.692/0001-39");
  }

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCopyClick = () => {
    setOpenSnackbar(true);
    copiarPix();
  };

  const handleCloseSnackbar = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const { unidadeSelecionada, setUnidadeSelecionada } = useContext(UnidadeContext);
  const navigate = useNavigate();

  const handleLocationChange = (unit: 'Ferraz' | 'Guaianases') => {
    setUnidadeSelecionada(unit);
  };

  return (
    <FooterContainer>
      <MainContent>
        <LogoSection>
          <img src={logoCoerp} alt="Logo COERP" />
          <h2>Um Só Corpo <br /> Um Só Propósito.</h2>
          <p>Desde 13 de Abril de 1976</p>
          <SocialIcons>
            <SocialButton href="https://www.youtube.com/@coerp" target="_blank" aria-label="YouTube">
              <YoutubeLogo size={24} color="white" />
            </SocialButton>
            <SocialButton href="https://www.facebook.com/coerp.ferraz" target="_blank" aria-label="Facebook">
              <FacebookLogo size={24} color="white" />
            </SocialButton>
            <SocialButton href="https://www.instagram.com/coerpoficial/" target="_blank" aria-label="Instagram">
              <InstagramLogo size={24} color="white" />
            </SocialButton>
            <SocialButton href="tel:+5511999461311" aria-label="Phone">
              <Phone size={24} color="white" />
            </SocialButton>
          </SocialIcons>
        </LogoSection>

        <LinksSection>
          <h3>LINKS ÚTEIS</h3>
          <ul>
            <li><a href="#" onClick={() => navigate(`/${unidadeSelecionada.toLowerCase()}/home`)}>Home</a></li>
            <li><a href="#" onClick={() => navigate(`/${unidadeSelecionada.toLowerCase()}/cultos`)}>Cultos</a></li>
            <li><a href="#" onClick={() => navigate(`/${unidadeSelecionada.toLowerCase()}/ministerios`)}>Ministérios</a></li>
            <li><a href="#" onClick={() => navigate(`/${unidadeSelecionada.toLowerCase()}/sobre`)}>Sobre Nós</a></li>
          </ul>
        </LinksSection>

        <LocationSection>
          <h3>ESTAMOS AQUI</h3>
          <LocationButton onClick={() => handleLocationChange('Ferraz')}>
            Ferraz de Vasconcelos <CaretDown size={16} />
          </LocationButton>
          {unidadeSelecionada === 'Ferraz' && (
            <AddressText>
              R: Quatorze de Outubro, 235 <br />
              Sítio Paredão - Ferraz de Vasconcelos
            </AddressText>
          )}

          <LocationButton onClick={() => handleLocationChange('Guaianases')}>
            Guaianases <CaretRight size={16} /> 
          </LocationButton>
          {unidadeSelecionada === 'Guaianases' && (
            <AddressText>
              Rua Castanho Taques, 64B <br />
              Jardim São Paulo - Guaianases
            </AddressText>
          )}
        </LocationSection>

        <ContributeSection>
          <h3>CONTRIBUA</h3>
          <img src={qrcoe} alt="QR Code Pix" />
        </ContributeSection>
      </MainContent>

      <Separator />
      <PixKeyContainer>
        Chave do Pix: 59.643.692/0001-39
        <PixCopyButton onClick={handleCopyClick} aria-label="Copiar chave Pix">
          <Copy size={20} />
        </PixCopyButton>
      </PixKeyContainer>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Chave pix copiada com sucesso!
        </Alert>
      </Snackbar>
    </FooterContainer>
  );
}