import Header from "./componentes/Header";
import Barra from "./componentes/Barra";
import Body from "./componentes/Body";
import Carousel from "./componentes/Carousel";

import "./App.css";

function App() {
 

  return (
    <>
      <Header />
      <Barra  />
      <Body  />
      <Carousel
        imagen1="celeste"
        alt1="imagen de una tiara celeste"
        ext1="jpg"
        imagen2="celesteModelo"
        alt2="imagen de una tiara celeste en la modelo"
        ext2="jpeg"
        imagen3="pearl"
        alt3="imagen de una tiara de perlas"
        ext3="jpeg"
        imagen4="porcelana"
        alt4="imagen de una tiara de percelana fría"
        ext4="jpeg"
        imagen5="shelly"
        alt5="imagen de una tiara de ostras"
        ext5="jpeg"
      />
    </>
  );
}

export default App;
