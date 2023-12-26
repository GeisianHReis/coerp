import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { ListaProgramacao, Box, BoxGeral } from "../../styles/Programacao/styles";
import cartaz from "../../../assets/BATISMO.png";
import { Helmet } from "react-helmet";
 
export function ProgramacaoF() {
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
                <h1><b>AGENDA DE DEZEMBRO</b></h1>
                    <ListaProgramacao>
                        <p>SAB. 02 - VIGÍLIA FEITORES</p> <p>21h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p> DOM. 03 - SANTA CEIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao className="destaque">
                        <p>QUA. 06 - ALMOÇO CORAÇÃO VALENTE</p> <p>11h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 09 - CULTO DE CASAIS</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 10 - BATISMO</p> <p>10h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 10 - CULTO DA FAMÍLIA</p> <p>18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao className="destaque">
                        <p>SAB. 16 - SANTA CEIA REDE DE JOVENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 17 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEX. 22 - VIGÍLIA</p> <p>21h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 24 - CULTO DA FAMÍLIA</p> <p>10h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 31 - CULTO DA FAMÍLIA</p> <p>10h</p>
                    </ListaProgramacao>
                </BoxGeral>
                <BoxGeral>
                    <img src={cartaz} alt="Cartaz batismo, igreja coerp"/> 
                </BoxGeral>

            </Box>
            <FooterTelaMenor />
        </>
    )
};