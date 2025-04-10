import * as React from 'react';
import qrcoe from "../../assets/qrCode.webp";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { Copy } from "@phosphor-icons/react";
import { useContext } from "react";
import UnidadeContext from "../../UnidadeContext";
import { FooterContainer, FooterSection, FooterLinks, Location, Contribution } from "./styles";

export function Footer() {
  const copiar = () => {
    navigator.clipboard.writeText("59.643.692/0001-39");
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    copiar();
  };

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const { unidadeSelecionada } = useContext(UnidadeContext);

  return (
    <FooterContainer>
      <FooterSection>
        <h2>COERP</h2>
        <p>Um Só Corpo <br /> Um Só Propósito.</p>
        <p>Desde 13 De Abril De 1976</p>
      </FooterSection>

      <FooterLinks>
        <h3>LINKS ÚTEIS</h3>
        <a href="#">Home</a>
        <a href="#">Cultos</a>
        <a href="#">Ministérios</a>
        <a href="#">Sobre Nós</a>
      </FooterLinks>

      <Location>
        <h3>ESTAMOS AQUI</h3>
        <select>
          <option>Ferraz de Vasconcelos</option>
          <option>Guaianases</option>
        </select>
        <p>R: Quatorze de Outubro, 235<br />Sítio Paredão - Ferraz de Vasconcelos</p>
      </Location>

      <Contribution>
        <h3>CONTRIBUA</h3>
        <img src={qrcoe} alt="QRCode pix igreja coerp" />
        <p>Chave do Pix: 59.643.692/0001-39 <Copy cursor="pointer" size={20} onClick={handleClick} /></p>
      </Contribution>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Chave pix copiada com sucesso!
        </Alert>
      </Snackbar>
    </FooterContainer>
  );
}