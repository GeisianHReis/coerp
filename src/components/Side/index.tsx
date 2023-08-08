import { Lateral } from "./styles";
import imagemLogo from "../../assets/symbolcoerp.png";
import { useContext } from "react";
import UnidadeContext from "../../UnidadeContext";
import { useNavigate } from "react-router-dom";

interface ISide {
    name: string;
}

export function Side({ name }: ISide) {
    const { unidadeSelecionada } = useContext(UnidadeContext);
    const navigate = useNavigate();

    const handleHome = () => {
        unidadeSelecionada === "Ferraz"
            ? navigate("/ferraz/home")
            : navigate("/guaianases/home");
        window.scrollTo(0, 0);
    };
    return (
        <>
            <Lateral>
                <img src={imagemLogo} onClick={handleHome} alt="Logo igreja coerp"/>
                {name}
            </Lateral>
        </>

    )
}