// Cards.js
import React from "react";
import ContadorClicks from "./ContadorClicks";
import "./estilos/cards.css";

function Cards(props) {

  const { imagen, ext, alt, precio, desc } = props;

  console.log(imagen);

  return (
    <div className="card">
      <div className="card-img">
        <img src={require(`../images/${imagen}.${ext}`)} alt={alt} />
      </div>
      <div className="descrip">
        <div className="desc-precio">
          <p>&#36;{precio}</p>
        </div>
        <div className="desc-texto">
          <p>{desc}</p>
        </div>
      </div>
      <ContadorClicks
         imagen={require(`../images/${imagen}.${ext}`)}
          alt={alt}
          precio={precio}
          desc={desc}
      />
    </div>
  );
}

export default Cards;
