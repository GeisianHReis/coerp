import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { ListaProgramacao, Box, BoxGeral } from "../../styles/Programacao/styles";
import cartaz from "../../../assets/banner entrega das marmitas (2).png";
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
                    <h1>AGENDA DE AGOSTO</h1>
                    <ListaProgramacao>
                        <p>DOM. 06 - INTERCESSÃO HOMENS E MULHERES</p> <p>8:30h</p>
                    </ListaProgramacao>
                    <ListaProgramacao> <p>DOM. 06 - SANTA CEIA</p> <p>13h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 07- INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 09 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 10 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao className="destaque">
                        <p>SEX. 11 - ENTREGA DE MARMITAS</p> <p>18:30h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 12 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 13 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 14 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 16 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 17 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 19 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 18 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 21 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 23 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 24 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 26 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 27 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 28 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>TER. 29 - ENCONTRO MULHERES COM PROPÓSITO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 30 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>

                </BoxGeral>
                <BoxGeral>
                    <img src={cartaz} alt="Cartaz entrega de marmitas, igreja coerp"/>
                </BoxGeral>

            </Box>
            <FooterTelaMenor />
        </>
    )
};