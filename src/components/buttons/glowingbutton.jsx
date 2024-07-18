import React from "react";

const GlowingButton = () => {
  return (
    <button className="glowing-button bg-transparent border-2 border-green-500 text-white py-2 px-4 rounded-full font-semibold hover:border-green-400 hover:text-green-400 transition duration-300 ease-in-out">
      Click Me
    </button>
  );
};

export default GlowingButton;
