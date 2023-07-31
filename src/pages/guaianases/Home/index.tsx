import 'bootstrap/dist/css/bootstrap.css';
import { Box, FaixaDaHome, FaixaDeAvisos, Galeria, GaleriaPc } from "../../styles/Home/styles";
import imagemTop from "../../../assets/Ativo 5.png";
import imagemCulto from "../../../assets/FotosCulto/Guaianases/dadfafsad.jpg";
import imagemCulto2 from "../../../assets/FotosCulto/Guaianases/IMG_0837.jpg";
import imagemCulto3 from "../../../assets/FotosCulto/Guaianases/IMG_1060 (1).jpg";
import imagemCulto4 from "../../../assets/FotosCulto/Guaianases/fd.jpg";
import imagemCulto5 from "../../../assets/FotosCulto/Guaianases/IMG_1415.jpg";
import imagemCulto6 from "../../../assets/FotosCulto/Guaianases/IMG_1424.jpg";
import video from "../../../assets/Documentos/VIDEO INSTITIUCIONAL.mp4";
import { FooterTelaMenor } from '../../../components/FooterTelaMenor';
import { TopMobile } from '../../../components/TopMobile';
import { Button } from '@mui/material';
import { Helmet } from 'react-helmet';


export function Home() {

    return (
        <>
            <Helmet>
                <meta name="description" content="Coerp, uma igreja unida em um unico proposito" />
            </Helmet>
            <TopMobile name="" />
            <Box>
                <img src={imagemTop}></img>
                <video width="100%" height="315" autoPlay controls>
                    <source src={video} type="video/mp4" /> </video>
            </Box>
            <FaixaDaHome>
                <h1>
                    FESTA DAS NAÇÕES
                </h1>
                <p>
                    05/08 - NÃO PERCA!
                </p>
            </FaixaDaHome>

            <FaixaDeAvisos>
                <GaleriaPc>
                    <div>
                        <h1>GALERIA</h1>
                    </div>
                    <Galeria> <img src={imagemCulto6} alt="" /> <img src={imagemCulto2} alt="" /> <img src={imagemCulto3} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto5} alt="" /> <img src={imagemCulto4} alt="" /> </Galeria>
                    <Button href='https://www.instagram.com/coerpjesusecaminho/' target="_blank" variant="contained">
                        Ver mais...
                    </Button>
                </GaleriaPc>
            </FaixaDeAvisos>
            <FooterTelaMenor />
        </>
    )
};