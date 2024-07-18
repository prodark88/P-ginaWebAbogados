import React from 'react'
import CardBoxItem from './card'
import estudio from "../../assets/estudio.jpg";
import estudio2 from "../../assets/estudio2.jpg";
import estudio3 from "../../assets/estudio3.jpg";


const cards = [
  {
    id: 1,
    titulo: "Primero Objeto",
    parrafo: "Este es un pequeño párrafo para el primer objeto.",
    imagen: estudio,
  },
  {
    id: 2,
    titulo: "Segundo Objeto",
    parrafo: "Este es un pequeño párrafo para el segundo objeto.",
    imagen: estudio2,
  },
  {
    id: 3,
    titulo: "Tercer Objeto",
    parrafo: "Este es un pequeño párrafo para el tercer objeto.",
    imagen: estudio3,
  },
];
function RowCards() {
  return (
    <div className="flex flex-center flex-nowrap  flex-col md:flex-wrap md:flex-row justify-evenly gap-4 w-full mx-auto text-white pb-8 bg-primaryColor">
      {cards.map((card) => (
        <CardBoxItem key={card.id} title={card.titulo} body={card.parrafo} image={card.imagen}/>
      ))}
    </div>
  );
}

export default RowCards