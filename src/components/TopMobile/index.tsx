import { useState, useEffect } from "react";
import {  TopMobileStyle } from "./styles";
import { TopMobileStyleB } from "./styles";
import { useNavigate } from "react-router-dom";
import imagemLogo from "../../assets/Logo Coerp azul.png";

import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { TelaMenor } from "../TelaMenor";

interface ITopMobile {
    name: string;
}

export function TopMobile({ name }: ITopMobile) {

    const navigate = useNavigate();

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
    const handleMudar = () => navigate("/");

    return (
        <>
            <TopMobileStyle className={visible ? "visible" : "hidden"}>
                <img src={imagemLogo} onClick={handleMudar} />
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