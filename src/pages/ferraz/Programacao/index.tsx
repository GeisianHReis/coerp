import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { ListaProgramacao, Box, BoxGeral } from "../../styles/Programacao/styles";
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
                <h1><b>AGENDA DE NOVEMBRO</b></h1>
                    <ListaProgramacao>
                        <p>QUA. 01 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p><b>QUI. 02 - CULTO DE DISCIPULADO</b></p> <p><b>20h</b></p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p> DOM. 05 - SANTA CEIA</p> <p>10h E 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 06 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 08 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 09 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p><b>SEX. 10 - ENTREGA DE MARMITAS</b></p> <p>18h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 11 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 12 - CULTO DA FAMÍLIA</p> <p>10h E 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 13 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 15 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 16 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                     <p><b>SEX. 17 - VIGÍLIA</b></p> <p>22h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 18 - CULTO FEITORES - EVANGELLISMO NA PRAÇA</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 19 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 20 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 22 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 23 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 25 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 26 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 27 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>TER. 28 - CULTO MULHERES COM PROPÓSITO - FERRAZ E GUAINAZES</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 29 - ENCONTRO MINISTÉRIO CORAÇÃO VALENTE</p> <p>15h ás 17h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 30 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    
                    


                </BoxGeral>
                <BoxGeral>
                    
                </BoxGeral>

            </Box>
            <FooterTelaMenor />
        </>
    )
};