import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { ListaProgramacao, Box, BoxGeral } from "../../styles/Programacao/styles";

export function ProgramacaoF() {
    return (
        <>
            <TopMobile name="PROGRAMAÇÃO" />
            <Box>
                <Side name="PROGRAMAÇÃO" />
                <BoxGeral>
                    <h1>CONFIRA NOSSA AGENDA</h1>
                    <ListaProgramacao>
                        <p>08/07 - LUAU FEITORES</p> <p>12h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>13/07 A 15/07 - ESCOLA BIBLICA DE FERIAS</p> <p>13h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>22/07 - FESTA DA NAÇÕES</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>25/07 - ENCONTRO MULHERES COM PROPOSITO</p> <p>20h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>27/07 A 29/07 - CONFERENCIA KOINONIA</p> <p>20h</p>
                    </ListaProgramacao>
                </BoxGeral>
               
            </Box>
            <FooterTelaMenor />
        </>
    )
};