import 'bootstrap/dist/css/bootstrap.css';
import { Box, Section, EventCard, OnlineSection, Footer, HeaderContent, DateBox, UnitName, MainHeader, MainLogo, EventCardEvent } from "../../styles/Home/styles";
import { FooterTelaMenor } from '../../../components/FooterTelaMenor';
import { TopMobile } from '../../../components/TopMobile';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import client from '../../../CMS/Service/dato';
import gql from 'graphql-tag';
import bannerImage from "../../../assets/IMG_1457 1.svg";

export function HomeF() {
    interface Event {
        title: string;
        date: string;
        description: string;
    }

    const [events, setEvents] = useState<Event[]>([
        {
            title: "Páscoa Solidária",
            date: "18/04 às 13h",
            description: "Evento beneficente para ajudar famílias carentes.",
        },
        {
            title: "Ordenação Pastoral",
            date: "19/04 às 19h",
            description: "Celebração especial para a ordenação de novos pastores.",
        },
        {
            title: "Aniversário da Igreja",
            date: "Mês de Abril",
            description: "Comemoração do aniversário da nossa comunidade.",
        }
    ]);

    const programacao = [
        { date: "09/03", title: "A escolha da melhor parte - Pr. Gonçalves" },
        { date: "02/03", title: "Tema da palavra - Pr. Nome" },
        { date: "23/02", title: "Tema da palavra - Pr. Nome" },
        { date: "16/02", title: "Tema da palavra - Pr. Nome" },
        { date: "09/02", title: "Tema da palavra - Pr. Nome" },
        { date: "09/02", title: "Tema da palavra - Pr. Nome" },
        { date: "09/02", title: "Tema da palavra - Pr. Nome" },
        { date: "09/02", title: "Tema da palavra - Pr. Nome" },
        { date: "09/02", title: "Tema da palavra - Pr. Nome" },
        { date: "09/02", title: "Tema da palavra - Pr. Nome" },
        { date: "09/02", title: "Tema da palavra - Pr. Nome" },
    ];

    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [open, setOpen] = useState(false);

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

    const handleOpen = (event: Event) => {
        setSelectedEvent(event);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedEvent(null);
    };

    return (
        <>
            <Helmet>
                <title>Igreja Coerp - Página Inicial</title>
            </Helmet>
            <TopMobile name="" />
            <MainHeader>
                <HeaderContent>
                    <MainLogo>COERP</MainLogo>
                    <DateBox>Desde 13 De Abril De 1976</DateBox>
                    <UnitName>UNIDADE FERRAZ</UnitName>
                </HeaderContent>
            </MainHeader>
            <Section>
                <h2>O QUE VEM POR AÍ</h2>
                <div className="events">
                    {events.map((event, index) => (
                        <EventCardEvent key={index}>
                            <h3>{event.title}</h3>
                            <p>{event.date}</p>
                            <p>{event.description}</p>
                            <Button variant="contained" onClick={() => handleOpen(event)}>Mais Informações</Button>
                        </EventCardEvent>
                    ))}
                </div>
            </Section>

            <OnlineSection>
                <div className="events-grid">
                    <EventCard style={{ backgroundColor: "#FFFFFF" }}>
                        <h2>PROGRAMAÇÃO <span>ONLINE</span></h2>
                        <p>Acompanhe nossos cultos pelo YouTube e fortaleça sua fé onde quer que esteja!</p>
                        <div className="view-more">
                            <Button variant="contained" style={{ backgroundColor: "#3663AC" }}>Ver Mais</Button>
                        </div>
                    </EventCard>
                    {programacao.map((event, index) => (
                        <EventCard key={index}>
                            <span className="date">{event.date}</span>
                            <h3>{event.title}</h3>
                            <div className="watch-button">Assistir ▶</div>
                        </EventCard>
                    ))}
                </div >
            </OnlineSection >

            <FooterTelaMenor />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{selectedEvent?.title}</DialogTitle>
                <DialogContent>
                    <p><strong>Data:</strong> {selectedEvent?.date}</p>
                    <p>{selectedEvent?.description}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Fechar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
