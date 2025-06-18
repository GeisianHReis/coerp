import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BoxMenu, ButtonMenu, AgendaButton } from "./styles";
import imagemLogo from "../../assets/Logo Coerp azul.png";
import imagemLogoCaminho from "../../assets/coerp jesus é o caminho.png";
import { useContext } from "react";
import UnidadeContext from "../../UnidadeContext";
import { FaCalendarAlt } from "react-icons/fa";

export function Header() {
  const { unidadeSelecionada } = useContext(UnidadeContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10); // Show on scroll up or at the very top

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

  const handleAgenda = () => {
    unidadeSelecionada === "Ferraz"
      ? navigate("/ferraz/programacao")
      : navigate("/guaianases/programacao"); 
    window.scrollTo(0, 0);
  };

  return (
    <BoxMenu className={visible ? "visible" : "hidden"}>
      {location.pathname.includes("/ferraz") ? ( 
        <img src={imagemLogo} onClick={handleMudar} alt="Logo igreja coerp" />
      ) : location.pathname.includes("/guaianases") ? (
        <img
          src={imagemLogoCaminho}
          onClick={handleMudar}
          alt="Logo igreja coerp"
        />
      ) : (
        <img src="" alt="" /> 
      )}

      <nav> 
        <ButtonMenu
          onClick={handleHome}
          className={
            location.pathname.includes("home") ? "active" : "" 
          }
        >
          Home
        </ButtonMenu>
        <ButtonMenu
          onClick={handleCultos}
          className={
            location.pathname.includes("cultos") || location.pathname.includes("devocional")
              ? "active"
              : ""
          }
        >
          {unidadeSelecionada === "Ferraz" ? "Cultos" : "Devocionais"}
        </ButtonMenu>
        <ButtonMenu
          onClick={handleMinisterios}
          className={
            location.pathname.includes("Ministerios") ? "active" : ""
          }
        >
          Ministérios
        </ButtonMenu>
        <ButtonMenu
          onClick={handleSobre}
          className={location.pathname.includes("sobre") ? "active" : ""}
        >
          Sobre Nós
        </ButtonMenu>
      </nav>

      <AgendaButton
        onClick={handleAgenda}
        className={location.pathname.includes("agenda") ? "active" : ""}
      >
        Agenda <FaCalendarAlt size={16} /> 
      </AgendaButton>
    </BoxMenu>
  );
}