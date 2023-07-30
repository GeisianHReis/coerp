import 'bootstrap/dist/css/bootstrap.css';
import { Box, FaixaDaHome, FaixaDeAvisos, Galeria, GaleriaPc } from "../../styles/Home/styles";
import imagemTop from "../../../assets/Ativo 5.png";
import imagemCulto from "../../../assets/FotosCulto/Guaianases/IMG_0787.jpg";
import imagemCulto2 from "../../../assets/FotosCulto/Guaianases/IMG_0837.jpg";
import imagemCulto3 from "../../../assets/FotosCulto/Guaianases/IMG_1060 (1).jpg";
import imagemCulto4 from "../../../assets/FotosCulto/Guaianases/IMG_0787.jpg";
import imagemCulto5 from "../../../assets/WhatsApp Image 2023-07-19 at 17.52.55 (1).jpeg";
import imagemCulto6 from "../../../assets/WhatsApp Image 2023-07-19 at 17.52.54 (1).jpeg";
import { FooterTelaMenor } from '../../../components/FooterTelaMenor';
import { TopMobile } from '../../../components/TopMobile';
import { Button } from '@mui/material';


export function Home() {

    return (
        <>
            <TopMobile name="" />
            <Box>
                <img src={imagemTop}></img>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/3atoVKcLt2M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </Box>
            <FaixaDaHome>
                <h1>
                    FESTA DAS NAÇÕES 
                </h1>
                <p>
                    NÃO PERCA!
                </p>
            </FaixaDaHome>

            <FaixaDeAvisos>
                <GaleriaPc>
                    <div>
                        <h1>GALERIA</h1>
                    </div>
                    <Galeria> <img src={imagemCulto} alt="" /> <img src={imagemCulto2} alt="" /> <img src={imagemCulto3} alt="" /> <img src={imagemCulto4} alt="" /> <img src={imagemCulto5} alt="" /> <img src={imagemCulto6} alt="" /> </Galeria>
                    <Button href='https://www.instagram.com/coerpjesusecaminho/' target="_blank" variant="contained">
                        Ver mais...
                    </Button>
                </GaleriaPc>
            </FaixaDeAvisos>
            <FooterTelaMenor />
        </>
    )
};