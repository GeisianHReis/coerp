import { Side } from "../../../components/Side";
import { TopMobile } from "../../../components/TopMobile";
import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { Box, Container } from "../../styles/Devocionais/styles";
import AlertDialogSlide from "./Modal";
import queryString from "query-string";
import { Helmet } from "react-helmet";

export function Devocional() {
    const primeiroDevocional = ["Deus te chama", "1 Timóteo 1:12 (NVI) <br><br>Sou grato para com aquele que me fortaleceu, Cristo Jesus, nosso Senhor, porque Ele me considerou fiel, designando-me para o ministério. <br><br>O mesmo Deus que chamou Paulo ao ministério, também te chama hoje, não somente a Paulo, mas a todos que Nele creem. <br> \"Fortaleceu-me\" significa que Paulo era grato por conhecer a verdade, o Único caminho, o Salvador Jesus, que o fortaleceu até o fim. <br>\"Considerou-me fiel\" - Paulo reconhecia que era um perseguidor, blasfemo, e que recebeu misericórdia. Quando reconhecemos nossas falhas, limitações e a necessidade de ajuda, recebemos misericórdia e a oportunidade de fazer diferente, servindo com gratidão Aquele que nos livrou. <br> \"Designou-me\" - É fazer o mesmo ao próximo, anunciar e apresentar o Salvador Jesus, o evangelho da Salvação. Seja fortalecido pela palavra de Deus, a Única verdade e direção para cumprir o propósito de Deus. Transmita, exercendo o ministério com gratidão ao qual Deus te designou. <br> Ele te chama hoje!"];
    const textoFormatado = primeiroDevocional.join('<br><br>');
    const textoComQuebrasDeLinha = <div dangerouslySetInnerHTML={{ __html: textoFormatado }} />;

    const segundoDevocional = ["Deus te chama a ser forte", "(Josué 1:1-9)  <br><br>Uma ordem foi dada a Josué, para que ele liderasse o povo da mesma forma que Moisés.  <br> Essa ordem enche nossos corações de temor e reverência a Deus. Josué escolheu obedecer à ordem de Deus, superando seus medos e dúvidas, e assumindo uma grande responsabilidade.Às vezes, é desafiador seguir a vontade de Deus, mas Ele nos orienta constantemente a obedecer.  <br>  Entregar a Jesus tudo aquilo que necessitamos e desejamos, tanto nos dias difíceis quanto nos dias ruins, torna-se uma experiência mais enriquecedora quando confiamos tudo a Deus. Isso nos fortalece em Sua presença e alivia nossos fardos.<br><br> A disposição envolve agir mesmo quando não temos vontade, obedecer mesmo sabendo que somos seres humanos falíveis. No entanto, temos um Deus que cuida de nós e devemos estar dispostos a servi-Lo, apesar das dificuldades e adversidades. <br> Rompa com a zona de conforto e viva de acordo com o plano que Deus tem para você, abraçando uma vida de obediência, entrega e disposição para servir a Jesus com todo o nosso coração e entendimento."];
    const textoDois = segundoDevocional.join('<br><br>');
    const textoComQuebrasDeLinhaDois = <div dangerouslySetInnerHTML={{ __html: textoDois }} />;

    const terceiroDevocional = ["Lugar secreto", "(I Timóteo 4:13-16) <br><br>Como cuidar de mim? Ver a motivação do meu coração, conhecer a Cristo deve ser nosso maior objetivo.<br><br>Expondo, apresentando o coração a Ele, nutrindo pela palavra da fé, seremos um bom ministro de Cristo.<br> Que lugar seguro é esse que o inimigo quer tanto nos impedir de chegar com mentiras e questionamentos? Esse Lugar se chama Presença de Deus. <br> Nosso lugar é repreender o que nos afasta de Deus: os questionamento e duvidas.  Meu lugar é anunciar o que creio alertou Paulo a Timóteo a permanecer na presença de Deus pela fé  e se exemplo em tudo. <br><br> Até que o Senhor venha, dedique se a leitura das escriruras, pratique, ensine, encoraje, não negligencie seu chamado, exponha sua fé,fique atento a seu modo de viver e seja fiel no lugar que o Senhor te chamou. <br><br> E pra vocês irmãos que já está anunciando e sabe o lugar que Jesus ocupa em você, só continue. Deus quer te usar!!"];
    const textoTres = terceiroDevocional.join('<br><br>');
    const textoComQuebrasDeLinhaTres = <div dangerouslySetInnerHTML={{ __html: textoTres }} />;

    const quatroDevocional = ["Você é indispensável", "(Genesis 2:18)<br><br> Entenda o propósito de Deus pra sua vida , e viva  dia após dia o que foi determinado por Deus seguir seu mandamento para que o seu plano seja perfeito quando não cumprimos  o que foi nos ortogado a nossa função  como mulheres auxiliadoras, colaboramos para que os homens também falhem ao cumprir seu chamado a liderança  e sua autoridade como cabeça e não cumprindo o mandamento de Deus e o plano para a família a  consequência disso  surgem conflitos relacionais que geram descontentamento e infelicidade para ambos.<br><br> Ser uma mulher auxiliadora é ser aquela que ampara , aquela que dá suporte , aquela que colabora , favorece e também protege e socorre! <br>Vc entende agora o quanto vc é valiosa e indispensável?<br>Cumpra seu Propósito!"];
    const textoQuatro = quatroDevocional.join('<br><br>');
    const textoComQuebrasDeLinhaQuatro = <div dangerouslySetInnerHTML={{ __html: textoQuatro }} />;

    const quintoDevocional = ["O vaso e o seu oleiro", "(Jeremias 18)<br><br> Quando não estamos da forma que Deus gostaria que tivéssemos, ele vai nos lapidar. Assim como o vaso  que está sendo feito novamente, da mesma forma somos nós nas mãos de Deus. <br><br> Para se tornar um vaso de alto valor precisamos suportar o processo de ser moldado. Na maioria das vezes o processo de transformação machuca, dói, mas só confiar no Oleiro por que Ele sabe o que está fazendo.  Quando o vaso não agrada o Oleiro ele quebra, amassa de novo até ir surgindo um vaso novo que agrada o seu Oleiro, um vaso de alto valor, para enfim ser  cheio do azeite.Assim somos nós nas mãos de Deus.<br><br> Ele nos trata no íntimo e no profundo, cuidando de cada detalhe, nos ajudando a nos manter firme enquanto ele começa a nos transformar e a todo tempo está junto para que sabemos estamos em suas mãos até ficar da forma que o agrada. Deus ele perfeito e Ele nos molda da forma que Ele deseja.<ul> <li>Com suas MÃOS: Ele molda o barro. Nossas vidas são transformadas somente quando nos colocamos nas mãos do Senhor.</li> <li>Com seus PÉS: Ele move a roda onde está o barro para que o movimento faça o barro ser moldável. Deste modo Deus tem movido nossas vidas para que nos tornemos moldáveis.</li> <li>Com seus OLHOS: Ele olha para o barro e vê como está ou quando está pronto.Se estiver com defeito, volta e molda novamente o barro. Mas se estiver bonito e pronto ele nos prepara para ser usado com muito carinho.</li> <li>Casa do oleiro- igreja</li> <li>Oleiro- Deus</li> <li>Vaso- todo aquele que aceitou ser moldado por Ele.</li> <li>Azeite- unção</li></ul> Que você seja moldado por Deus e seja cheio do seu azeite, que sua vida seja transformada da forma que Deus deseja.<br>Enquanto você aguenta o processo de ser transformado, Deus está te enchendo com azeite de unção. Você será um vaso de alto valor nas mãos do grande Oleiro! Deus está contigo."];
    const textoQuinto = quintoDevocional.join('<br><br>');
    const textoComQuebrasDeLinhaQuinto = <div dangerouslySetInnerHTML={{ __html: textoQuinto }} />;





    const getIdFromURL = () => {
        const parsed = queryString.parse(window.location.search);
        return parsed.modal || null;
    };


    return (
        <Box>
            <Helmet>
                <title>Devocionais | Igreja Coerp - Reflexões Diárias para Fortalecer Sua Fé</title>
                <meta name="description" content="Acesse os devocionais da Igreja Coerp para reflexões semanais inspiradoras. Encontre mensagens que irão fortalecer sua fé e conectar você a Deus em momentos especiais de meditação." />
            </Helmet>

            <TopMobile name="DEVOCIONAIS" />
            <Side name="DEVOCIONAIS" />
            <h1>DEVOCIONAIS</h1>
            <Container>
                <section>
                    <h2>O vaso e o seu oleiro.</h2>
                    <h3>03 de Setembro de 2023</h3>
                    <p>Para o Senhor somos como um vaso e ele é o nosso Oleiro.<AlertDialogSlide id="O-vaso-e-o-seu-oleiro" isOpen={getIdFromURL() === "O-vaso-e-o-seu-oleiro"} titulo={quintoDevocional[0]} texto={textoComQuebrasDeLinhaQuinto} ></AlertDialogSlide>
                    </p>
                </section>
                <section>
                    <h2>Você é indispensável</h2>
                    <h3>28 de Agosto de 2023</h3>
                    <p>Deus deu a mulher um papel que nenhum outro pode fazer , você tem um propósito a qual Deus te chamou! <AlertDialogSlide id="Voce-e-indispensavel" isOpen={getIdFromURL() === "Voce-e-indispensavel"} titulo={quatroDevocional[0]} texto={textoComQuebrasDeLinhaQuatro} ></AlertDialogSlide>
                    </p>
                </section>
                <section>
                    <h2>Lugar secreto</h2>
                    <h3>21 de agosto de 2023</h3>
                    <p>Paulo aconselha Timóteo a se manter nas Escrituras, usar seus dons para ensinar e ser um exemplo firme na fé.... <AlertDialogSlide id="Lugar-secreto" isOpen={getIdFromURL() === "Lugar-secreto"} titulo={terceiroDevocional[0]} texto={textoComQuebrasDeLinhaTres} ></AlertDialogSlide></p>
                </section>
                <section>
                    <h2>Deus te chama a ser Forte</h2>
                    <h3>07 de agosto de 2023</h3>
                    <p>Deus nos chama para obedecer, nos entregar e estar dispostos a servir a Jesus... <AlertDialogSlide id="Deus-te-chama-a-ser-Forte" isOpen={getIdFromURL() === "Deus-te-chama-a-ser-Forte"} titulo={segundoDevocional[0]} texto={textoComQuebrasDeLinhaDois} ></AlertDialogSlide></p>
                </section>
                <section>
                    <h2>Deus te chama</h2>
                    <h3>30 de Julho de 2023</h3>
                    <p>O mesmo Deus que chamou Paulo ao ministério, também te chama hoje, não somente a Paulo, mas... <AlertDialogSlide id="Deus-te-chama" isOpen={getIdFromURL() === "Deus-te-chama"} titulo={primeiroDevocional[0]} texto={textoComQuebrasDeLinha} ></AlertDialogSlide>
                    </p>
                </section>


            </Container>
            <FooterTelaMenor />
        </Box >

    )
};