import Social from "./Social";

function Header() {
  
  return (
    <header className="container d-flex">
      <div className="imagen-container">
        <img
          src={require("../images/logos/logo.png")}
          className="imagenLogo"
          alt="logo de la empresa"
        />
      </div>
      <h1>Tiaras Rosario</h1>
      <div className="social-net d-flex">
        <Social />
      </div>
    </header>
  );
}

export default Header;