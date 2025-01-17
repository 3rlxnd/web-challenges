import React, { useState } from "react";
import "./styles.css";

import Cards from "../components/Cards";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Button from "../components/Button";

const animals = [
    { id: "1", name: "Dog", habitat: "Domestic Animal", emoji: "🐕" },
    { id: "2", name: "Cat", habitat: "Domestic Animal", emoji: "🐈" },
    { id: "3", name: "Hamster", habitat: "Domestic Animal", emoji: "🐹" },
    { id: "4", name: "Parrot", habitat: "Domestic Animal", emoji: "🦜" },
    { id: "5", name: "Fish", habitat: "Domestic Animal", emoji: "🐠" },

    { id: "6", name: "Fox", habitat: "Forest", emoji: "🦊" },
    { id: "7", name: "Bear", habitat: "Forest", emoji: "🐻" },
    { id: "8", name: "Owl", habitat: "Forest", emoji: "🦉" },
    { id: "9", name: "Deer", habitat: "Forest", emoji: "🦌" },
    { id: "10", name: "Hedgehog", habitat: "Forest", emoji: "🦔" },

    { id: "11", name: "Whale", habitat: "Ocean", emoji: "🐋" },
    { id: "12", name: "Dolphin", habitat: "Ocean", emoji: "🐬" },
    { id: "13", name: "Crab", habitat: "Ocean", emoji: "🦀" },
    { id: "14", name: "Lobster", habitat: "Ocean", emoji: "🦞" },
    { id: "15", name: "Shark", habitat: "Ocean", emoji: "🦈" },

    { id: "16", name: "Eagle", habitat: "Mountains", emoji: "🦅" },
    { id: "17", name: "Goat", habitat: "Mountains", emoji: "🐐" },
    { id: "18", name: "Wolf", habitat: "Mountains", emoji: "🐺" },
    { id: "19", name: "Snow Leopard", habitat: "Mountains", emoji: "🐆" },
    { id: "20", name: "Yak", habitat: "Mountains", emoji: "🐃" },
];

const habitats = ["Mountains", "Ocean", "Forest", "Domestic Animal"];

export default function App() {
    const [filter, setFilter] = useState('Ocean')

    function onFilter(habitat) {
        setFilter(habitat)
    }

    return <>
        <h1>Animal Filter</h1>
        <Filter>
            {habitats.map((habitat) => <Button key={habitat} onFilter={() => onFilter(habitat)} habitat={habitat}></Button>)}
        </Filter>
        <Cards>
            {animals.map((animal) => {
                if (filter != '' && animal.habitat === filter) {
                    return <Card key={animal.id} animal={animal}></Card>
                }
            })}
        </Cards>
    </>
}
