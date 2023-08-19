import React from "react";
import "./estilos/social.css";

function Social() {
  return (
    <div className="social d-flex">

      <div className="instagram">
        <a
          href="https://www.instagram.com/tiaras.joyas.rosario/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="instagram-ico"
            data-name="Layer 1"
          >
            <path
              d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43 4.94 4.94 0 0 0-1.16-1.77 4.7 4.7 0 0 0-1.77-1.15 7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47 4.78 4.78 0 0 0-1.77 1.15 4.7 4.7 0 0 0-1.15 1.77 7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43 4.7 4.7 0 0 0 1.15 1.77 4.78 4.78 0 0 0 1.77 1.15 7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47 4.7 4.7 0 0 0 1.77-1.15 4.85 4.85 0 0 0 1.16-1.77 7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86 3.06 3.06 0 0 1-.75 1.15 3.19 3.19 0 0 1-1.15.75 5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3 3.27 3.27 0 0 1-1.1-.75 3 3 0 0 1-.74-1.15 5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34 3.06 3.06 0 0 1 1.19.8 3.06 3.06 0 0 1 .75 1.1 5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12 5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12 3.33 3.33 0 0 1 12 15.33Z"
              style={{
                fill: "none",
                stroke: "#FFF",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1,
              }}
            />
          </svg>
        </a>
      </div>

      <div className="whatsapp">
        <a href=" https://wa.me/+5492214357711" target="_blank"
          rel="noopener noreferrer">
          <svg
            width={34}
            height={34}
            viewBox="0 0 24 24"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
            className="icon line-color"
          >
            <path
              d="m8.68 10.94 1.53-1.54-.4-1.4H8s-.41 2.54 2.52 5.46S16 16 16 16v-1.81l-1.4-.4-1.54 1.53"
              style={{
                fill: "none",
                stroke: "#FFF",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            />
            <path
              d="M20.88 13.46a9 9 0 0 1-13 6.54L3 21l1-4.88a9 9 0 1 1 16.88-2.66Z"
              style={{
                fill: "none",
                stroke: "#FFF",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            />
          </svg>
        </a>
      </div>
      
      <div className="facebook">
        <a href="https://www.facebook.com/rosariomartinorodriguez/" target="_blank"
          rel="noopener noreferrer">
          <svg
            width={34}
            height={34}
            viewBox="0 0 24 24"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line"
          >
            <path
              d="M14 7h4V3h-4a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1Z"
              style={{
                fill: "#FFF",
                strokeWidth: 1,
              }}
            />
            <path
              d="M14 7h4V3h-4a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1Z"
              style={{
                fill: "none",
                stroke: "#FFF",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
              }}
            />
          </svg>
        </a>
      </div>

    </div>
  );
}

export default Social;
