import 'bootstrap/dist/css/bootstrap.css';
import { Box, FaixaDaHome, FaixaDeAvisos, Galeria, GaleriaPc } from "../../styles/Home/styles";
import imagemTop from "../../../assets/Ativo 5.png";
import { FooterTelaMenor } from '../../../components/FooterTelaMenor';
import { TopMobile } from '../../../components/TopMobile';
import { Button } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import client from '../../../CMS/Service/dato';
import gql from 'graphql-tag';


export function Home() {
    interface Texto {
        titulo: string;
        subtitulo: string;
        link: string;
    }
    interface Galeria {
        url: string;
    }
    const [texto, setTexto] = useState<Texto>();
    const [galeria, setGaleria] = useState<Galeria[]>([]);

      useEffect(() => {
        client.query({
            query: gql` {
                textohomeguaianase{
                  titulo
                  subtitulo
                  link
                }
              }`
        })
        .then((res) => {
            setTexto(res.data.textohomeguaianase);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);      
    useEffect(() => {
        client.query({
            query: gql`{
                fotoshomeguaianase{
                  galeria{
                    url
                  }
                }
              }`
        })
        .then((res) => {
            setGaleria(res.data.fotoshomeguaianase.galeria);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
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
                        {texto?.titulo}
                    </h1>
                        
                    <h3>
                        {texto?.subtitulo}
                    </h3>
            </FaixaDaHome>
            <FaixaDeAvisos>
                <GaleriaPc>
                    <div>
                        <h1>GALERIA</h1>
                    </div>
                    <Galeria> {galeria.map((foto) => (
                            <img src={foto.url} alt="" />
                            ))}
                    </Galeria>
                    <Button href='https://www.instagram.com/coerpjesusecaminho/' target="_blank" variant="contained">
                        Ver mais...
                    </Button>
                </GaleriaPc>
            </FaixaDeAvisos>
            <FooterTelaMenor />
        </>
    )
};
