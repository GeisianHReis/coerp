import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { ListaProgramacao, Box, BoxGeral } from "../../styles/Programacao/styles";
import cartaz from "../../../assets/ano2023.webp";
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
                    <h1>AGENDA DE DEZEMBRO</h1>

                    <ListaProgramacao>
                        <p>SEX. 01 - VIGÍLIA DE GRATIDÃO</p> <p>21h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <b><p>SAB. 09 - CULTO DE CASAIS - EM FERRAZ</p></b> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 23 - ENTREGA DAS MARMITAS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <b><p>SAB. 23 - CULTO DA FAMÍLIA - FINAL DE ANO</p></b> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <b><p>SAB. 30 - CULTO DA FAMÍLIA - FINAL DE ANO</p></b> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>2º E 4º SAB - CULTO DE JOVENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM - CULTO DA FAMÍLIA</p> <p>18h</p>
                    </ListaProgramacao>
                </BoxGeral>
                <BoxGeral>
                    <img src={cartaz} alt="Comunicado cultos de fim do ano, igreja coerp" />
                </BoxGeral>

            </Box>
            <FooterTelaMenor />
        </>
    )
};