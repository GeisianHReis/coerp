import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Box, Container } from "../../styles/Devocionais/styles";
import AlertDialogSlide from "./Modal";

export function Devocional() {
    const primeiroDevocional = ["Deus te chama", "1 Timóteo 1:12 (NVI) Sou grato para com aquele que me fortaleceu, Cristo Jesus, nosso Senhor, porque Ele me considerou fiel, designando-me para o ministério. <br>O mesmo Deus que chamou Paulo ao ministério, também te chama hoje, não somente a Paulo, mas a todos que Nele creem. <br> <br> \"Fortaleceu-me\" significa que Paulo era grato por conhecer a verdade, o Único caminho, o Salvador Jesus, que o fortaleceu até o fim. <br><br>\"Considerou-me fiel\" - Paulo \n reconhecia que era um perseguidor, blasfemo, e que recebeu misericórdia. Quando reconhecemos nossas falhas, limitações e a necessidade de ajuda, recebemos misericórdia e a oportunidade de fazer diferente, servindo com gratidão Aquele que nos livrou. <br><br> \"Designou-me\" - É fazer o mesmo ao próximo, anunciar e apresentar o Salvador Jesus, o evangelho da Salvação. Seja fortalecido pela palavra de Deus, a Única verdade e direção para cumprir o propósito de Deus. Transmita, exercendo o ministério com gratidão ao qual Deus te designou. <br><br> Ele te chama hoje!"];
    const textoFormatado = primeiroDevocional.join('<br><br>');
    const textoComQuebrasDeLinha = <div dangerouslySetInnerHTML={{ __html: textoFormatado }} />;
    return (
        <Box>
            <TopMobile name="DEVOCIONAIS" />
            <Side name="DEVOCIONAIS" />
            <h1>NOSSOS DEVOCIONAIS</h1>
            <Container>
                <section>
                    <h2>Deus te chama</h2>
                    <h3>30 de Julho de 2023</h3>
                    <p>O mesmo Deus que chamou, considerou e designou  Paulo ao ministério,
                        Hj te chama !!
                        Não é só para Paulo mas... <AlertDialogSlide titulo={primeiroDevocional[0]} texto={textoComQuebrasDeLinha} ></AlertDialogSlide></p>
                </section>
                <section>b</section>
                <section>b</section>
                <section>c</section>
            </Container>
            <FooterTelaMenor />
        </Box>

    )
};