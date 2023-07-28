import 'bootstrap/dist/css/bootstrap.css';
import { Box, FaixaDaHome, FaixaDeAvisos, Galeria, GaleriaPc } from "../../styles/Home/styles";
import imagemTop from "../../../assets/Ativo 5.png";
import imagemCulto from "../../../assets/4d576c57-f428-4662-af3d-4adf9245081a.jpg";
import { FooterTelaMenor } from '../../../components/FooterTelaMenor';
import { TopMobile } from '../../../components/TopMobile';


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
                    <a href='https://www.instagram.com/coerpjesusecaminho/?igshid=MzRlODBiNWFlZA%3D%3D' target='_blank'>Saiba mais!</a>
                </p>

            </FaixaDaHome>

            <FaixaDeAvisos>
                <GaleriaPc>
                    <div>
                        <h1>GALERIA</h1>
                    </div>
                    <Galeria> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /></Galeria>
                </GaleriaPc>
                <a target='_blank' href='https://www.instagram.com/coerpjesusecaminho/?igshid=MzRlODBiNWFlZA%3D%3D'>Ver mais...</a>
            </FaixaDeAvisos>
            <FooterTelaMenor />
        </>
    )
};