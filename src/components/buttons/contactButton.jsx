import React from "react";
import { useNavigate } from "react-router-dom";

export const ContactButton = ()=>{

    const navigate = useNavigate();
    const handleClick = ()=>{
      navigate("/contacto")
    }
    return (
      <button 
      onClick={handleClick}
      className="bg-teal-400  font-bold shadow-lg shadow-teal-400/40 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black ">
        Contactanos
      </button>
    );
}