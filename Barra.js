//Barra.js
import React from "react";
//import QrModal from "./QrModal";
import "./estilos/barra.css";

function Barra({ imagen, alt, precioFinal, desc, ext, nuevoObjeto }) {
  const ocultarBarra = () => {
    document.querySelector(".menu").classList.toggle("hidden");
  };
  const mostrarPedido = () => {
  alert('modal')
  };
  return (
    <>
      <div className="container barra d-flex">
        <div className="navegacion d-flex flex-direction: row">
          <div className="barraIco">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={ocultarBarra}
            >
              <path
                d="M3 16h18v2H3v-2Zm0-5h18v2H3v-2Zm0-5h18v2H3V6Z"
                fillRule="evenodd"
                style={{
                  fill: "#FFF",
                  strokeWidth: 1,
                }}
              />
            </svg>
          </div>
          <div className="menu hidden">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Sobre mi</a>
              </li>
              <li>
                <a href="#services">Servicios</a>
              </li>
              <li>
                <a href="#portfolio">Post Venta</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="anexo"> Sentite especial ...</div>
        <div className="carShopp">
          <i class="fa-solid fa-cart-arrow-down" onClick={mostrarPedido}></i>
        </div>
      </div>
    </>
  );
}

export default Barra;
