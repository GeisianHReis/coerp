import 'bootstrap/dist/css/bootstrap.css';
import { Box, Section, EventCard, OnlineProgram, Footer } from "../../styles/Home/styles";
import { FooterTelaMenor } from '../../../components/FooterTelaMenor';
import { TopMobile } from '../../../components/TopMobile';
import { Button } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import client from '../../../CMS/Service/dato';
import gql from 'graphql-tag';
import bannerImage from "../../../assets/IMG_1457 1.svg";

export function Home() {
    interface Event {
        title: string;
        date: string;
        description: string;
    }

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        client.query({
            query: gql`
                query {
                    upcomingEvents {
                        title
                        date
                        description
                    }
                }
            `
        })
        .then((res) => {
            setEvents(res.data.upcomingEvents);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <Helmet>
                <title>Igreja Coerp - Página Inicial</title>
            </Helmet>
            <TopMobile name="" />
            
            <Box>
                <img src={bannerImage} alt="Banner da Igreja" />
            </Box>
            
            <Section>
                <h2>O QUE VEM POR AÍ</h2>
                <div className="events">
                    {events.map((event, index) => (
                        <EventCard key={index}>
                            <h3>{event.title}</h3>
                            <p>{event.date}</p>
                            <p>{event.description}</p>
                            <Button variant="contained">Mais Informações</Button>
                        </EventCard>
                    ))}
                </div>
            </Section>

            <OnlineProgram>
                <h2>PROGRAMAÇÃO ONLINE</h2>
                <p>Acompanhe nossos cultos pelo YouTube.</p>
                <Button variant="contained">Ver Mais</Button>
            </OnlineProgram>

            <FooterTelaMenor />
        </>
    );
}
