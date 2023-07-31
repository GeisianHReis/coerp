import { Side } from "../../../components/Side";
import { ListaProgramacao, GaleriaDaliderança, Liderança, } from "../../styles/SobreNos/styles";
import fotoJuninho from "../../../assets/LideresCoerp/juninho.jpg"
import fotoMarisa from "../../../assets/LideresCoerp/marisa.jpg"
import fotoEdson from "../../../assets/LideresCoerp/edson.jpg"
import fotoGonsalves from "../../../assets/LideresCoerp/gonsalves.jpg"
import fotoSilvana from "../../../assets/LideresCoerp/silvana.jpg"
import fotoCris from "../../../assets/LideresCoerp/cris.jpg"
import fotoMarquinho from "../../../assets/LideresCoerp/marquinhos.jpg"
import fotoGilce from "../../../assets/LideresCoerp/gilce.jpg"
import fotoArlete from "../../../assets/LideresCoerp/arlete.jpg"
import fotoSueli from "../../../assets/LideresCoerp/sueli.jpg"
import estatuto from "../../../assets/Documentos/Estatuto da Igreja.pdf"
import doutrina from "../../../assets/Documentos/DOUTRINAS DO MINISTÉRIO COERP e CIDADE TIRADENTES.pdf"
import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { TopMobile } from "../../../components/TopMobile";
import { Button } from "@mui/material";
import { DownloadSimple } from "@phosphor-icons/react";

export function SobreNosF() {
    return (
        <>
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
                        <img src={fotoEdson} /> Pr. Edson
                    </Liderança>
                    <Liderança>
                        <img src={fotoSilvana} /> Pra. Silvana
                    </Liderança>
                    <Liderança>
                        <img src={fotoGonsalves} /> Pr. Gonçalves
                    </Liderança>
                    <Liderança>
                        <img src={fotoGilce} /> Pra. Gilce
                    </Liderança>
                    <Liderança>
                        <img src={fotoSueli} /> Pra. Sueli
                    </Liderança>
                    <Liderança>
                        <img src={fotoMarisa} /> Pra. Marisa
                    </Liderança>
                    <Liderança>
                        <img src={fotoMarquinho} /> Ev. Marcos
                    </Liderança>
                    <Liderança>
                        <img src={fotoArlete} /> Ev. Arlete
                    </Liderança>
                    <Liderança>
                        <img src={fotoJuninho} /> Juninho
                    </Liderança>
                    <Liderança>
                        <img src={fotoCris} /> Cris
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