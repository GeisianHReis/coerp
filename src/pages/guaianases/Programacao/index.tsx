import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { ListaProgramacao, Box, BoxGeral } from "../../styles/Programacao/styles";
import { Helmet } from "react-helmet";
import gql from 'graphql-tag';
import { useEffect, useState } from "react";
import client  from "../../../CMS/Service/dato";

export function Programacao() {
    interface Evento {
        evento: string;
        horario: string;
        destaque: boolean;
    }
    const [eventos, setEventos] = useState<Evento[]>([]);
    const [cartaz, setCartaz] = useState<{ url: string, alt: string }>({ url: "", alt: ""});

      useEffect(() => {
        client.query({
            query: gql`{
                allProgramacaoguaianases{
                  evento
                  horario
                  destaque
                }
              }`
        })
        .then((res) => {
            setEventos(res.data.allProgramacaoguaianases);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

      useEffect(() => {
        client.query({
            query: gql`{
                cartazprogramacaoguaianase{
                  cartaz{
                    url
                }
                alt
                }
              }`
        })
        .then((res) => {
            setCartaz(res.data.cartazprogramacaoguaianase.cartaz);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <>
            <Helmet>
                <title>Programação da Igreja Coerp em Guaianases | Cultos, Eventos e Atividades</title>
                <meta name="description" content="Explore a Programação da Igreja Coerp em Guaianases. Descubra cultos, eventos e atividades inspiradoras para fortalecer sua fé e comunidade. Junte-se a nós!" />
            </Helmet>
            <TopMobile name="PROGRAMAÇÃO" />
            <Side name="PROGRAMAÇÃO" />
            <Box>
                <BoxGeral>
                <h1><b>AGENDA</b></h1>
                {eventos.map((evento) => (
                <ListaProgramacao className={evento.destaque ? "destaque" : ""}>
                    <p>{evento.evento.toUpperCase()}</p>
                    <p>{evento.horario}</p>
                </ListaProgramacao>
                ))}
                </BoxGeral>
                <BoxGeral>
                {cartaz && (
                <img src={cartaz.url} alt={cartaz.alt}/> 
                )}
                </BoxGeral>

            </Box>
            <FooterTelaMenor />
        </>
    )
};