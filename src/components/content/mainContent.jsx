import React from "react";
import { ScheduleButton } from "../buttons/scheduleButton";
import { PracticeAreas } from "../boxes/PracticeAreas";

export const MainContent = () => {
  return (
    <div className="relative isolate h-[1400px] md:h-[840px] ">
      <img
        src="/ayacucho.jpg"
        alt="Imagen de Ayacucho"
        className="object-fill h-full w-full"
      />
      <div className="absolute inset-0 bg-primaryColor bg-opacity-90 "></div>
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className=" p-8 rounded-lg shadow-lg w-11/12">
          {/* Contenedor vertical */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-11/12 h-auto mb-4 mb-12">
              <div className="flex flex-col justify-center text-white ">
                <h1 className="text-7xl">TRABAJA CON NOSOTROS</h1> <br />
                <p className=" mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  beatae temporibus, nihil magnam amet saepe autem et! Cum
                  nostrum quas mollitia a. Voluptatem soluta aliquam vel
                  doloribus voluptatibus? Velit, rem? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quam necessitatibus id
                  laudantium beatae dolorem, iste natus error nihil quas quidem
                  sequi, quibusdam labore delectus culpa temporibus distinctio
                  inventore architecto repellendus?
                </p>
                <hr className="border-lime-500 border-opacity-50 border-t-4 my-4" />
                <br />
              </div>
              {/* Segundo contenedor columna */}
              <div className="flex flex-col justify-center items-start">
                <ScheduleButton />
              </div>
            </div>
            <div className=" justify-around w-11/12 h-auto">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


