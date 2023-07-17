import { TopMobileStyle } from "./styles";
import { TopMobileStyleB } from "./styles";
import imagemLogo from "../../assets/Logo Coerp azul.png";

import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { TelaMenor } from "../TelaMenor";
import { useNavigate } from "react-router-dom";

interface ITopMobile {
    name: string;
}

export function TopMobile({ name }: ITopMobile) {
    const navigate = useNavigate();
    const handleMudar = () => navigate("/");
    
    return (
        <>
                    <TopMobileStyle>
                        <img src={imagemLogo} onClick={handleMudar}/>
                        <section>
                            <InstagramLogo color="black" size={25} weight="fill" />
                            <FacebookLogo color="black" size={25} weight="fill" />
                            <WhatsappLogo color="black" size={25} weight="fill" />
                        </section>
                        <TelaMenor />
                    </TopMobileStyle>
                    <TopMobileStyleB>
                        {name}
                    </TopMobileStyleB>
        </>
    )
};