import { OnlineProgrammationCultos } from "../../../components/OnlineProgrammationCultos";
import {  BoxGeral } from "../../styles/Cultos/styles";
import { Helmet } from "react-helmet";

export function CultosF() {
    return (
        <BoxGeral>
            <Helmet>
                <title>Cultos Online Ao Vivo | Igreja Coerp - Participe Conosco!</title>
                <meta name="description" content="Acesse os cultos online da Igreja Coerp e conecte-se virtualmente em momentos de adoração inspiradores. Junte-se à nossa comunidade para uma experiência significativa." />
            </Helmet>

            <OnlineProgrammationCultos />
        </BoxGeral> 
    )
};