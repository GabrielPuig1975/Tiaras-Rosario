import React from "react";
import { useRef } from "react";
import "./estilos/videos.css";

function VideoAutoPlay(props) {
  const { video1, ext1, type1 } = props;
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.play(); // Volver a reproducir el video
    videoRef.current.currentTime = 0; // Reiniciar el video al principio
  };
  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        controls
        muted
        onEnded={handleVideoEnded} // Agregar el evento ended
        className="videos d-flex"
      >
        <source
          src={require(`../images/videos/${video1}.${ext1}`)}
          type={type1}
        />
        Tu navegador no admite el elemento de video.
      </video>
    </div>
  );
}

export default VideoAutoPlay;
