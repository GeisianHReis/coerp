import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { ListaProgramacao, Box, BoxGeral } from "../../styles/Programacao/styles";
import cartaz from "../../../assets/cartaz.jpeg";

export function Programacao() {
    return (
        <>
            <TopMobile name="PROGRAMAÇÃO" />
            <Side name="PROGRAMAÇÃO" />
            <Box>
                <BoxGeral>
                    <h1>NOSSA AGENDA</h1>
                    <ListaProgramacao>
                        <p>01/08 - CULTO DE ORAÇÃO</p> <p>19h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>05/08 - FESTA DAS NAÇÕES</p> <p>18h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>08/08 - CULTO DE ORAÇÃO</p> <p>19h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>12/08 - CULTO DE JOVENS: ADORAÇÃO</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>15/08 - CULTO DE ORAÇÃO</p> <p>19h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>19/08 - CULTO DE MULHERES</p> <p>17h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>22/08 - CULTO DE ORAÇÃO</p> <p>19h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>25/08 - CULTO DE CASAIS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>26/08 - EVANGELISMO: ENTREGA DE MARMITAS</p> <p>18h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>26/08 - CULTO DE JOVENS</p> <p>19h</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>29/08 - CULTO DE ORAÇÃO</p> <p>19h30</p>
                    </ListaProgramacao>
                    <ListaProgramacao>
                        <p>DOMINGOS - CULTO DA FAMÍLIA</p> <p>18h</p>
                    </ListaProgramacao>
                </BoxGeral>
                <BoxGeral>
                    <img src={cartaz} />
                </BoxGeral>

            </Box>
            <FooterTelaMenor />
        </>
    )
};