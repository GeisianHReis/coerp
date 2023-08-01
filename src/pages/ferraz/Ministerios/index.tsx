import { Grid } from "@mui/material";
import { Side } from "../../../components/Side";

import { Box } from "../../styles/Ministerios/styles";
import AlertDialogSlide from "./Modal";

import fotoLideresHomens from "../../../assets/LideresCoerp/gonsalves.webp";
import fotoLideresCasais1 from "../../../assets/LideresCoerp/arlete.webp";
import fotoLideresCasais2 from "../../../assets/LideresCoerp/marquinhos.webp";
import fotoLideresFeitores1 from "../../../assets/LideresCoerp/juninho.webp";
import fotoLideresFeitores2 from "../../../assets/LideresCoerp/marisa.webp";
import fotoLideresMulheres from "../../../assets/LideresCoerp/silvana.webp";

import logoKids from "../../../assets/LogosMinisterios/kids.png";
import logoFeitores from "../../../assets/LogosMinisterios/feitores.png";
import logoHomens from "../../../assets/LogosMinisterios/homem.png";
import logoMulheres from "../../../assets/LogosMinisterios/mulher.png";
import logoCasais from "../../../assets/LogosMinisterios/CASAIS.png";

import { TopMobile } from "../../../components/TopMobile";
import { FooterTelaMenor } from "../../../components/FooterTelaMenor";

export function MinisteriosF() {

    const coerpKids = ["Coerp Kids", "Investimos no futuro das crianças, ensinando a Palavra de Deus de maneira didática e assertiva. Com recursos pedagógicos interativos e um ambiente acolhedor, promovemos um aprendizado significativo, desenvolvendo uma fé genuína e uma relação pessoal com o Senhor. Valorizamos cada criança, fortalecendo laços familiares e preparando-as para uma vida cristã plena.", "", "Cibele","","Nalva"]

    const homens = ["Homens", "Unidos em fé, força e propósito, o Ministério de Homens da Igreja Coerp é uma comunidade de irmãos dedicados a crescer na Palavra e nos ensinamentos de Cristo. Buscamos fortalecer uns aos outros, servir nossa igreja e impactar positivamente nossas famílias e comunidade. Juntos, apoiamos e encorajamos o crescimento espiritual, a oração e o compromisso com o amor cristão. Somos homens de honra, guiados pelo Espírito Santo, prontos para enfrentar desafios, compartilhar alegrias e caminhar juntos na jornada da fé.", fotoLideresHomens, "Pr. Gonsalves"]

    const casais = ["Casais", " O Ministério de Casais é um lugar especial onde o amor e a comunhão florescem. Juntos, fortalecemos nossos laços matrimoniais, buscando alicerces sólidos na Palavra de Deus. Compartilhamos momentos de aprendizado mútuo, orações e apoio incondicional. Aqui, encontramos encorajamento para enfrentar os desafios da vida em conjunto e celebrar nossas vitórias. Não falte aos eventos do nosso ministério e aprenda a cultivar o amor, a cumplicidade e a harmonia em seu relacionamento. Venha enriquecer sua vida conjugal e trilhar uma jornada de bênçãos ao lado da pessoa que Deus preparou para você!", fotoLideresCasais1, "Ev. Arlete", fotoLideresCasais2 , "Ev. Marcos"]

    const feitores = ["Feitores", "Ministério Feitores! Aqui, somos jovens apaixonados por Deus, unidos em propósito e alegria. Buscamos crescer na fé, transformar vidas e ser impacto positivo em nossa geração. Compartilhamos momentos de louvor, oração e aprendizado da Palavra. Juntos, enfrentamos desafios, crescemos em liderança e amadurecemos espiritualmente. Não fique de fora, participe dos eventos emocionantes e das atividades que nos permitem crescer em comunhão e servir a nossa comunidade. Venha fazer parte dos Feitores e viver uma jornada de propósito e alegria ao lado de Jesus!", fotoLideresFeitores1, "Juninho", fotoLideresFeitores2, "Pra. Marisa"]

    const mulheres = ["Mulheres com Propósito", "Ministério \"Mulheres com Propósito\"! Aqui, somos uma comunidade de mulheres comprometidas com a fé e o crescimento espiritual. Buscamos fortalecer umas às outras, compartilhar experiências e servir nossa igreja e comunidade. Com orações unidas, estudamos a Palavra de Deus e encontramos encorajamento para enfrentar os desafios da vida. Não perca nossos encontros inspiradores e eventos enriquecedores, onde cultivamos amizades verdadeiras e nos aprofundamos no propósito que Deus tem para cada uma de nós. Venha participar do Ministério \"Mulheres com Propósito\" e viva uma jornada significativa ao lado de mulheres que buscam deixar um legado de fé e amor.", fotoLideresMulheres, "Pra. Silvana"]

    return (
        <>
            <TopMobile name="MINISTÉRIOS" />
            <Side name="MINISTÉRIOS" />
            <Box>
                <h1>NOSSOS MINISTÉRIOS</h1>
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

                            <AlertDialogSlide titulo={coerpKids[0]} texto={coerpKids[1]} fotoLider1={coerpKids[2]} nomeLider1={coerpKids[3]} fotoLider2={coerpKids[4]} nomeLider2={coerpKids[5]} ></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <img src={logoKids} />
                    </Grid>

                    <Grid item xs={5} md={3}>
                        <img src={logoHomens} />
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            Unidos em fé, força e propósito, o Ministério de Homens da Igreja Coerp é uma comunidade de irmãos dedicados a crescer na Palavra e nos ensinamentos de Cristo. Buscamos fortalecer uns aos outros, servir nossa igreja e impactar...
                            <AlertDialogSlide titulo={homens[0]} texto={homens[1]} fotoLider1={homens[2]} nomeLider1={homens[3]} ></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            O Ministério de Casais é um lugar especial onde o amor e a comunhão florescem. Juntos, fortalecemos nossos laços matrimoniais, buscando alicerces sólidos na Palavra de Deus. Compartilhamos momentos de...
                            <AlertDialogSlide titulo={casais[0]} texto={casais[1]} fotoLider1={casais[2]} nomeLider1={casais[3]} fotoLider2={casais[4]} nomeLider2={casais[5]} ></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <img src={logoCasais} />
                    </Grid>

                    <Grid item xs={5} md={3}>
                        <img src={logoFeitores} />
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>

                            Ministério Feitores! Aqui, somos jovens apaixonados por Deus, unidos em propósito e alegria. Buscamos crescer na fé, transformar vidas e ser impacto positivo em nossa geração. Compartilhamos momentos de...
                            <AlertDialogSlide titulo={feitores[0]} texto={feitores[1]} fotoLider1={feitores[2]} nomeLider1={feitores[3]} fotoLider2={feitores[4]} nomeLider2={feitores[5]}></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            Ministério "Mulheres com Propósito"! Aqui, somos uma comunidade de mulheres comprometidas com a fé e o crescimento espiritual. Buscamos fortalecer umas às outras, compartilhar experiências e servir nossa... 
                            <AlertDialogSlide titulo={mulheres[0]} texto={mulheres[1]} fotoLider1={mulheres[2]} nomeLider1={mulheres[3]} ></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <img src={logoMulheres} />
                    </Grid>
                </Grid>
            </Box>
            <FooterTelaMenor />
        </>
    )
};