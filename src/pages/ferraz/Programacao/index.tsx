import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { ListaProgramacao, Box, BoxGeral } from "../../styles/Programacao/styles";
import cartaz from "../../../assets/cartaz.jpeg";
 
export function ProgramacaoF() {
    return (
        <>
            <TopMobile name="PROGRAMAÇÃO" />
            <Side name="PROGRAMAÇÃO" />
            <Box>
                <BoxGeral>
                    <h1>CONFIRA NOSSA AGENDA</h1>
                    <ListaProgramacao>
                        <p>DOM. 06 - INTERCESSÃO HOMENS E MULHERES</p> <p>8:30h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <b><p>DOM. 06 - SANTA CEIA</p> <p>13h e 18H</p></b>
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
                    <ListaProgramacao>
                   <b><p>SEX. 11 - ENTREGA DE MARMITAS</p> <p>18:30h</p></b>
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
                    <p>DOM. 20 - CULTO DA FAMÍLIA</p> <p>10h e 18H</p>
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
                    <p>DOM. 27 - CULTO DA FAMÍLIA</p> <p>10h e 18H</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>SEG. 28 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>QUA. 30 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>

                </BoxGeral>
                <BoxGeral>
                    <img src={cartaz}/>
                </BoxGeral>
                
            </Box>
            <FooterTelaMenor />
        </> 
    )
};