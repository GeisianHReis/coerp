import { Grid } from "@mui/material";
import { Side } from "../../../components/Side";
import imagem from "../../../assets/images.png";
import logoKids from "../../../assets/LogosMinisterios/coerpKids.png";
import logoMidias from "../../../assets/LogosMinisterios/midias.jpeg";
import { Box } from "../../styles/Ministerios/styles";
import AlertDialogSlide from "./Modal";

import fotoLideresKids from "../../../assets/images.png";
import { TopMobile } from "../../../components/TopMobile";
import { FooterTelaMenor } from "../../../components/FooterTelaMenor";

export function Ministerios() {

    const coerpKids = ["Coerp Kids", "Investimos no futuro das crianças, ensinando a Palavra de Deus de maneira didática e assertiva. Com recursos pedagógicos interativos e um ambiente acolhedor, promovemos um aprendizado significativo, desenvolvendo uma fé genuína e uma relação pessoal com o Senhor. Valorizamos cada criança, fortalecendo laços familiares e preparando-as para uma vida cristã plena.", fotoLideresKids, "Lucia Sepero"]

    return (
        <>
        <TopMobile name="MINISTÉRIOS" />
            <Side name="MINISTÉRIOS" />
            <Box>
                <h1>CONHEÇA NOSSOS MINISTÉRIOS</h1>
                {/*<Box>
                <ListaDeMinisterios>
                    <h2>KIDS</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate repellendus deleniti amet, molestiae perspiciatis est veritatis debitis magnam reiciendis, qui quibusdam autem modi consequatur. Quia aspernatur ipsum sunt nam.

                    </p>
                </ListaDeMinisterios>
                <ListaDeMinisterios>
                    <h2>KIDS</h2>
                </ListaDeMinisterios>
                <ListaDeMinisterios>
                    <h2>KIDS</h2>
                </ListaDeMinisterios>
    </Box>*/}
                <Grid container spacing={2} alignItems={"center"}>
                    <Grid item xs={7} md={9}>
                        <p>
                            Ministério Infantil Coerp KIDS, um espaço dedicado a ensinar a Palavra de Deus às crianças. Nosso objetivo é proporcionar um aprendizado significativo e relevante, promovendo uma compreensão clara e correta dos princípios cristãos. Valorizamos o ambiente acolhedor e seguro, cultivando relacionamentos baseados no amor e no respeito.

                            <AlertDialogSlide titulo={coerpKids[0]} texto={coerpKids[1]} fotoLider1={coerpKids[2]} nomeLider1={coerpKids[3]} ></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <img src={logoKids} />
                    </Grid>

                    <Grid item xs={5} md={3}>
                        <img src={logoMidias} />
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate repellendus deleniti amet, molestiae perspiciatis est veritatis debitis magnam reiciendis, qui quibusdam autem modi consequatur. Quia aspernatur ipsum sunt nam.

                        </p>
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate repellendus deleniti amet, molestiae perspiciatis est veritatis debitis magnam reiciendis, qui quibusdam autem modi consequatur. Quia aspernatur ipsum sunt nam.

                        </p>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <img src={imagem} />
                    </Grid>

                    <Grid item xs={5} md={3}>
                        <img src={imagem} />
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate repellendus deleniti amet, molestiae perspiciatis est veritatis debitis magnam reiciendis, qui quibusdam autem modi consequatur. Quia aspernatur ipsum sunt nam.

                        </p>
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate repellendus deleniti amet, molestiae perspiciatis est veritatis debitis magnam reiciendis, qui quibusdam autem modi consequatur. Quia aspernatur ipsum sunt nam.

                        </p>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <img src={imagem} />
                    </Grid>

                    <Grid item xs={5} md={3}>
                        <img src={imagem} />
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate repellendus deleniti amet, molestiae perspiciatis est veritatis debitis magnam reiciendis, qui quibusdam autem modi consequatur. Quia aspernatur ipsum sunt nam.

                        </p>
                    </Grid>
                </Grid>
            </Box>
            <FooterTelaMenor />
        </>
    )
};