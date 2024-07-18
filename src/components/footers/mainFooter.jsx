import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook, 
  faLinkedin, 
  faYoutube, 
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {faEnvelopeOpenText, faPhoneVolume , faCopyright} from "@fortawesome/free-solid-svg-icons";


const socialIcons = [
  { icon: faFacebook, link: "https://www.facebook.com/" },
  { icon: faLinkedin, link: "https://www.facebook.com/" },
  { icon: faInstagram, link: "https://www.facebook.com/" },
  { icon: faYoutube, link: "https://www.facebook.com/" },
];

const contactIcons = [
  { icon: faWhatsapp, link: "https://www.facebook.com/" },
  { icon: faEnvelopeOpenText, link: "https://www.facebook.com/" },
  { icon: faPhoneVolume, link: "https://www.facebook.com/" },
];


const Footer = () => {
  const styles = [
    {
      textGradient: {
        backgroundImage: "linear-gradient(to bottom, #FEDE87, #FEC735)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      },
    },
  ];
  return (
    <footer className="bg-primaryColor bg-opacity-95 text-white py-8 pt-4">
      <div className="container mx-auto flex flex-col w-full items-center ">
        <div className="flex md:flex-row items-center justify-between w-11/12">
          <div className="mb-4 md:mb-0 w-6/12">
            <h3
              style={styles[0].textGradient}
              className="font-titillium text-center text-7xl font-bold tracking-[.18em] uppercase  leading-none w-9/12 m-8  text-iconColor"
            >
              Asesoría siempre a tu lado
            </h3>
          </div>
          <div className="mb-4 md:mb-0 w-4/12 h-56">
            <h2 className="text-2xl font-bold mb-4">Redes sociales</h2>
            <ul className="flex space-x-10 ">
              {socialIcons.map((item, index) => (
                <li>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-customGreen"
                  >
                    <FontAwesomeIcon icon={item.icon} size="2x" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 md:mb-0 w-4/12 h-56">
            <h2 className="text-2xl font-bold">Contáctanos</h2>
            <ul className="flex space-x-10 mt-4 ">
              {contactIcons.map((item, index) => (
                <li>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-customGreen"
                  >
                    <FontAwesomeIcon icon={item.icon} size="2x" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <hr size="4" className="text-white" />
        </div>
        <hr className="w-full mt-4 mb-4" />
        <div className="flex items-center justify-between w-11/12">
          <a
            href="block"
            className="font-titillium mr-4 text-gray-100 hover:text-iconColor font-medium text-xs tracking-[.14em] leading-none"
          >
            COPYRIGTH <FontAwesomeIcon icon={faCopyright} /> 2024 - DEVELOP LAW
            | POLÍTICA DE PRIVACIDAD
          </a>
          <a
            href="https://www.linkedin.com/in/kenneth-molina-aldair/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-iconColor font-medium"
          >
            SITE BY KennethMoEs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
