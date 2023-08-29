import 'bootstrap/dist/css/bootstrap.css';
import { Box, FaixaDaHome, FaixaDeAvisos, Galeria, GaleriaPc } from "../../styles/Home/styles";
import imagemTop from "../../../assets/Ativo 5.png";
import imagemCulto from "../../../assets/FotosCulto/Guaianases/dadfafsad.webp";
import imagemCulto2 from "../../../assets/FotosCulto/Guaianases/IMG_0837.webp";
import imagemCulto3 from "../../../assets/FotosCulto/Guaianases/IMG_1060 (1).webp";
import imagemCulto4 from "../../../assets/FotosCulto/Guaianases/fd.webp";
import imagemCulto5 from "../../../assets/FotosCulto/Guaianases/IMG_1415.webp";
import imagemCulto6 from "../../../assets/FotosCulto/Guaianases/IMG_1424.webp";
import { FooterTelaMenor } from '../../../components/FooterTelaMenor';
import { TopMobile } from '../../../components/TopMobile';
import { Button } from '@mui/material';
import { Helmet } from 'react-helmet';


export function Home() {

    return (
        <>
            <Helmet>
                <title>Igreja Coerp - Comunidade Evangélica Redenção Plena | Seja Parte da Nossa Missão</title>
                <meta name="description" content="Uma igreja que entendeu o ide do Senhor. Somos um só corpo, com um só propósito: compartilhar o amor de Cristo e transformar vidas. Venha fazer parte dessa missão!" />
            </Helmet>
            <TopMobile name="" />
            <Box>
                <img src={imagemTop} alt='logo com o texto "um corpo um só propósito"'></img>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/X0SBqUJZRkU?&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Box>
            <FaixaDaHome>
                <h1>
                    CULTO DE ORAÇÃO
                </h1>
                <p>
                    29/08 - PARTICIPE CONOSCO!
                </p>
            </FaixaDaHome>

            <FaixaDeAvisos>
                <GaleriaPc>
                    <div>
                        <h1>GALERIA</h1>
                    </div>
                    <Galeria> <img src={imagemCulto6} alt="irmãos da igreja reunidos segurando algodão doce" /> <img src={imagemCulto2} alt="multidão reunida na igreja louvando" /> <img src={imagemCulto3} alt="irmãos se abraçando em comunhão" /> <img src={imagemCulto} alt="três irmãs louvando e orando" /> <img src={imagemCulto5} alt="irmãos sorridentes" /> <img src={imagemCulto4} alt="ministério de louvor e dança reunidos" /> </Galeria>
                    <Button href='https://www.instagram.com/coerpjesusecaminho/' target="_blank" variant="contained">
                        Ver mais...
                    </Button>
                </GaleriaPc>
            </FaixaDeAvisos>
            <FooterTelaMenor />
        </>
    )
};