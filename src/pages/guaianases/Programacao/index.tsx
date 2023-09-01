import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { ListaProgramacao, Box, BoxGeral } from "../../styles/Programacao/styles";
// import cartaz from "../../../assets/caldo-das-mulheres.webp";
import { Helmet } from "react-helmet";

export function Programacao() {
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
                    <h1>NOSSA AGENDA</h1>

                    <ListaProgramacao>
                        <p>09/09 e 23/09 - CULTO DE JOVENS 19h</p> <p></p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOMINGOS - CULTO DA FAMÍLIA 18h</p> <p></p>
                    </ListaProgramacao>
                </BoxGeral>
                {/* <BoxGeral>
                    <img src={cartaz} alt="banner informativo sobre o evento do dia 19 de agosto"/>
                </BoxGeral> */}

            </Box>
            <FooterTelaMenor />
        </>
    )
};