import { ButtonMenu, Geral, Logo, Menu, Subtitulo, Titulo } from "./styles";
import logo from "../../assets/logobranco- coerp.svg"
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import UnidadeContext from "../../UnidadeContext";
import { Helmet } from "react-helmet";



export function TelaInicial() {
    const navigate = useNavigate();
    const location = useLocation();

    const { setUnidadeSelecionada } = useContext(UnidadeContext);

    const handleHomeGuaianases = () => {
        setUnidadeSelecionada('guaianases');
        navigate('/guaianases/home');
    };
    const handleHomeFerraz = () => {
        setUnidadeSelecionada('Ferraz');
        navigate('/ferraz/home');
    };
    return (
        <Geral>
            <Helmet>
                <title>Coerp - Comunidade Evangélica Redenção Plena</title>
                <meta name="description" content="Uma igreja que ama o que cristo ama. Seja parte da Comunidade Evangélica Redenção Plena e encontre sua família espiritual conosco." />
            </Helmet>
            <Logo>
                <img src={logo} alt="Logo igreja coerp"/></Logo>
            <Titulo>
                <h2>
                    <p>SEJA&nbsp;</p> BEM VINDO
                </h2>
            </Titulo>

            <Subtitulo>
                <p>escolha uma unidade:</p>
            </Subtitulo>

            <Menu>
                <ButtonMenu
                    className={location.pathname === '/home' ? 'active' : ''}
                    onClick={handleHomeFerraz}
                >
                    Ferraz
                </ButtonMenu>
                <ButtonMenu
                    className={location.pathname === '/home' ? 'active' : ''}
                    onClick={handleHomeGuaianases}
                >
                    Guaianases
                </ButtonMenu>
            </Menu>
        </Geral>
    )
};