import imgSobreNos from '../../../assets/sobrenos.svg';
import { SobreSection } from '../../styles/SobreNos/styles';

export function SobreNosF() {
    return (
        <SobreSection>
            <div className="topo-container">
                <div className="quem-somos">
                    <h2 className="text-5xl font-bold leading-tight">
                        <span className="block">QUEM</span>
                        <span className="block underline decoration-[#3663AC] decoration-4">SOMOS?</span>
                    </h2>
                </div>

                <div className="ano-box">
                    <p>20<br />25</p>
                    <div className="square" />
                </div>
            </div>
            <div className="img-container">
                <img
                    src={imgSobreNos}
                    alt="Grupo da Igreja Coerp"
                    className="img-sobre"
                />
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
                <div className="bloco">
                    <h4><span className="barra-lateral"></span> NOSSA <span className="ml-1 font-extrabold">HISTÓRIA</span> </h4>
                    <p>
                        Nossa história começou em <span className="text-[#3663AC] font-semibold">13 de abril de 1976</span>,
                        quando éramos conhecidos como Igreja Batista de Romanópolis. Desde então, passamos por diversas mudanças,
                        tanto em nosso nome quanto em nosso <span className="text-[#3663AC] font-semibold">perfil eclesiástico</span>.
                    </p>
                </div>
                <div className="bloco">
                    <h4><span className="barra-lateral" /> PRIMEIROS <strong>DESAFIOS</strong></h4>
                    <p>
                        Inicialmente, enfrentamos desafios, tanto espirituais como na construção de nosso primeiro local de culto.
                        Durante esse período, uma igreja com fundamentos batistas foi desenvolvendo suas ferramentas ministeriais e
                        formando líderes em diversas áreas.
                    </p>
                </div>

                <div className="bloco">
                    <h4><span className="barra-lateral" /> AVIVAMENTO & <strong>CRESCIMENTO</strong></h4>
                    <p>
                        Com o tempo, uma nova geração surgiu na igreja, ansiosa por avivamento e intimidade com Deus.
                        Esse período marcou uma mudança para uma abordagem mais informal de liturgia, adotando características pentecostais
                        na oração e pregação. A igreja cresceu rapidamente, impactando a cidade e atraindo pessoas de toda a região.
                    </p>
                </div>

                <div className="bloco">
                    <h4><span className="barra-lateral" /> VISÃO MISSIONÁRIA & <strong>COMPROMISSO SOCIAL</strong></h4>
                    <p>
                        A partir de 1996, incorporamos uma visão missionária e a preocupação com o social em nossa missão.
                        O Departamento de Missões foi criado, resultando em conferências, viagens missionárias e o envio de missionários
                        para a Janela 10-40. Também iniciamos projetos assistenciais que até hoje nos impulsionam a continuar com um olhar
                        de amor para as demandas sociais da nossa cidade e região.
                    </p>
                </div>

                <div className="bloco">
                    <h4><span className="barra-lateral" /> EXPANSÃO & <strong>CÉLULAS</strong></h4>
                    <p>
                        A partir de 2000, demos início a uma nova fase com a introdução do conceito de "igreja em célula".
                        O modelo G12 foi adotado, trazendo crescimento e fortalecimento da igreja. Em 2012, iniciamos um trabalho em Guaianases,
                        que passou por diversas mudanças de local até se estabelecer no Jardim São Paulo, sempre caminhando junto com a Coerp Ferraz
                        na doutrina e orientação pastoral.
                    </p>
                </div>

                <div className="bloco">
                    <h4><span className="barra-lateral" /> O PRESENTE & <strong className="text-[#3663AC]">O FUTURO</strong></h4>
                    <p>
                        Hoje, continuamos com os princípios herdados, seguindo o G12, mas com constante adaptação às demandas do nosso tempo.
                        Somos uma igreja que preza pela comunhão, relevância e ensino da Palavra. Cremos em um futuro promissor, construído
                        sobre a fidelidade de Deus e o compromisso de cada membro.
                    </p>
                </div>
            </div>

        </SobreSection>
    );
}