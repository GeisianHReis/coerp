import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Box, Container } from "../../styles/Devocionais/styles";
import AlertDialogSlide from "./Modal";
import queryString from "query-string";
import { Helmet } from "react-helmet";
import gql from 'graphql-tag';
import { useEffect, useState } from "react";
import  client  from "../../../cms/Dato/client";

export function Devocional() {
    interface Devocionais {
        titulo: string;
        texto: string;
        data: string;
        slug: string;
      }
    const [devocional, setDevocional] = useState<Devocionais[]>([]);
    useEffect(() => {
        client.query({
            query: gql`{
                allDevocionalguaianases{
                titulo
                data
                texto
                slug
              }
            }`
        })
            .then((res) => {
                setDevocional(res.data.allDevocionalguaianases);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const getIdFromURL = () => {
        const parsed = queryString.parse(window.location.search);
        return parsed.modal || null;
    };

    return (
        <Box>
            <Helmet>
                <title>Devocionais | Igreja Coerp - Reflexões Diárias para Fortalecer Sua Fé</title>
                <meta name="description" content="Acesse os devocionais da Igreja Coerp para reflexões semanais inspiradoras. Encontre mensagens que irão fortalecer sua fé e conectar você a Deus em momentos especiais de meditação." />
            </Helmet>
            <h1>DEVOCIONAIS</h1>
            <Container>
            {devocional.map((devocional) => (
                    <section>
                        <h2>{devocional.titulo}</h2>
                        <h3>{devocional.data}</h3>
                        <p>Reflita na palavra de Deus.<AlertDialogSlide id={devocional.slug} isOpen={getIdFromURL() === devocional.slug} titulo={devocional.titulo} texto={devocional.texto} ></AlertDialogSlide>
                        </p>
                    </section>
                ))}
            </Container>
        </Box >
    )
};