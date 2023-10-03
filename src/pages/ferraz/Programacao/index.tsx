import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { ListaProgramacao, Box, BoxGeral } from "../../styles/Programacao/styles";
import cartaz from "../../../assets/banner minist coração valente.png";
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
                <h1><b>AGENDA DE OUTUBRO</b></h1>
                    <ListaProgramacao>
                        <p>DOM. 01 - INTERCESSÃO HOMENS E MULHERES</p> <p>8h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p><b>DOM. 01 - SANTA CEIA</b></p> <p><b>10h E 18h</b></p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p> SEG. 02 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 04 - INTERCESSÃO MULHERES </p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 05 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 08 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 09 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 11 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p><b>QUA. 11 - ENCONTRO MINISTÉRIO CORAÇÃO VALENTE</b></p> <p>15h ás 17h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 12 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p><b>SEX. 13 - ENTREGA DE MARMITAS</b></p> <p>18h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 14 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 15 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 16 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 18 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 19 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 21 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 22 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 23 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 25 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 25 - ENCONTRO MINISTÉRIO CORAÇÃO VALENTE</p> <p>15h ás 17h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 26 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 28 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 29 - CULTO DA FAMÍLIA</p> <p>10h E 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 30 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>TER. 31 - CULTO MULHERES COM PROPÓSITO</p> <p>20h</p>
                    </ListaProgramacao>
                    


                </BoxGeral>
                <BoxGeral>
                    <img src={cartaz} alt="Cartaz Encontro Ministério Coração Valente"/>
                </BoxGeral>

            </Box>
            <FooterTelaMenor />
        </>
    )
};