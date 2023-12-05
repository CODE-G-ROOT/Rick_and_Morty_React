import React from "react";

const IconoPersonalizado = ({ colorFondo, icono, colorTexto }) => {
  return (
    <div className={`relative w-8 h-8 flex justify-center text-center`}>
      <div className={`absolute ${colorFondo} w-full h-full rounded-lg opacity-20`}></div>
      {React.cloneElement(icono, { className: `${colorTexto} text-lg m-[0.4rem] w-3/5 h-3/5 z-10` })}
    </div>
  );
};



export default IconoPersonalizado;
