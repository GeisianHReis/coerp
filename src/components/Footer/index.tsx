import * as React from 'react';
import logo from "../../assets/images.png";
import Alert from "@mui/material/Alert";
import { FooterStyle, Secao } from './styles';
import { Snackbar } from '@mui/material';
import { WhatsappLogo, MapPin, Copy } from '@phosphor-icons/react';


export function Footer() {

    const copiar = () => {
        const textoCopiado = document.getElementById("texto");
        const texto: any = textoCopiado?.textContent;
        navigator.clipboard.writeText(texto);
    }

        const [open, setOpen] = React.useState(false);
      
        const handleClick = () => {
          setOpen(true);
          copiar();
        };
      
        const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
        };

    return (
        <FooterStyle>
            <Secao><WhatsappLogo size={28} color="white" /> (11) 9999-9999 </Secao>
            <Secao><MapPin size={28} /> <p>R: Quatorze de Outubro 235 </p> <p>Sítio Paredão - Ferraz de Vasconcelos</p> </Secao>
            <Secao><MapPin size={28} /><p> Rua João Cabral Melo Neto, 10</p><p> Cid.Tiradentes - SP </p></Secao>
            <Secao><p>Contribua:</p> <p><img src={logo} /> </p> Chave PIX: <p id="texto">999.999.999.999 <Copy cursor={"pointer"} size={20} onClick={handleClick} /></p>

            </Secao>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Chave pix copiada com sucesso!
                </Alert>
            </Snackbar>
        </FooterStyle>
    )
};