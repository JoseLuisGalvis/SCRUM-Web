// Componente Section modificado para aceptar un prop 'title'
import React from "react";

const Section = ({ title, text, image, className, align, id, hideButton }) => {
  return (
    <div className="section" id={id}>
      <div className="row">
        <div
          className={`col-12 col-md-6 ${align === "right" ? "order-md-2" : ""}`}
        >
          <div className="section-image">
            <img src={image} alt={title} className={`img-fluid ${className}`} />
          </div>
        </div>
        <div
          className={`col-12 col-md-6 ${align === "right" ? "order-md-1" : ""}`}
        >
          <div className="section-content">
            <h2>{title}</h2>
            {text}
            {!hideButton && (
              <button
                className="btn btn-primary mt-3"
                onClick={() => (window.location.href = "#home-nav")}
              >
                Ir al inicio
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
