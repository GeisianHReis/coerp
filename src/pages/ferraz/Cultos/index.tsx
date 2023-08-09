import Button from "@mui/material/Button";
import { Side } from "../../../components/Side";
import { Box, BoxGeral } from "../../styles/Cultos/styles";
import { TopMobile } from "../../../components/TopMobile";
import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Helmet } from "react-helmet";

export function CultosF() {
    return (
        <BoxGeral>
            <Helmet>
                <title>Cultos Online Ao Vivo | Igreja Coerp - Participe Conosco!</title>
                <meta name="description" content="Acesse os cultos online da Igreja Coerp e conecte-se virtualmente em momentos de adoração inspiradores. Junte-se à nossa comunidade para uma experiência significativa." />
            </Helmet>
            <TopMobile name="TRANSMISSÕES" />
            <Side name="NOSSOS CULTOS" />
            <Box>
              <h1>ÚLTIMA TRANSMISSÃO</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cb-ZvRDtxlQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <br/>
                <Button href="https://www.youtube.com/@igrejacoerp9121/streams" target="_blank" variant="contained">
                    Todas as transmissões
                </Button>
            </Box>
            <FooterTelaMenor/>
        </BoxGeral>
        
    )
};