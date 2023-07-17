import { TopMobileStyle } from "./styles";
import { TopMobileStyleB } from "./styles";
import imagemLogo from "../../assets/Logo Coerp azul.png";

import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { TelaMenor } from "../TelaMenor";

interface ITopMobile {
    name: string;
}

export function TopMobile({ name }: ITopMobile) {
    
    return (
        <>
                    <TopMobileStyle>
                        <img src={imagemLogo} />
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