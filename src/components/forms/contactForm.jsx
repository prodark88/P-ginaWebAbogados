import React from 'react'
import estudio from "../../assets/estudio.jpg";


function ContactForm() {
  return (
    <div className="bg-primaryColor text-white flex-col">
      <div className="flex justify-center">
        <h1 className="text-2xl p-4 leading-10 font-semibold shadow-xl animate-bounce mt-2">
          CONTÁCTENOS
        </h1>
      </div>
      {/* init form */}
      <div className="flex justify-evenly w-11/12 p-4">
        <div className="container-lg bg-secondaryColor w-5/12">
          <form action="">
            <label
              htmlFor="nombre"
              className="block text-2xl font-normal text-gray-400"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm shadow-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-black"
              placeholder="nombre"
              required
            />
            <label
              htmlFor="nombre"
              className="block text-2xl font-normal text-gray-400 mt-4"
            >
              Correo:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm shadow-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-black"
              placeholder="correo"
              required
            />
            <label
              htmlFor="nombre"
              className="block text-2xl font-normal text-gray-400 mt-4"
            >
              Asunto:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm shadow-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-black"
              placeholder="asunto"
              required
            />
            <label
              htmlFor="nombre"
              className="block text-2xl font-normal text-gray-400 mt-4"
            >
              Mensaje:
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm shadow-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-black resize-none h-32"
              placeholder="mensaje"
              required
            ></textarea>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 mt-4"
              >
                Enviar Formulario
              </button>
            </div>
          </form>
        </div>
        {/* init image */}
        <div className="container-lg bg-secondaryColor w-4/12 flex-col justify-center items-center">
          <h1 className="text-2xl p-4 leading-10 font-semibold shadow-xl mt-2">
            Ubicación:
          </h1>
          <p>Av. Los Rosale 123</p>
          <p>Av. Los Rosale 123</p>
          <img
            className="border-2 border-sky-500 mt-4"
            src={estudio}
            alt="Ubicación en mapa"
          />
        </div>
      </div>
      <hr className="border-dashed border-2 w-10/12 mx-auto" />
    </div>
  );
}

export default ContactForm