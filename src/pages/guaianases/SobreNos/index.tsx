import { Side } from "../../../components/Side";
import { ListaProgramacao, GaleriaDaliderança, Liderança, } from "../../styles/SobreNos/styles";

import fotoSueli from "../../../assets/LideresGuaianases/sueli.webp"
import fotoDiacono from "../../../assets/LideresGuaianases/gilberto.webp"
import fotoJaqueline from "../../../assets/LideresGuaianases/jaqueline.webp"
import fotoSoniaS from "../../../assets/LideresGuaianases/soniaS.webp"
import fotoDcGilberto from "../../../assets/LideresGuaianases/cdGILBERTO.webp"
import fotoCaroline from "../../../assets/LideresGuaianases/CAROLINE.webp"
import fotoDamiana from "../../../assets/LideresGuaianases/DAMIANA.webp"
import fotoJosenildo from "../../../assets/LideresGuaianases/JOSENILDO .webp"
import fotoLuiz from "../../../assets/LideresGuaianases/LUIZ.webp"
import fotoMauricioJosefa from "../../../assets/LideresGuaianases/MAURICIOEJOSEFA.webp"
import fotoLuciaS from "../../../assets/LideresGuaianases/luciaS.webp"
import fotoRenan from "../../../assets/LideresGuaianases/renan.webp"
import fotoToninho from "../../../assets/LideresGuaianases/toninho.webp"
import fotoLuciaM from "../../../assets/LideresGuaianases/luciaM.webp"

import estatuto from "../../../assets/Documentos/Estatuto da Igreja.pdf"
import doutrina from "../../../assets/Documentos/DOUTRINAS DO MINISTÉRIO COERP e CIDADE TIRADENTES.pdf"
import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { TopMobile } from "../../../components/TopMobile";
import { Button } from "@mui/material";
import { DownloadSimple } from "@phosphor-icons/react";
import { Helmet } from "react-helmet";

