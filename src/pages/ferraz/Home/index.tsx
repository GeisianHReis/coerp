import 'bootstrap/dist/css/bootstrap.css';
import { Box, FaixaDaHome, FaixaDeAvisos, Galeria, GaleriaPc } from "../../styles/Home/styles";
import imagemTop from "../../../assets/Ativo 5.png";
import imagemCulto from "../../../assets/4d576c57-f428-4662-af3d-4adf9245081a.jpg";
import { FooterTelaMenor } from '../../../components/FooterTelaMenor';
import { TopMobile } from '../../../components/TopMobile';


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
                    CONFERENCIA KOINONIA 2
                </h1>
                <p>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdko1BPZVtuDWyC2HvTdulMgDmh8OgH2n9ZalByZT6ToXtrKg/viewform' target='_blank'>faça aqui sua inscrição!</a>
                </p>

            </FaixaDaHome>

            <FaixaDeAvisos>
                <GaleriaPc>
                    <div>
                        <h1>GALERIA</h1>
                    </div>
                    <Galeria> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /> <img src={imagemCulto} alt="" /></Galeria>
                </GaleriaPc>
                <a target='_blank' href='https://www.instagram.com/igrejacoerp/'>Ver mais...</a>
            </FaixaDeAvisos>
            <FooterTelaMenor />
        </>
    )
};