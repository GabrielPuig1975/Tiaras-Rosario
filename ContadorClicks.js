import React from "react";
import { useState } from "react";
import CarritoDeCompras from "./CarritoDeCompras";
import "./estilos/contadorClicks.css";

function ContadorClicks({ imagen, ext, alt, precio, desc }) {
  //console.log(imagen, ext, alt, precio, desc);
  // ---------------------------------------------//
  const [numClics, setNumClics] = useState(1);

  //Contador de clicks aumento
  const handleClick = () => {
    setNumClics((e) => e + 1);
    const flechaDism = document.querySelector(".fa-caret-down");
    if (numClics <= 1) {
      flechaDism.classList.remove("hidde");
    };
  };

  //Contador de clicks disminución
  const handleClick2 = () => {
    if (numClics >= 0) {
      setNumClics((e) => e - 1);
    }
    if (numClics === 1) {
      const flechaDism = document.querySelector(".fa-caret-down");
      flechaDism.classList.add("hidde");
    };
  };

  //Acumulador precios

  const aPagar = (precio * numClics);
  console.log(aPagar);


  return (
    <div>
      <div className="carrito d-flex">
        <p>
          Cant: <span>{numClics}</span>
        </p>
        <div>
          <i className="fa-solid fa-caret-up" onClick={handleClick}></i>
        </div>
        <div>
          <i className="fa-solid fa-caret-down" onClick={handleClick2}></i>
        </div>
        <CarritoDeCompras
          imagen={imagen}
          ext={ext}
          alt={alt}
          precio={aPagar}
          numClics={numClics}
          desc={desc}
        />
      </div>
    </div>
  );
}

export default ContadorClicks;
