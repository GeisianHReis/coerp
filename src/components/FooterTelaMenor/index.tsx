import * as React from 'react';
import Alert from "@mui/material/Alert";
import { FooterEnd, FooterStyle, ItemFooter, Secao } from './styles';
import { Snackbar } from '@mui/material';
import { WhatsappLogo, MapPin, Copy } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import UnidadeContext from '../../UnidadeContext';


export function FooterTelaMenor() {

    const copiar = () => {


        navigator.clipboard.writeText("999.999.999.999");
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
    const { unidadeSelecionada } = React.useContext(UnidadeContext);

    const navigate = useNavigate();

    const handleHome = () => {
        unidadeSelecionada === "Ferraz" ? navigate('/ferraz/home') : navigate('/guaianases/home');
        window.scrollTo(0, 0);
    };
    const handleProgramacao = () => {
        unidadeSelecionada === "Ferraz" ? navigate('/ferraz/programacao') : navigate('/guaianases/programacao');
        window.scrollTo(0, 0);
    };
    const handleCultos = () => {
        unidadeSelecionada === "Ferraz" ? navigate('/ferraz/cultos') : navigate('/guaianases/cultos');
        window.scrollTo(0, 0);
    };
    const handleSobre = () => {
        unidadeSelecionada === "Ferraz" ? navigate('/ferraz/sobre') : navigate('/guaianases/sobre');
        window.scrollTo(0, 0);
    };
    const handleMinisterios = () => {
        unidadeSelecionada === "Ferraz" ? navigate('/ferraz/Ministerios') : navigate('/guaianases/Ministerios')
        window.scrollTo(0, 0);
    };

    return (
        <>
            <FooterStyle>
                <Secao><MapPin size={28} /> <p>R: Quatorze de Outubro 235 </p> <p>Sítio Paredão - Ferraz de Vasconcelos</p> </Secao>
                <Secao><MapPin size={28} /><p> Rua João Cabral Melo Neto, 10</p><p> Cid.Tiradentes - SP </p></Secao>
                <Secao><WhatsappLogo size={28} color="white" /> (11) 9999-9999 </Secao>
                <Secao><p>Contribua:</p> <p id="texto">Chave PIX: 999.999.999.999 <Copy cursor={"pointer"} size={20} onClick={handleClick} /></p>

                </Secao>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Chave pix copiada com sucesso!
                    </Alert>
                </Snackbar>
            </FooterStyle>
            <FooterEnd>
                <ItemFooter onClick={handleHome}>INÍCIO</ItemFooter>
                <ItemFooter onClick={handleProgramacao}>PROGRAMAÇÃO</ItemFooter>
                <ItemFooter onClick={handleCultos}>CULTOS</ItemFooter>
                <ItemFooter onClick={handleMinisterios}>MINISTÉRIOS</ItemFooter>
                <ItemFooter onClick={handleSobre}>SOBRE NÓS</ItemFooter>

            </FooterEnd>
        </>
    )
};