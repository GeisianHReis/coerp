import { ButtonMenu, Geral, Logo, Menu, Subtitulo, Titulo } from "./styles";
import logo from "../../assets/logobranco- coerp.svg"
import { useLocation, useNavigate } from "react-router-dom";
import {useContext } from 'react';
import UnidadeContext from "../../UnidadeContext";



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
            <Logo>
                <img src={logo} /></Logo>
            <Titulo>
                <h1>
                    SEJA BEM VINDO
                </h1>
            </Titulo>

            <Subtitulo>
                <p>escolha uma unidade:</p>
            </Subtitulo>

            <Menu>
                <ButtonMenu
                    className={location.pathname === '/home' ? 'active' : ''}
                    onClick={handleHomeFerraz}
                >
                    <p>Ferraz</p>
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