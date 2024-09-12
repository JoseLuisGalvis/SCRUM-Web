import React from 'react';

const ArtefactosSection = () => {
  return (
    <section id="artefactos" className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2 d-flex justify-content-center align-items-center">
            <img src="/images/artefactos.jpeg" alt="Artefactos SCRUM" className="img-fluid section-image" data-aos="fade-left" />
          </div>
          <div className="col-md-6 order-md-1" data-aos="fade-right">
            <h2>Artefactos SCRUM</h2>
            <p>Los artefactos en Scrum son los elementos que se utilizan para gestionar y controlar el proyecto. Los principales artefactos son:</p>
            <ol>
              <li>Product Backlog: es la lista de características y funcionalidades que se desean implementar en el producto.</li>
              <li>Sprint Backlog: es la lista de tareas que se deben realizar durante un sprint.</li>
              <li>Incremento: es el conjunto de características y funcionalidades que se han implementado durante un sprint.</li>
            </ol>
            <button className="btn btn-primary mt-3" onClick={() => window.scrollTo(0, 0)}>
              Ir al inicio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtefactosSection;