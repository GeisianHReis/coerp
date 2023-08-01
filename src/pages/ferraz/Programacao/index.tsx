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
                    <h1>NOSSA AGENDA</h1>
                    <ListaProgramacao>
                        <p>06/08 - INTERCESSÃO HOMENS E MULHERES</p> <p>8:30h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>06/08 - SANTA CEIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>07/08 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>09/08 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>10/08 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>11/08 - ENTREGA DE MARMITAS</p> <p>18:30h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>12/08 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>13/08 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>14/08 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>16/08 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>17/08 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>19/08 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>20/08 - CULTO DA FAMÍLIA</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>21/08 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>23/08 - INTERCESSÃO MULHERES</p> <p>14h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>24/08 - CULTO DE DISCIPULADO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>26/08 - CULTO FEITORES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>27/08 - CULTO DE DISCIPULADO</p> <p>10h e 18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>28/08 - INTERCESSÃO HOMENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                    <p>30/08 - INTERCESSÃO</p> <p>20h</p>
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