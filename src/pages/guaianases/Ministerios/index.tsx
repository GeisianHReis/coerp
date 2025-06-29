import { Grid } from "@mui/material";
import { Side } from "../../../components/Side";
import logoKids from "../../../assets/LogosMinisterios/kids.png";
import logoCasais from "../../../assets/LogosMinisterios/CASAIS.png";
import logoMissoes from "../../../assets/LogosMinisterios/MISSOES.png";
import logoJovens from "../../../assets/LogosMinisterios/JOVENS.png";
import logoMidia from "../../../assets/LogosMinisterios/MIDIA.png";
import logoLouvor from "../../../assets/LogosMinisterios/LOUVOR.png";
import logoInter from "../../../assets/LogosMinisterios/INTER.png";
import { BotaoUm, Box, CardScrool, MinisterioUm } from "../../styles/Ministerios/styles";
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

    const ministerios = [
        {
            nome: "Coerp Kids",
            slogan: "Cuidando do futuro com amor e dedicação",
            descricao: coerpKids[1],
            lideres: [coerpKids[2], coerpKids[3]],
            logo: { url: logoKids },
            key: "coerp-kids"
        },
        {
            nome: "Missões",
            slogan: "Alcançando o mundo com o amor de Cristo",
            descricao: missoes[1],
            lideres: [missoes[2]],
            logo: { url: logoMissoes },
            key: "missoes"
        },
        {
            nome: "Rede de Jovens",
            slogan: "Viver a Palavra, ser luz no mundo",
            descricao: jovens[1],
            lideres: [jovens[2], jovens[3]],
            logo: { url: logoJovens },
            key: "rede-de-jovens"
        },
        {
            nome: "Midias",
            slogan: "Conectando pessoas à mensagem de Jesus",
            descricao: midias[1],
            lideres: [midias[2]],
            logo: { url: logoMidia },
            key: "midias"
        },
        {
            nome: "Louvor e Dança",
            slogan: "Adorando com arte e paixão",
            descricao: louvorDanca[1],
            lideres: [louvorDanca[2], louvorDanca[3]],
            logo: { url: logoLouvor },
            key: "louvor-e-danca"
        },
        {
            nome: "Intercessão",
            slogan: "Orando com fé e propósito",
            descricao: intercessao[1],
            lideres: [intercessao[2]],
            logo: { url: logoInter },
            key: "intercessao"
        },
        {
            nome: "Casais",
            slogan: "Fortalecendo laços matrimoniais na fé",
            descricao: casais[1],
            lideres: [casais[2], casais[3]],
            logo: { url: logoCasais },
            key: "casais"
        }
    ];
    return (
        <>
            <Helmet>
                <title>Ministérios Coerp em Guaianases | Comunidade e Liderança</title>
                <meta name="description" content="Explore os Ministérios da Igreja Coerp em Guaianases: Envolva-se em atividades significativas e fortaleça sua conexão espiritual. Descubra como cada ministério contribui para a comunidade. Fique por dentro de tudo!" />
            </Helmet>
            <TopMobile name="MINISTÉRIOS" />
            <Box>
                <h1>NOSSOS MINISTÉRIOS</h1>
                <Grid container spacing={2} alignItems={"center"} >
                    <CardScrool>
                        {ministerios.map((ministerio) => (
                            <MinisterioUm key={ministerio.key}>
                                <img src={ministerio.logo?.url ?? ""} alt={ministerio.nome} />
                                <BotaoUm>
                                    <h4>{ministerio.nome}</h4>
                                    <p>{ministerio.slogan}</p>
                                    <AlertDialogSlide titulo={ministerio.nome} texto={ministerio.descricao} nomeLider1={ministerio.lideres?.[0] ?? ""} nomeLider2={ministerio.lideres?.[1] ?? ""} ></AlertDialogSlide>
                               </BotaoUm>
                            </MinisterioUm>
                        ))}
                    </CardScrool>
                </Grid>
            </Box>
        </>
    );
};
