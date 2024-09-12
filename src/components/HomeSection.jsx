import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center">
            <img src="/images/roles.jpeg" alt="Roles SCRUM" className="img-fluid section-image" data-aos="fade-right" />
          </div>
          <div className="col-md-6 order-md-2" data-aos="fade-left">
            <h2>Roles SCRUM</h2>
            <p>Los Roles en Scrum son responsabilidades definidas dentro del equipo que trabajan juntos para entregar un Producto.</p>
            <p>Los tres roles principales son:</p>
            <ol>
              <li>Product Owner</li>
              <li>Scrum Master</li>
              <li>Equipo de Desarrollo</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;