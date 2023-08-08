import { Side } from "../../../components/Side";
import { ListaProgramacao, GaleriaDaliderança, Liderança, } from "../../styles/SobreNos/styles";

import fotoSueli from "../../../assets/LideresGuaianases/sueli.jpg"
import fotoDiacono from "../../../assets/LideresGuaianases/gilberto.jpg"
import fotoJaqueline from "../../../assets/LideresGuaianases/jaqueline.jpg"
import fotoSonia from "../../../assets/LideresGuaianases/sonia.jpg"
import fotoDcGilberto from "../../../assets/LideresGuaianases/cdGILBERTO.jpg"
import fotoAnaPaula from "../../../assets/LideresGuaianases/ANAPAULA.jpg"
import fotoCaroline from "../../../assets/LideresGuaianases/CAROLINE.jpg"
import fotoDamiana from "../../../assets/LideresGuaianases/DAMIANA.jpg"
import fotoJosenildo from "../../../assets/LideresGuaianases/JOSENILDO .jpg"
import fotoLuiz from "../../../assets/LideresGuaianases/LUIZ.jpg"
import fotoMauricioJosefa from "../../../assets/LideresGuaianases/MAURICIOEJOSEFA.jpg"
import fotoNena from "../../../assets/LideresGuaianases/NENA.jpg"
import fotoYara from "../../../assets/LideresGuaianases/YARA.jpg"
import fotoDcSandra from "../../../assets/LideresGuaianases/dcSANDRA.jpg"

import estatuto from "../../../assets/Documentos/Estatuto da Igreja.pdf"
import doutrina from "../../../assets/Documentos/DOUTRINAS DO MINISTÉRIO COERP e CIDADE TIRADENTES.pdf"
import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { TopMobile } from "../../../components/TopMobile";
import { Button } from "@mui/material";
import { DownloadSimple } from "@phosphor-icons/react";

export function SobreNos() {
    return (
        <>
            <TopMobile name="SOBRE NÓS" />
            <Side name="SOBRE NÓS" />
            <ListaProgramacao>
                <h1>NOSSA HISTÓRIA</h1>
                <p>
                    Nossa história começou em 06 de Abril de 1976, quando éramos conhecidos como Igreja Batista de Romanópolis. Desde então, passamos por diversas mudanças, tanto em nosso nome quanto em nosso perfil eclesiástico.
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
                    Com a visão celular, iniciamos o trabalho em Guaianases com uma célula, a qual cresceu, e devido a necessidade de transporte fretado havia dificuldade dos irmãos acompanharem a agenda da Coerp em Ferraz, por conta dessa situação iniciou-se os cultos de aos sábados em Guaianases, o começo foi especial lá em 2012 na garagem dos irmãos Erivaldo e Damiana até fevereiro de 2015, ficando apertado. Mudamos para o salão da rua de cima, mesmo bairro, até julho de 2016, ficando somente 1 ano e três meses, e trocamos por um salão na mesma rua até março de 2023. Por fim, agora estamos no jardim São Paulo. São 11 anos e 6 meses de trajetória sempre andando juntos com Coerp Ferraz na doutrina e orientação pastoral.
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
                        <img src={fotoSueli} /> Pra. Sueli
                    </Liderança>
                    <Liderança>
                        <img src={fotoDcGilberto} /> Dc. Gilberto
                    </Liderança>
                    <Liderança>
                        <img src={fotoAnaPaula} /> Ana Paula
                    </Liderança>
                    <Liderança>
                        <img src={fotoJosenildo} /> Josenildo
                    </Liderança>
                    <Liderança>
                        <img src={fotoYara} /> Yara
                    </Liderança>
                    <Liderança>
                        <img src={fotoMauricioJosefa} /> Maurício e <br/> Josefa
                    </Liderança>
                    <Liderança>
                        <img src={fotoDiacono} /> Dc. Geraldo
                    </Liderança>
                    <Liderança>
                        <img src={fotoDcSandra} /> Dc. Sandra
                    </Liderança>
                    <Liderança>
                        <img src={fotoJaqueline} /> Dc. Jaqueline 
                    </Liderança>
                    <Liderança>
                        <img src={fotoSonia} /> Dc. Sônia 
                    </Liderança>
                    <Liderança>
                        <img src={fotoCaroline} /> Caroline
                    </Liderança>
                    <Liderança>
                        <img src={fotoDamiana} /> Damiana
                    </Liderança>
                    <Liderança>
                        <img src={fotoLuiz} /> Luiz
                    </Liderança>
                    <Liderança>
                        <img src={fotoNena} /> Nena
                    </Liderança>
                </GaleriaDaliderança>
                <Button href={estatuto} target="_blank" variant="contained">
                    Baixar nosso estatuto &nbsp;<DownloadSimple size={20} weight="bold" color="white" />
                </Button>
                <br/>
                <Button href={doutrina} target="_blank" variant="contained">
                    Baixar nossa doutrina &nbsp;<DownloadSimple size={20} weight="bold" color="white" />
                </Button>
                <br/>
            </ListaProgramacao>
            <FooterTelaMenor />
        </>
    )
};