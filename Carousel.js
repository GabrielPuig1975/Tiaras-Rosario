import React from "react";
import VideoAutoPlay from "./Videos";
import "./estilos/carrousel.css";

function Carrousel(props) {
  const { imagen1, imagen2, imagen3, imagen4, imagen5, ext1, ext2, ext3, ext4, ext5, alt1, alt2, alt3, alt4, alt5 } =
    props;
  return (
    <div
      id="carouselExampleAutoplaying"
      className="container-carousel carousel slide d-flex"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        
        <div className="carousel-item active">
          <img
            src={require(`../images/${imagen1}.${ext1}`)}
            className="d-block w-100"
            alt={alt1}
          />
        </div>

        <div className="carousel-item">
          <img
            src={require(`../images/${imagen2}.${ext2}`)}
            className="d-block w-100"
            alt={alt2}
          />
        </div>

        <div className="carousel-item">
          <img
            src={require(`../images/${imagen3}.${ext3}`)}
            className="d-block w-100"
            alt={alt3}
          />
        </div>

        <div className="carousel-item">
          <img
            src={require(`../images/${imagen4}.${ext4}`)}
            className="d-block w-100"
            alt={alt4}
          />
        </div>

        <div className="carousel-item">
          <img
            src={require(`../images/${imagen5}.${ext5}`)}
            className="d-block w-100"
            alt={alt5}
          />
        </div>
        
        <div className="carousel-item">
        <div>
        <VideoAutoPlay 
            video1='primerVideo'
            ext1='mp4'
            type1='video/mp4'
          />
        </div>
        
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrousel;
