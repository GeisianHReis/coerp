import { Side } from "../../../components/Side";
import { ListaProgramacao, GaleriaDaliderança, Liderança, } from "../../styles/SobreNos/styles";
import fotoJuninho from "../../../assets/LideresCoerp/juninho.jpeg"
import fotoMarisa from "../../../assets/LideresCoerp/marisa.jpeg"
import fotoEdson from "../../../assets/LideresCoerp/edson.jpeg"
import fotoGonsalves from "../../../assets/LideresCoerp/gonsalves.jpeg"
import fotoSilvana from "../../../assets/LideresCoerp/silvana.jpeg"
import fotoCris from "../../../assets/LideresCoerp/cris.jpeg"
import fotoMarquinho from "../../../assets/LideresCoerp/marquinho.jpeg"
import fotoGilce from "../../../assets/LideresCoerp/gilce.jpeg"
import fotoArlete from "../../../assets/LideresCoerp/arlete.jpeg"
import fotoSueli from "../../../assets/LideresCoerp/sueli.jpeg"
import { FooterTelaMenor } from "../../../components/FooterTelaMenor";
import { TopMobile } from "../../../components/TopMobile";

export function SobreNos() {
    return (
        <>
            <TopMobile name="SOBRE NÓS" />
            <Side name="SOBRE NÓS" />
            <ListaProgramacao>
                <h1>NOSSA HISTÓRIA</h1>
                <p>
                    A Coerp nasceu no dia 06 de Abril de 1976 com sua antiga identidade de Igreja Batista de Romanópolis, e como parte de seu crescimento, foi sofrendo mudanças, tanto em seu nome, como no seu perfil eclesiástico.
                </p>
                <p>
                    O Início foi caracterizado por um tempo de trabalho árduo, tanto no plano espiritual como na fundação  do prédio que primeiro abrigou a irmandade.

                    Uma igreja com fundamentos batista foi desenvolvendo suas ferramentas ministeriais e formando seus líderes: Podemos lembrar da Escola Dominical, do Coral, da União Feminina, e da própria Junta Diaconal, de onde sairam muitos líderes e pastores.
                </p>
                <p>
                    Com o passar do tempo, a nova geração que crescia na igreja tinha sede de avivamento e começou a buscar nas reuniões de oração e nas vigília, mais intimidade com Deus e mais do Seu poder.
                    <p>
                        Ocorre uma descaracterização do jeito batista de ser e a igreja assume a personalidade de uma Comunidade, demonstrada principalmente, no jeito mais informal de liturgia, e na postura pentecostal da oração e da pregação.
                    </p>
                    <p>
                        Neste período a igreja cresceu muito e rapidamente, impactando a cidade e atraindo gente de toda região. Para fazer justiça à nova personalidade a igreja passa a ser chamada Comunidade Evangélica de Ferraz de Vasconcelos, mas para expandir, através de novas igrejas é batizada com o nome: Comunidade Evangélica Redenção Plena, nome atual – COERP.
                    </p>
                </p>
                <p>
                    No ano de 1996 começa uma nova fase na história da Coerp, ela passa a agregar à sua missão, a visão missionária e a preocupação com o social. Tem início o Departamento de Missões com as conferências e viagens missionárias, bem como o envio de missionários para a Janela 10-40. Nasce também no ano de 1997 a Creche Sementinha, a qual foi o embrião profético dos muitos projetos realizados através da Associação Cultura e Social Redenção Plena nestes últimos anos. Com isto a igreja ganha respeito junto às autoridades e comunidade em geral.
                </p>
                <p>
                    O ano 2000 demarca o início de mais um período histórico. Depois de uma preparação para introduzir o conceito “igreja em célula” nasce uma célula e logo a segunda que passam a ser 4, 8, 14, 30. Na sequência a igreja encontra-se com a visão G12, e mesmo com muitas dificuldades e perdas, devido à polêmica em torno do modelo, a igreja cresce como nunca e mais de mil pessoas passam a frequentar as reuniãos e células da igreja.
                </p>
                <p>
                    Para isto, no ano de 2002 foi levantada uma tenda com capacidade de reunir 700 pessoas e dois cultos foram estabelecidos. O Discipulado principal (G12) foi organizado e uma liderança pastoral unida foi surgindo dentro de uma mesma visão e de uma aliança. Como fruto de tudo isto, no ano de 2009, 19 novos pastores e 8 evangelistas foram ordenados após uma preparação e muito trabalho prático dos mesmos dentro da visão celular.
                </p>


                A partir de 2019 a Coerp deixa o G12 e o modelo celular e segue trabalhando para ganhar vidas e reproduzir nelas o caráter e a missão de Cristo que é fazer de cada crente um discípulos maduro e frutífero.


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

            </ListaProgramacao>
            <FooterTelaMenor />
        </>
    )
};