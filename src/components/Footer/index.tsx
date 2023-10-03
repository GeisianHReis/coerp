import * as React from 'react';
import qrcoe from "../../assets/qrCode.webp";
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
            {unidadeSelecionada === "Ferraz" ? <Secao > <a href="https://wa.me/11999461311"> <WhatsappLogo size={28} color="white" /> (11) 99946-1311</a> </Secao> : <Secao > <a href="https://wa.me/11998349992"><WhatsappLogo size={28} color="white" /> (11) 99834-9992 </a> </Secao>}

            <Secao><a href=" https://www.google.com/maps/dir//Coerp+-+Comunidade+Evangelica+Reden%C3%A7%C3%A3o+Plena+-+R.+Quatorze+de+Outubro,+235+-+S%C3%ADtio+Paredao,+Ferraz+de+Vasconcelos+-+SP,+08501-190/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94ce7acd540cbf55:0x83df1c53608bbf72?sa=X&ved=2ahUKEwij-YuN7b6BAxUWl5UCHT6tAAMQ48ADegQIDhAA&ved=2ahUKEwij-YuN7b6BAxUWl5UCHT6tAAMQ48ADegQIFRAO"><MapPin size={28} /> <p>R: Quatorze de Outubro, 235 </p> <p>Sítio Paredão - Ferraz de Vasconcelos</p> </a></Secao>

            <Secao><a href="https://www.google.com/maps/dir//R.+Castanho+Taques,+32+-+Jardim+S%C3%A3o+Paulo,+S%C3%A3o+Paulo+-+SP,+08461-310/@-23.5601021,-46.4132673,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce65bb4cf74363:0x9b0fc1bd663ed2bd!2m2!1d-46.410687!2d-23.5601021!3e0?entry=ttu"><MapPin size={28} /><p> Rua Castanho Taques, 64B</p><p> Jardim São Paulo - Guaianases </p></a></Secao>
            
            {unidadeSelecionada === "Ferraz" ? <Secao><p>Contribua:</p> <p><img src={qrcoe} alt="QRCode pix igreja coerp"/> </p> Chave PIX: <p id="texto">59.643.692/0001-39 <Copy cursor={"pointer"} size={20} onClick={handleClick} /></p> </Secao> : ""}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Chave pix copiada com sucesso!
                </Alert>
            </Snackbar>
        </FooterStyle>
    )
};