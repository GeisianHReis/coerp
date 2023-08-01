import 'bootstrap/dist/css/bootstrap.css';
import { Box, FaixaDaHome, FaixaDeAvisos, Galeria, GaleriaPc } from "../../styles/Home/styles";
import imagemTop from "../../../assets/Ativo 5.png";
import imagemCulto1 from "../../../assets/FotosCulto/Ferraz/IMG_0940.jpg";
import imagemCulto2 from "../../../assets/FotosCulto/Ferraz/IMG_0841.jpg";
import imagemCulto3 from "../../../assets/FotosCulto/Ferraz/IMG_1060.jpg";
import imagemCulto4 from "../../../assets/FotosCulto/Ferraz/IMG_1074.jpg";
import imagemCulto5 from "../../../assets/FotosCulto/Ferraz/IMG_0883.jpg";
import imagemCulto6 from "../../../assets/FotosCulto/Ferraz/IMG_0797.jpg";
import { FooterTelaMenor } from '../../../components/FooterTelaMenor';
import { TopMobile } from '../../../components/TopMobile';
import { Button } from '@mui/material';


export function HomeF() {

    return (
        <>
            <TopMobile name="" />
            <Box>
                <img src={imagemTop}></img>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/3atoVKcLt2M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </Box>
            <FaixaDaHome>
                <h1>
                    Entrega de Marmitas 11/08
                </h1>
                <h1>
                    Envolva-se!
                </h1>

            </FaixaDaHome>

            <FaixaDeAvisos>
                <GaleriaPc>
                    <div>
                        <h1>GALERIA</h1>
                    </div>
                    <Galeria> <img src={imagemCulto1} alt="" /> <img src={imagemCulto2} alt="" /> <img src={imagemCulto3} alt="" /> <img src={imagemCulto4} alt="" /> <img src={imagemCulto5} alt="" /> <img src={imagemCulto6} alt="" /> </Galeria>
                    <Button href='https://drive.google.com/drive/folders/1TccHOK4Az0HkYGA1QTj3VmTJOjkv3YHu' target="_blank" variant="contained">
                        Ver mais...
                    </Button>
                </GaleriaPc>

            </FaixaDeAvisos>
            <FooterTelaMenor />
        </>
    )
};