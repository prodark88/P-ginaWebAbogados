import React, { Component } from 'react'


const styleCardBox = {
  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.5)", // Ejemplo de sombra
  // Otros estilos que desees agregar
};
function CardBoxItem({title, image , body}) {
  return (
    <div
      style={styleCardBox}
      className="w-full md:w-1/4 p-4 mt-8 
      rounded-[15px] bg-gray-950 bg-opacity-20 text-white"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src={image}
          className="object-cover size-24 rounded-md w-full h-[200px]"
        />
        <h3 className='text-2xl p-4'>{title}</h3>
      </div>
      <p>{body}</p>
    </div>
  );
}

export default CardBoxItem

