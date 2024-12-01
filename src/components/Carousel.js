import React, { useState } from 'react';
import './Carousel.css';

const images = [
  '/media/Residencia-estudiantes1.jpg',
  '/media/Residencia-estudiantes2.png',
  '/media/Residencia-estudiantes3.jpg',
  '/media/Residencia-estudiantes5.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === -1
        ? prevIndex === 0
          ? images.length - 1
          : prevIndex - 1
        : prevIndex === images.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <section className="carousel">
      <h2 style={{ textAlign: 'center' }}>Imágenes de referencia</h2>
      <div className="carousel-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            alt={`Residencia ${index + 1}`}
          />
        ))}
        <button className="prev" onClick={() => changeSlide(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => changeSlide(1)}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
