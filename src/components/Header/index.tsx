import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer, NavMenu, Logo, NavItem, AgendaButton } from "./styles";
import imagemLogo from "../../assets/Logo Coerp azul.png";
import imagemLogoCaminho from "../../assets/coerp jesus é o caminho.png";
import UnidadeContext from "../../UnidadeContext";
import { Calendar } from "@phosphor-icons/react";

export function Header() {
  const { unidadeSelecionada } = useContext(UnidadeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleNavigate = (path: string) => {
    unidadeSelecionada === "Ferraz"
      ? navigate(`/ferraz/${path}`)
      : navigate(`/guaianases/${path}`);
    window.scrollTo(0, 0);
  };

  return (
      <NavMenu>
        <Logo
          src={
            location.pathname.includes("/ferraz")
              ? imagemLogo
              : imagemLogoCaminho
          }
          onClick={() => navigate("/")}
          alt="Logo igreja coerp"
        />
        <NavItem onClick={() => handleNavigate("home")} active={location.pathname.includes("home")}>
          Home
        </NavItem>
        <NavItem onClick={() => handleNavigate("cultos")} active={location.pathname.includes("cultos") || location.pathname.includes("devocional")}>
          {unidadeSelecionada === "Ferraz" ? "Cultos" : "Devocionais"}
        </NavItem>
        <NavItem onClick={() => handleNavigate("Ministerios")} active={location.pathname.includes("Ministerios")}>
          Ministérios
        </NavItem>
        <NavItem onClick={() => handleNavigate("sobre")} active={location.pathname.includes("sobre")}>
          Sobre Nós
        </NavItem>
        <AgendaButton onClick={() => handleNavigate("programacao")}>
          Agenda <Calendar size={18} />
        </AgendaButton>
      </NavMenu>
  );
}