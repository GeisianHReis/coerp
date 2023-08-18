import { Grid } from "@mui/material";
import { Side } from "../../../components/Side";
import logoKids from "../../../assets/LogosMinisterios/kids.png";
import logoCasais from "../../../assets/LogosMinisterios/CASAIS.png";
import logoMissoes from "../../../assets/LogosMinisterios/MISSOES.png";
import logoJovens from "../../../assets/LogosMinisterios/JOVENS.png";
import logoMidia from "../../../assets/LogosMinisterios/MIDIA.png";
import logoLouvor from "../../../assets/LogosMinisterios/LOUVOR.png";
import logoInter from "../../../assets/LogosMinisterios/INTER.png";
import { Box } from "../../styles/Ministerios/styles";
import AlertDialogSlide from "./Modal";

import { TopMobile } from "../../../components/TopMobile";
import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Helmet } from "react-helmet";

export function Ministerios() {

    const coerpKids = ["Coerp Kids", "Investimos no futuro das crianças, ensinando a Palavra de Deus de maneira didática e assertiva. Com recursos pedagógicos interativos e um ambiente acolhedor, promovemos um aprendizado significativo, desenvolvendo uma fé genuína e uma relação pessoal com o Senhor. Valorizamos cada criança, fortalecendo laços familiares e preparando-as para uma vida cristã plena.", "Lucia Sepero"]

    const casais = ["Casais", "O Ministério de Casais é um lugar especial onde o amor e a comunhão florescem. Juntos, fortalecemos nossos laços matrimoniais, buscando alicerces sólidos na Palavra de Deus. Compartilhamos momentos de aprendizado mútuo, orações e apoio incondicional. Aqui, encontramos encorajamento para enfrentar os desafios da vida em conjunto e celebrar nossas vitórias. Não falte aos eventos do nosso ministério e aprenda a cultivar o amor, a cumplicidade e a harmonia em seu relacionamento. Venha enriquecer sua vida conjugal e trilhar uma jornada de bênçãos ao lado da pessoa que Deus preparou para você!", "Carla", "Toninho"]

    const missoes = ["Missões", "Missão está no coração de Deus, e também no coração da igreja. O Ministério de Missões é uma jornada de propósito e compaixão, buscando alcançar os perdidos em todas as nações e etnias. Movidos pela fé, compartilhamos o amor de Cristo e levamos esperança aos necessitados. Além disso, cuidamos dos que estão fracos na fé, restaurando e edificando vidas. Juntos, enfrentamos desafios e vemos vidas transformadas pela mensagem do Evangelho. Participe conosco das ações missionárias, para que possamos, com fé e amor, cumprir a grande missão dada por Jesus. Venha fazer parte do Ministério de Missões e seja um instrumento de esperança e transformação no mundo!", "Lúcia Maria"]

    const jovens = ["Rede de Jovens", "Rede de Jovens! Somos uma comunidade de jovens apaixonados por Deus, entregues à obediência e à busca constante da Palavra de Deus como única forma de vida. Aqui, somos orientados pelos princípios divinos, buscando crescer espiritualmente e viver em comunhão uns com os outros. Juntos, enfrentamos os desafios da juventude, compartilhamos alegrias e edificamos uns aos outros em amor. Não perca nossos encontros inspiradores e eventos que nos impulsionam a viver de acordo com o propósito que Deus tem para cada um de nós. Venha fazer parte da Rede de Jovens e experimentar uma vida transformada pela graça e sabedoria divina!", "Mônica", "Renan"]

    const midias = ["Midias", "O Ministério de Mídia é essencial para o crescimento do ministério de Jesus nos dias atuais. Cuidamos de detalhes que muitos não veem, mas que são cruciais. Através das mídias, usamos a internet para alcançar pessoas e apresentar Jesus ao mundo. Somos uma voz que prega a Palavra por meio das redes sociais, permitindo que mais pessoas conheçam a nossa igreja e se aproximem de Deus. Nossa missão é levar a mensagem do Evangelho aos corações, impactando vidas e disseminando a esperança.", "Patricia"]

    const louvorDanca = ["Louvor e Dança", "O Ministério de Louvor e Dança é uma equipe unida, instrumentos nas mãos de Deus, proclamando o Evangelho de Jesus através da música e da dança. Além de expressarmos movimentos artísticos, somos ministros da Palavra de Deus, transmitindo mensagens por atos proféticos. Chamados para trazer vida ao que está morto, nossas coreografias e expressões são um meio poderoso de tocar os corações e levar esperança às vidas. Unidos em um só propósito, buscamos criar um ambiente propício para o Espírito Santo agir e transformar vidas, inspirando a comunhão e a conexão com o divino. Nossa missão é levar a presença de Deus aos corações através da música e das artes, compartilhando a alegria e a paz que vem da adoração genuína.", "Patricia", "Jaqueline"]

    const intercessao = ["Intercessão", "Intercessão é orar por alguém ou por algo, pedindo o que está no coração de Deus. Interceder por algo que não se vê é um ato de fé. Eu creio que devemos ser um povo que tem a alegria de Jesus por completo em nós. Devemos ser assim em todas as áreas de nossa vida e em nosso ministério. A intercessão não pode ser um fardo, e sim uma alegria, amor e satisfação no que fazemos, tendo comunhão e intimidade com Jesus, sempre atentos ao comando do Senhor. Devemos ser intercessores 24 horas, como está escrito em Isaías 21:8, \"Sobre a torre de vigia estou em pé continuamente de dia, e de guarda me ponho nas noites inteiras\". A torre de vigia representa aquele que está atento, vigiando contra todas as investidas do inimigo. O Atalaia, que é o vigia, o sentinela, geralmente está na torre de vigia para que sua visão seja mais ampla e, assim, consiga enxergar mais longe. E quando o inimigo vem, o vigia tem de tocar a trombeta e avisar o povo para que todos se preparem para a guerra, se protejam e não sejam pegos de sobressalto, sem aviso.", "Sônia Sepero"]

    return (
        <>
            <Helmet>
                <title>Ministérios Coerp em Guaianases | Comunidade e Liderança</title>
                <meta name="description" content="Explore os Ministérios da Igreja Coerp em Guaianases: Envolva-se em atividades significativas e fortaleça sua conexão espiritual. Descubra como cada ministério contribui para a comunidade. Fique por dentro de tudo!" />
            </Helmet>
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

                            <AlertDialogSlide titulo={coerpKids[0]} texto={coerpKids[1]} nomeLider1={coerpKids[2]} ></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <img src={logoKids} alt="forma em geoide azul com o texto: coerp kids"/>
                    </Grid>

                    <Grid item xs={5} md={3}>
                        <img src={logoMissoes} alt=" forma em geoide azul com o texto: missões" />
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            Missão está no coração de Deus, e também no coração da igreja. O Ministério de Missões é uma jornada de propósito e compaixão, buscando alcançar...
                            <AlertDialogSlide titulo={missoes[0]} texto={missoes[1]} nomeLider1={missoes[2]} ></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            Rede de Jovens! Somos uma comunidade de jovens apaixonados por Deus, entregues à obediência e à busca constante da Palavra de Deus como única forma de...
                            <AlertDialogSlide titulo={jovens[0]} texto={jovens[1]} nomeLider1={jovens[2]} nomeLider2={jovens[3]}></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <img src={logoJovens} alt=" forma em geoide azul com o texto: jovens"/>
                    </Grid>

                    <Grid item xs={5} md={3}>
                        <img src={logoMidia} alt="forma em geoide azul com o texto: mídia"/>
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            O Ministério de Mídia é essencial para o crescimento do ministério de Jesus nos dias atuais. Cuidamos de detalhes que muitos não veem, mas que são cruciais. Através das...
                            <AlertDialogSlide titulo={midias[0]} texto={midias[1]} nomeLider1={midias[2]} ></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            O Ministério de Louvor e Dança é uma equipe unida, instrumentos nas mãos de Deus, proclamando o Evangelho de Jesus através da música e da dança. Além de expressarmos...
                            <AlertDialogSlide titulo={louvorDanca[0]} texto={louvorDanca[1]} nomeLider1={louvorDanca[2]} nomeLider2={louvorDanca[3]}></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <img src={logoLouvor} alt="forma em geoide azul com o texto: louvor" />
                    </Grid>

                    <Grid item xs={5} md={3}>
                        <img src={logoInter} alt="forma em geoide azul com o texto: intecessão" />
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            Intercessão é orar por alguém ou por algo, pedindo o que está no coração de Deus. Interceder por algo que não se vê é um ato de fé. Eu creio que devemos ser um povo que tem...
                            <AlertDialogSlide titulo={intercessao[0]} texto={intercessao[1]} nomeLider1={intercessao[2]} ></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={7} md={9}>
                        <p>
                            O Ministério de Casais é um lugar especial onde o amor e a comunhão florescem. Juntos, fortalecemos nossos laços matrimoniais, buscando alicerces sólidos na Palavra de Deus. Compartilhamos momentos de...
                            <AlertDialogSlide titulo={casais[0]} texto={casais[1]} nomeLider1={casais[2]} nomeLider2={casais[3]} ></AlertDialogSlide>
                        </p>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <img src={logoCasais} alt="forma em geoide azul com o texto: casais"/>
                    </Grid>
                </Grid>
            </Box>
            <FooterTelaMenor />
        </>
    )
};