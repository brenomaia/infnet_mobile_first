import "./main.css"
import Spots from "./components/Spots"
import SpotsSummary from "./components/SpotsSummary"
import { useState } from "react";

export default function App() {
    const [visits, setVisits] = useState([]);

    const onAddVisit = (spot) => {
        setVisits([...visits, spot]);
    };

    const touristicSpots = [
        {
            name: "Pão de Açúcar",
            price: 100,
            imgPath: "../../assets/paodeacucar.jpg",
            info: "Uma das melhores vistas do Rio de Janeiro",
            howToGet: "Teleférico"
        },
        {
            name: "Cristo Redentor",
            price: 30,
            imgPath: "../../assets/cristoredentor.jpg",
            info: "Uma das melhores vistas do Rio de Janeiro",
            howToGet: "Bondinho"
        },
        {
            name: "Arpoador",
            price: 0,
            imgPath: "../../assets/ipanema.jpg",
            info: "Uma das melhores vistas do Rio de Janeiro",
            howToGet: "Metrô"
        }
    ]

    return (
        <>
        < Spots spots={touristicSpots} onAddVisit={onAddVisit} />
        < SpotsSummary spots={visits} />
        </>
    )
}