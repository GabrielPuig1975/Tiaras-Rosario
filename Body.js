// Body.js

import "./estilos/cards.css";
import Cards from './Cards';

function Body(  ) {
  
  return (
    <div className="container-body d-grid">
      <Cards
        imagen="celeste"
        ext="jpg"
        alt="Tiara celeste con mariposas"
        precio="12000"
        desc="Tiara Celeste con mariposas y boutonnier de regalo!!!"
      />
      <Cards
        imagen="pearl"
        ext="jpeg"
        alt="Tiara de perlas y flores"
        precio="15000"
        desc="Tiara de perlas y flores en hilo dorado"
      />
      <Cards
        imagen="porcelana"
        ext="jpeg"
        alt="Tiara porcelana fría y flores"
        precio="17000"
        desc="Tiara en porcelana fría con flores y canutillos dorados"
      />
      <Cards
        imagen="shelly"
        ext="jpeg"
        alt="Tiara en perlas blancas y plateadas"
        precio="14000"
        desc="Tiara con perlas blancas y plateadas con hilo en cobre"
      />
    </div>
  );
}

export default Body;
