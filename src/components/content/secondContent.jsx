import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookF} from "@fortawesome/free-brands-svg-icons";
import { faScaleBalanced, faLightbulb , faUsersViewfinder , faLandmarkFlag} from "@fortawesome/free-solid-svg-icons";

export const SecondContent = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center bg-white">
      <div className="flex justify-center">
        <h3 className="font-titillium text-center text-6xl font-bold tracking-[.15em] uppercase  leading-tight w-7/12 m-8 text-black">
          Nuestros Valores
        </h3>
        <hr />
      </div>
      <div className="flex space-x-4 mt-4">
        <div className="box bg-gradient-to-b from-gradGreen to-gradBlack text-white font-openSans p-4 flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faUsersViewfinder}
            className="text-iconColor h-24 w-24 mb-2"
          />
          <h4 className="mt-2 font-bold tracking-[.14em] text-center">
            EFICIENCIA Y EFICACIA
          </h4>
          <p className="text-center mt-4 p-2 tracking-[.10em] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis sapiente, ipsam quo eveniet sequi minima numquam. Harum
          </p>
        </div>
        <div className="box bg-gradient-to-b from-gradGreen to-gradBlack text-white p-4 flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faLandmarkFlag}
            className="text-iconColor h-24 w-24 mb-2"
          />
          <h4 className="mt-2 font-bold tracking-[.14em] text-center">
            EXPERIENCIA
          </h4>
          <p className="text-center mt-4 p-2 tracking-[.10em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ex animi eveniet vel perspiciatis nesciunt reprehenderit modi qui
          </p>
        </div>
        <div className="box bg-gradient-to-b from-gradGreen to-gradBlack text-white p-4 flex flex-col justify-center items-center ">
          <FontAwesomeIcon
            icon={faScaleBalanced}
            className=" text-iconColor h-24 w-24 mb-2"
          />
          <h4 className="mt-2 font-bold tracking-[.14em] text-center">
            PERSONALIZACIÓN
          </h4>
          <p className="text-center mt-4 p-2 tracking-[.10em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            enim in, sunt repellat excepturi ipsum soluta voluptatem magnam.
          </p>
        </div>
      </div>
    </div>
  );
};