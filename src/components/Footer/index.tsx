import * as React from 'react';
import qrcoe from "../../assets/qrCode.jpeg";
import Alert from "@mui/material/Alert";
import { FooterStyle, Secao } from './styles';
import { Snackbar } from '@mui/material';
import { WhatsappLogo, MapPin, Copy } from '@phosphor-icons/react';
import { useContext } from 'react';
import UnidadeContext from '../../UnidadeContext';


export function Footer() {

    const copiar = () => {
        navigator.clipboard.writeText("59.643.692/0001-39");
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
    const { unidadeSelecionada } = useContext(UnidadeContext);

    return (
        <FooterStyle>
            {unidadeSelecionada === "Ferraz" ? <Secao > <WhatsappLogo size={28} color="white" /> (11) 99946-1311 </Secao> : <Secao > <WhatsappLogo size={28} color="white" /> (11) 99834-9992 </Secao>}
            <Secao><MapPin size={28} /> <p>R: Quatorze de Outubro, 235 </p> <p>Sítio Paredão - Ferraz de Vasconcelos</p> </Secao>
            <Secao><MapPin size={28} /><p> Rua Castanho Taques, 64B</p><p> Jardim São Paulo - Guaianases </p></Secao>
            {unidadeSelecionada === "Ferraz" ? <Secao><p>Contribua:</p> <p><img src={qrcoe} /> </p> Chave PIX: <p id="texto">59.643.692/0001-39 <Copy cursor={"pointer"} size={20} onClick={handleClick} /></p> </Secao> : ""}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Chave pix copiada com sucesso!
                </Alert>
            </Snackbar>
        </FooterStyle>
    )
};