import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BoxMenu, ButtonMenu } from "./styles";
import imagemLogo from "../../assets/Logo Coerp azul.png";
import imagemLogoCaminho from "../../assets/coerp jesus é o caminho.png";
import { useContext } from "react";
import UnidadeContext from "../../UnidadeContext";

export function Header() {
  const { unidadeSelecionada } = useContext(UnidadeContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const handleHome = () => {
    unidadeSelecionada === "Ferraz"
      ? navigate("/ferraz/home")
      : navigate("/guaianases/home");
      window.scrollTo(0, 0);
  };

  const handleProgramacao = () => {
    unidadeSelecionada === "Ferraz"
      ? navigate("/ferraz/programacao")
      : navigate("/guaianases/programacao");
      window.scrollTo(0, 0);
  };

  const handleCultos = () => {
    unidadeSelecionada === "Ferraz"
      ? navigate("/ferraz/cultos")
      : navigate("/guaianases/devocional");
      window.scrollTo(0, 0);
  };

  const handleSobre = () => {
    unidadeSelecionada === "Ferraz"
      ? navigate("/ferraz/sobre")
      : navigate("/guaianases/sobre");
      window.scrollTo(0, 0);
  };

  const handleMinisterios = () => {
    unidadeSelecionada === "Ferraz"
      ? navigate("/ferraz/Ministerios")
      : navigate("/guaianases/Ministerios");
      window.scrollTo(0, 0);
  };

  const handleMudar = () => navigate("/");

  return (
    <BoxMenu className={visible ? "visible" : "hidden"}>
      {location.pathname === "/ferraz/home" ? (
        <img src={imagemLogo} onClick={handleMudar} alt="Logo igreja coerp"/>
      ) : location.pathname === "/guaianases/home" ? (
        <img src={imagemLogoCaminho} onClick={handleMudar} alt="Logo igreja coerp"/>
      ) : (
        <img src="" alt=""/>
      )}

      <ButtonMenu
        onClick={handleHome}
        className={
          location.pathname === "/guaianases/home" ||
            location.pathname === "/ferraz/home"
            ? "active"
            : ""
        }
      >
        INÍCIO
      </ButtonMenu>
      <ButtonMenu
        onClick={handleProgramacao}
        className={
          location.pathname === "/guaianases/programacao" ||
            location.pathname === "/ferraz/programacao"
            ? "active"
            : ""
        }
      >
        PROGRAMAÇÃO
      </ButtonMenu>
      <ButtonMenu
        onClick={handleCultos}
        className={
          location.pathname === "/guaianases/devocional" ||
            location.pathname === "/ferraz/cultos"
            ? "active"
            : ""
        }
      >
        {unidadeSelecionada === "Ferraz" ? "CULTOS" : "DEVOCIONAIS"}
      </ButtonMenu>
      <ButtonMenu
        onClick={handleMinisterios}
        className={
          location.pathname === "/guaianases/Ministerios" ||
            location.pathname === "/ferraz/Ministerios"
            ? "active"
            : ""
        }
      >
        MINISTÉRIOS
      </ButtonMenu>
      <ButtonMenu
        onClick={handleSobre}
        className={
          location.pathname === "/guaianases/sobre" ||
            location.pathname === "/ferraz/sobre"
            ? "active"
            : ""
        }
      >
        SOBRE NÓS
      </ButtonMenu>
    </BoxMenu>
  );
}
