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
                        <p>18/11 - ENTREGA DAS MARMITAS (PROJETO SOCIAL) - 19H30</p><p></p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>2º E 4º SÁBADO - CULTO DOS JOVENS - 19H</p> <p></p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOMINGOS - CULTO DA FAMÍLIA - 18h</p> <p></p>
                    </ListaProgramacao>
                </BoxGeral>
                <BoxGeral>
                </BoxGeral>
            </Box>
            <FooterTelaMenor />
        </>
    )
};