export function SobreNos() {
    return (
        <>
            <Helmet>
                <title>Sobre Nós | Igreja Coerp - Conheça Nossa História</title>
                <meta name="description" content="Descubra a história e valores da Igreja Coerp. Desde nossa origem até nossos princípios atuais, saiba mais sobre nós e nossa dedicação à comunidade." />
            </Helmet>
            <TopMobile name="SOBRE NÓS" />
            <Side name="SOBRE NÓS" />
            <ListaProgramacao>

                <h1>NOSSA HISTÓRIA</h1>
                <p>
                    Nossa história começou em 13 de Abril de 1976, quando éramos conhecidos como Igreja Batista de Romanópolis. Desde então, passamos por diversas mudanças, tanto em nosso nome quanto em nosso perfil eclesiástico.
                </p>
                <p>
                    Inicialmente, enfrentamos desafios, tanto espirituais como na construção de nosso primeiro local de culto. Durante esse período, uma igreja com fundamentos batistas foi desenvolvendo suas ferramentas ministeriais e formando líderes em diversas áreas.
                </p>
                <p>
                    Com o tempo, uma nova geração surgiu na igreja, ansiosa por avivamento e intimidade com Deus. Esse período marcou uma mudança para uma abordagem mais informal de liturgia, adotando características pentecostais na oração e pregação. A igreja cresceu rapidamente, impactando a cidade e atraindo pessoas de toda a região.
                </p>
                <p>
                    A partir de 1996, incorporamos uma visão missionária e a preocupação com o social em nossa missão. O Departamento de Missões foi criado, resultando em conferências, viagens missionárias e o envio de missionários para a Janela 10-40. Nesse período, iniciamos projetos assistenciais que até hoje nos impulsionam a continuar com um olhar de amor as demandas sociais da nossa cidade e região.
                </p>
                <p>
                    A partir de 2000, demos início a uma nova fase com a introdução do conceito "igreja em célula". O modelo G12 foi adotado, resultando em um crescimento significativo, a igreja se fortaleceu, e diversos pastores e evangelistas foram ordenados, muitos que hoje fazem parte da liderança da Coerp.
                </p>
                <p>
                    Com a visão celular, iniciamos o trabalho em Guaianases com uma célula, a qual cresceu, e devido a necessidade de transporte fretado havia dificuldade dos irmãos acompanharem a agenda da Coerp em Ferraz, por conta dessa situação iniciou-se os cultos de aos sábados em Guaianases, o começo foi especial lá em 2012 na garagem dos irmãos Erivaldo e Damiana até fevereiro de 2015, ficando apertado. Mudamos para o salão da rua de cima, mesmo bairro, até julho de 2016, ficando somente 1 ano e três meses, e trocamos por um salão na mesma rua até março de 2023. Por fim, agora estamos no jardim São Paulo. Sempre andando juntos com Coerp Ferraz na doutrina e orientação pastoral.
                </p>
                <p>
                    Atualmente, a partir de 2019, direcionados pelo Senhor deixamos o G12, mas continuamos focados em ganhar vidas e reproduzir o caráter e a missão de Cristo em cada crente, formando discípulos maduros e frutíferos.
                </p>
                <p>
                    Aqui na Coerp, valorizamos nossa história, mas estamos comprometidos em olhar para o futuro com fé, amor e dedicação.
                    Junte-se a nós nessa jornada de crescimento espiritual e transformação de vidas.
                </p>
                <h1>
                    NOSSA LIDERANÇA
                </h1>
                <GaleriaDaliderança>
                    <Liderança>
                        <img src={fotoSueli} alt="mulher de cabelo curto preto, blusa rosa com blaser preto"/> Pra. Sueli
                    </Liderança>
                    <Liderança>
                        <img src={fotoCaroline} alt="mulher com luzes loiras no cabelo e blusa preta"/> Caroline
                    </Liderança>
                    <Liderança>
                        <img src={fotoDamiana} alt="mulher de cabelo curto com blusa preta estampada" /> Damiana
                    </Liderança>
                    <Liderança>
                        <img src={fotoJaqueline} alt="mulher com luzes no cabelo, blusa preta e blaser branco" /> Dc. Jaqueline
                    </Liderança>
                    <Liderança>
                        <img src={fotoSoniaS} alt="mulher de cabelo curto de óculos com blusa jeans"/> Dc. Sônia
                    </Liderança>
                    <Liderança>
                        <img src={fotoLuciaS} alt="mulher de cabelo escuro e blusa preta"/> Lúcia
                    </Liderança>
                    <Liderança>
                        <img src={fotoLuciaM} alt="mulher de cabelo curto, com óculos e blusa azul"/> Lúcia Maria
                    </Liderança>
                    <Liderança>
                        <img src={fotoDcGilberto} alt="casal abraçado:homem careca e blusa laranja e mulher com luzes no cabelo e blaser preto"/> Dc. Gilberto e <br /> Ana Paula
                    </Liderança>
                    <Liderança>
                        <img src={fotoMauricioJosefa} alt="casal junto: homem de terno azul e cabelo grisálio e mulher de cabelo vermelho, saia e blaser vermelho" /> Maurício e <br /> Josefa
                    </Liderança>
                    <Liderança>
                        <img src={fotoJosenildo} alt="casal abraçado: homem careca com blusa amarela e mulher cacheada com blusa cinza" /> Josenildo e <br /> Yara
                    </Liderança>
                    <Liderança>
                        <img src={fotoDiacono} alt="mulher de cabelo cacheado e hoem careca de terno" /> Dc. Geraldo e <br /> Dc. Sandra
                    </Liderança>
                    <Liderança>
                        <img src={fotoLuiz} alt="casal abraçados de óculos: mulher de cabelo escuro, óculos e blaser, e homem de blusa azul"/> Luiz e <br /> Nena
                    </Liderança>
                    <Liderança>
                        <img src={fotoRenan} alt="homem de terno marrom e óculos, e mulher com luzes e blusa verde" /> Renan e <br /> Patrícia
                    </Liderança>
                    <Liderança>
                        <img src={fotoToninho} alt="casal abraçado: mulher loira e com jaqueta jeans e homem de terno cinza"/> Toninho e <br /> Carla
                    </Liderança>
                </GaleriaDaliderança>
                <Button href={estatuto} target="_blank" variant="contained">
                    Baixar nosso estatuto &nbsp;<DownloadSimple size={20} weight="bold" color="white" />
                </Button>
                <br />
                <Button href={doutrina} target="_blank" variant="contained">
                    Baixar nossa doutrina &nbsp;<DownloadSimple size={20} weight="bold" color="white" />
                    
                </Button>
                <br />
            </ListaProgramacao>
            <FooterTelaMenor />
        </>
    )
};

