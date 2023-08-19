import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./estilos/QrModal.css";

function QrModal({ imagen, alt, precioFinal, desc, ext, nuevoObjeto }) {

  //log de los objetos
  console.log(imagen, alt, ext, precioFinal, desc);
  console.log("Este es el objeto: ", nuevoObjeto);

  const [showQRCode, setShowQRCode] = useState(false);

  const handleInputChange = () => {
    setShowQRCode(!showQRCode);
  };

  return (
    <div className="shopp">
      <div>
        <img src={imagen} ext={ext} alt={alt} className="miniImg" />
      </div>

      <div className="descripcion">{desc}</div>

      <div className="precio">Precio: ${precioFinal}</div>
      <label className="myCheckbox">
        <input type="checkbox" id="checked" onClick={handleInputChange} />
        <span>
          <i className="fa-solid fa-check on"></i>
        </span>
        <div className="container-qr">
          {showQRCode && <QRCode value={desc} />}
          {!showQRCode && <QRCode value={desc} className="hidde" />}
        </div>
      </label>
    </div>
  );
}

export default QrModal;
