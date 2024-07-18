import React from "react";
import estudio from "../../assets/estudio.jpg";
import { PracticeAreas } from "../boxes/PracticeAreas";

export const SecondHeader = ()=>{
    return (
      <div className="bg-white w-full flex flex-col justify-center items-center p-5">
        <h3 className="font-titillium text-center text-7xl font-bold tracking-[.15em] uppercase  leading-tight w-7/12 m-8 text-black">
          Asesoría legal experta siempre a tu lado
        </h3>
        <p className="font-openSans text-center text-xl text-customGreen  font-[700] tracking-[.12em] leading-normal uppercase w-9/12 m-4">
          Si necesitas ayuda, necesitas Bighorn Law. Nuestros abogados han
          recuperado más de $250 millones para nuestros clientes. Hemos luchado
          por clientes que fueron lesionados en una amplia gama de situaciones:
          lesiones personales, compensación laboral, negligencia médica y mucho
          más. Bighorn Law te respalda en cualquier escenario.
        </p>
        <hr className="border-customGreen w-8/12 border-t-4 my-4" />
        <div className="flex w-10/12 justify-center m-4">
          <div className="flex-col w-8/12 ">
            <p
              class="first-line:uppercase first-line:tracking-widest
              first-letter:text-7xl first-letter:font-bold first-letter:text-black
              first-letter:mr-3 first-letter:float-left text-black"
            >
              Nos permitimos presentarles los servicios de asesoría jurídica que
              brinda nuestro Despacho, constituido por un grupo de abogados cuya
              experiencia y especialización se complementan y aseguran un
              eficiente y oportuno servicio a los clientes. En nuestro Despacho
              les ofrecemos una atención profesional personalizada orientada a
              lograr resultados favorables a costos muy competitivos dentro del
              mercado, la que no sólo se limita a la absolución de consultas de
              índole legal y patrocinio de casos judiciales, sino que se
              extiende a prestar una asesoría permanente en la búsqueda de
              oportunidades de negocios para nuestros clientes. <br />
              <br />
              Es muy importante resaltar que este marco general para la
              prestación de servicios está cimentado en una sólida base de
              valores tales como la honestidad, confiabilidad, reserva
              profesional, y calidad del servicio, que distinguen y mantienen la
              relación del Estudio y el cliente.
            </p>
            <br />
            <p>
              En Montezuma Abogados ponemos al servicio de nuestros clientes la
              amplia experiencia de nuestros miembros en la práctica de las
              diversas áreas del derecho como también personal auxiliar
              especializado y una adecuada infraestructura, que nos permiten
              prestar a nuestros clientes un servicio de asesoría legal de la
              más alta calidad.
            </p>
          </div>

          <div className="w-4/12 ml-4 w-64 ">
            <img src={estudio} alt="" className="p-2" />
            <img src={estudio} alt="" className="p-2" />
          </div>
        </div>

        <div className="container mx-auto w-10/12 mb-4 p-4">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex justify-center">
              <h3 className="font-titillium text-center text-6xl font-bold tracking-[.15em] uppercase  leading-tight w-7/12 m-8 text-black">
                Areas de practica
              </h3>
            </div>
            <div>
              <PracticeAreas />
            </div>
          </div>
        </div>
      </div>
    );
}