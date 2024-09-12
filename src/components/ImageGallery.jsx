import React from 'react';

const ImageGallery = () => {
  const images = [
    { src: '/images/scrumBoard.jpg', alt: 'Scrum Board' },
    { src: '/images/scrumTeam.png', alt: 'Scrum Team' },
    { src: '/images/springPlanning.png', alt: 'Sprint Planning' },
    { src: '/images/dailyStandup.png', alt: 'Daily Standup' },
  ];

  return (
    <div className="row">
      {images.map((image, index) => (
        <div key={index} className="col-12 col-md-6 mb-4">
          <div className="card h-100 card-gallery rounded"> {/* Establece la altura completa de la tarjeta */}
            <img
              src={image.src}
              alt={image.alt}
              className="card-img-top w-100 h-100 card-gallery rounded" /* Clases de Bootstrap para ajustar el tamaño */
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

