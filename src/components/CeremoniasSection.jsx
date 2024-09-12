import React from 'react';

const CeremoniasSection = () => {
  return (
    <section id="ceremonias" className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center">
            <img src="/images/ceremonias.jpeg" alt="Ceremonias SCRUM"  className="img-fluid section-image" data-aos="fade-right" />
          </div>
          <div className="col-md-6 order-md-2" data-aos="fade-left">
            <h2>Ceremonias SCRUM</h2>
            <p>Las ceremonias en Scrum son los eventos que se realizan durante el proyecto para asegurarse de que se esté avanzando en la dirección correcta. Las principales ceremonias son:</p>
            <ol>
              <li>Sprint Planning: es la reunión en la que se planifica el trabajo que se realizará durante un sprint.</li>
              <li>Daily Scrum: es la reunión diaria en la que el equipo se reúne para discutir el progreso y los obstáculos.</li>
              <li>Sprint Review: es la reunión en la que se revisa el trabajo realizado durante un sprint.</li>
              <li>Sprint Retrospective: es la reunión en la que se analiza el proceso y se busca mejorar.</li>
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

export default CeremoniasSection;