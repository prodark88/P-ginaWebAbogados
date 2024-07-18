import React from "react";
import Navbar from "../navbars/mainNavbar";
import { Outlet } from "react-router-dom";
import { ContactButton } from "../buttons/contactButton";


const MainHeader= () => {
  return (
    <header className="relative isolate overflow-hidden bg-primaryColor text-white py-4">
      <div className="container mx-auto flex items-center justify-around">
        {/* Sección del logo con margen a la derecha */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-xl font-bold">Mi Sitio</h1>
        </div>
        {/* Section mainNavbar */}
        <nav>
          <Navbar />
        </nav>
        {/* Sección del login con margen a la izquierda */}
        <div>
          <ContactButton/>
        </div>
      </div>
      <Outlet/>
    </header>
  );
};

export default MainHeader;





