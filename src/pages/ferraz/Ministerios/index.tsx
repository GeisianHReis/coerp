import { Grid } from "@mui/material";
import { Box } from "../../styles/Ministerios/styles";
import AlertDialogSlide from "./Modal";
import { MinisterioUm } from "../../styles/Ministerios/styles";
import { CardScrool } from "../../styles/Ministerios/styles";
import { BotaoUm } from "../../styles/Ministerios/styles";
import { Helmet } from "react-helmet";
import { useCallback, useEffect, useState } from "react";
import client from "../../../cms/Dato/client";
import gql from "graphql-tag";
import { v4 as uuidv4 } from 'uuid';

export function MinisteriosF() {
    interface Ministerio {
        key: string;
        nome: string;
        slogan: string;
        descricao: string;
        lider: string;
        imagemLider: {
            url: string;
        };
        logo: {
            url: string | null;
        };

    }

    const [ministerios, setMinisterios] = useState<Ministerio[]>([]);

    const fetchData = useCallback(() => {
        client.query({
            query: gql`
                {
                allMinisteriosferrazs {
                    nome
                    slogan
                    descricao
                    lider
                    imagemLider {
                    url
                    }
                    logo {
                    url
                    }
                }
                }
              `
        })
            .then((res) => {
                console.log(res.data.allMinisteriosferrazs);
                const ministeriosComKeys = res.data.allMinisteriosferrazs.map((ministerio: Ministerio) => ({
                    ...ministerio,
                    key: uuidv4(),
                }));
                console.log(ministeriosComKeys);
                setMinisterios(ministeriosComKeys);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <Helmet>
                <title>Ministérios Coerp em Guaianases | Comunidade e Liderança</title>
                <meta name="description" content="Explore os Ministérios da Igreja Coerp em Guaianases: Envolva-se em atividades significativas e fortaleça sua conexão espiritual. Descubra como cada ministério contribui para a comunidade. Fique por dentro de tudo!" />
            </Helmet>
            <Box>
                <h1>NOSSOS MINISTÉRIOS</h1>
                <Grid container spacing={2} alignItems={"center"} >
                    <CardScrool>
                        {ministerios.map((ministerio) => (
                            <MinisterioUm key={ministerio.key}>
                                <img src={ministerio.logo?.url ?? ""} alt={ministerio.nome} />
                                <BotaoUm>
                                    <h4>{ministerio.nome}</h4>
                                    <p>{ministerio.slogan}</p>
                                    <AlertDialogSlide titulo={ministerio.nome} texto={ministerio.descricao} nomeLider1={ministerio.lider}></AlertDialogSlide>
                                </BotaoUm>
                            </MinisterioUm>
                        ))}
                    </CardScrool>
                </Grid>
            </Box>
        </>
    )
};