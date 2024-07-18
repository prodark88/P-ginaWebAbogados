import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export const PracticeAreas = () =>{
     const shadowStyle = {
       shadowCustomRightBottom: {
         boxShadow: "6px 10px 10px rgba(0, 0, 0, 0.5)",
       },
     };

    const areas = [
      { title: "Aduanero y Comercio Exterior", icon: faCheck },
      { title: "Aeronaútica", icon: faTimes },
      { title: "Ambiental", icon: faCheck },
      { title: "Banca y Finanzas", icon: faTimes },
      { title: "Compliance", icon: faCheck },
      { title: "Compliance", icon: faCheck },
      { title: "Compliance", icon: faCheck },
      { title: "Compliance", icon: faCheck },
      { title: "Compliance", icon: faCheck },
      { title: "Compliance", icon: faCheck },
      { title: "Compliance", icon: faCheck },
      { title: "Compliance", icon: faCheck },
      { title: "Compliance", icon: faCheck },
      { title: "Compliance", icon: faCheck },
      { title: "Compliance", icon: faCheck },
      // Añade más áreas según sea necesario
    ];

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {areas.map((area, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg shadow-gray-900 shadowStyle.shadowCustomBottom flex flex-col items-center border-r-4 border-t border-l border-b border-black/80 "
            style={shadowStyle.shadowCustomRightBottom}
          >
            <FontAwesomeIcon
              icon={area.icon}
              size="4x"
              className="text-iconColor"
            />
            <h4 className="mt-2 text-customGreen text-center  text-2xl font-bold  font-[700]">
              {area.title}
            </h4>
          </div>
        ))}
      </div>
    );
}



