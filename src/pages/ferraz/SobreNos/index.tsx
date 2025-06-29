import { ListaProgramacao, GaleriaDaliderança, Liderança, } from "../../styles/SobreNos/styles";
import estatutoPdf from "../../../assets/Documentos/Estatuto da Igreja.pdf"
import doutrina from "../../../assets/Documentos/DOUTRINAS DO MINISTÉRIO COERP e CIDADE TIRADENTES.pdf"
import { Button } from "@mui/material";
import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { Helmet } from "react-helmet";
import { useCallback, useEffect, useState } from "react";
import client from "../../../cms/Dato/client";
import gql from "graphql-tag";
import { v4 as uuidv4 } from 'uuid';

export function SobreNosF() {
    interface SobreNos {
        key: string;
        nome: string;
        foto?: {
            url: string;
        };
    }
    const [lideres, setLideres] = useState<SobreNos[]>([]);
    const [estatuto, setEstatuto] = useState<string>("");

    const dataEstatuto = useCallback(() => {
        client.query({
            query: gql`
                {
                    textosobreno{
                        texto
                    }
}
            `
        })
            .then((res) => {
                console.log(res.data.textosobreno);
                setEstatuto(res.data.textosobreno?.texto || "");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const fetchData = useCallback(() => {
        client.query({
            query: gql`
                {
                allSobrenosferrazs {
                    nome
                    foto {
                    url
                    }
                }
                }
              `
        })
            .then((res) => {
                console.log(res.data.allSobrenosferrazs);
                const lideresComKeys = res.data.allSobrenosferrazs.map((lider: SobreNos) => ({
                    ...lider,
                    key: uuidv4(),
                }));
                setLideres(lideresComKeys);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        dataEstatuto();
    }, [dataEstatuto]);
    return (
        <>
            <Helmet>
                <title>Sobre Nós | Igreja Coerp - Conheça Nossa História</title>
                <meta name="description" content="Descubra a história e valores da Igreja Coerp. Desde nossa origem até nossos princípios atuais, saiba mais sobre nós e nossa dedicação à comunidade." />
            </Helmet>
            <ListaProgramacao>
                <h1>NOSSA HISTÓRIA</h1>
                {formatarTexto(estatuto)}
                <h1>
                    NOSSA LIDERANÇA
                </h1>
                <GaleriaDaliderança>
                    {lideres.map((lider) => (
                        <Liderança key={lider.key}>
                            <img src={lider.foto?.url} alt={lider.nome} />
                            {lider.nome}
                        </Liderança>
                    ))}
                </GaleriaDaliderança>
                <Button href={estatutoPdf} target="_blank" variant="contained">
                    Baixar nosso estatuto &nbsp;<DownloadSimpleIcon size={20} weight="bold" color="white" />
                </Button>
                <br />
                <Button href={doutrina} target="_blank" variant="contained">
                    Baixar nossa doutrina &nbsp;<DownloadSimpleIcon size={20} weight="bold" color="white" />
                </Button>
                <br />
            </ListaProgramacao>
        </>
    )
};

const formatarTexto = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));
};