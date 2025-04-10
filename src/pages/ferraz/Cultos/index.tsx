import Button from "@mui/material/Button";
import { EventCard, OnlineSection } from "../../styles/Cultos/styles";
import gql from 'graphql-tag';
import { useEffect, useState } from "react";
import client from "../../../CMS/Service/dato";

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

export function CultosF() {
    const [url, setUrl] = useState();

    useEffect(() => {
        client.query({
            query: gql`{
                ultimatransmissao{
                    culto
                }
            }`
        })
            .then((res) => {
                setUrl(res.data.ultimatransmissao.culto);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <OnlineSection>
            <div className="events-grid">
                {programacao.map((event, index) => (
                    <EventCard key={index}>
                        <span className="date">{event.date}</span>
                        <h3>{event.title}</h3>
                        <div className="watch-button">Assistir ▶</div>
                    </EventCard>
                ))}
            </div >
        </OnlineSection >

    )
};