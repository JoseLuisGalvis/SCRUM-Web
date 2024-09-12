import React from 'react';
import ContactForm from './ContactForm';
import ImageGallery from './ImageGallery';

const ContactGallerySection = () => {
  return (
    <section id="contact-gallery" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contáctanos</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Contáctanos</h3>
            <ContactForm />
          </div>
          <div className="col-md-6">
            <h3>Galería de Imágenes</h3>
            <ImageGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactGallerySection;