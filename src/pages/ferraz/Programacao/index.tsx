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
                <h1><b>AGENDA DE SETEMBRO</b></h1>
                    <ListaProgramacao>
                        <p>DOM. 03 - INTERCESSÃO HOMENS E MULHERES</p> <p>8h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao className="destaque">
                        <p >DOM. 03 - SANTA CEIA</p> <p>10h E 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p> SEG. 04 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 06 - INTERCESSÃO MULHERES </p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 07 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 09 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 10 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 11 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 13 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 13 - ENCONTRO MINISTÉRIO CORAÇÃO VALENTE</p> <p>15h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 14 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao className="destaque">
                        <p>SEX. 15 - ENTREGA DE MARMITAS</p> <p>18h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 16 - REUNIÃO COERP KIDS</p> <p>18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 16 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 17 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 18 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 20 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 21 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 23 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOM. 24 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SEG. 25 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 27 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUA. 27 - ENCONTRO MINISTÉRIO CORAÇÃO VALENTE</p> <p>15h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>QUI. 28 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>SAB. 30 - CULTO FEITORES</p> <p>19h</p>
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