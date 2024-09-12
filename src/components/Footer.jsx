import React from "react";

const Footer = () => {
  return (
    <footer className="text-white mt-1 pb-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="footer_logo">
              <p>&copy; 2024 Método Scrum</p>
              <a
                href="https://www.scrumstudy.com/"
                className="d-flex align-items-center"
              >
                <img src="/images/logo_SCRUM.png" alt="logo" className="me-2" />
              </a>
              <p>Agregando Valor a tu Empresa.</p>
            </div>

            <ul className="list-unstyled d-flex">
              <li className="me-2">
                <a
                  href="https://www.instagram.com/jose_galvis65/"
                  className="text-icon"
                >
                  <i className="ri-instagram-fill fa-2x"></i>
                </a>
              </li>
              <li className="me-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100046965497737"
                  className="text-icon"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li className="me-2">
                <a href="https://x.com/JosegalvisDip" className="text-icon">
                  <i className="ri-twitter-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jos%C3%A9-luis-galvis-escobar-1344821a2/"
                  className="text-icon"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h4>Mapa</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26274.43805898423!2d-58.5498624!3d-34.5964544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1726140856351!5m2!1ses-419!2sar"
              allowFullScreen="True"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-4">
            <h4>Contacto</h4>
            <div>
              <i className="fa fa-home fs-5"></i>
              <p className="d-inline-block ms-2">Ubicación:</p>
              <p className="d-inline-block ms-1">PBA - Argentina</p>
              <br />
              <i className="fa fa-envelope fs-5"></i>
              <p className="d-inline-block ms-2">Correo Electrónico:</p>
              <p className="d-inline-block ms-1">jolugales@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white fw-bold text-center py-2">
        Copyright © 2024 José Luis Galvis Escobar. Todos los Derechos
        Reservados.
      </div>
    </footer>
  );
};

export default Footer;
