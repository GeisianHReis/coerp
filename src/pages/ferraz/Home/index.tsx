import 'bootstrap/dist/css/bootstrap.css';
import { Helmet } from 'react-helmet';
import { UpcomingEvents } from '../../../components/UpcomingEvents';
import { OnlineProgrammation } from '../../../components/OnlineProgrammation';
import { HeroSection } from '../../../components/FixedSection';


export function HomeF() {

    return (
        <>
            <Helmet>
                <title>Igreja Coerp - Comunidade Evangélica Redenção Plena | Seja Parte da Nossa Missão</title>
                <meta name="description" content="Uma igreja que entendeu o ide do Senhor. Somos um só corpo, com um só propósito: compartilhar o amor de Cristo e transformar vidas. Venha fazer parte dessa missão!" />
            </Helmet>
            <HeroSection unitName="UNIDADE FERRAZ" />

            <UpcomingEvents />
            <OnlineProgrammation />
        </>
    )
};