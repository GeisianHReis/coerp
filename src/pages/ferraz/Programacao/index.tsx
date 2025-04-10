import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { ListaProgramacao, Box, BoxGeral } from "../../styles/Programacao/styles";
import { Helmet } from "react-helmet";
import gql from 'graphql-tag';
import { useEffect, useState } from "react";
import client from "../../../CMS/Service/dato";
 
export function ProgramacaoF() {
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
                allProgramacaoferrazs{
                  evento
                  horario
                  destaque
                }
              }`
        })
        .then((res) => {
            setEventos(res.data.allProgramacaoferrazs);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

      useEffect(() => {
        client.query({
            query: gql`{
                cartazprogramacaoferraz{
                  cartaz{
                    url
                }
                alt
                }
              }`
        })
        .then((res) => {
            setCartaz(res.data.cartazprogramacaoferraz.cartaz);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <>
            <Helmet>
                <title>Programação da Igreja Coerp em Ferraz de Vasconcelos | Cultos, Eventos e Atividades</title>
                <meta name="description" content="Explore a Programação da Igreja Coerp em Ferraz de Vasconcelos. Descubra cultos, eventos e atividades inspiradoras para fortalecer sua fé e comunidade. Junte-se a nós!" />
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