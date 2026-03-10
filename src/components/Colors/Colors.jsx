import React from 'react';
import './Colors.css';

// https://i.ibb.co/VcKFCxJq/photo-2025-02-04-11-40-53-2.jpg

export const Colors = () => {
  return (
    <div className="colors">
      <div className="colors__text_secondary" data-aos="fade-down" data-aos-duration="1000">
        Дресс-код{' '}
      </div>
      <div className="colors__text_primary" data-aos="fade-down" data-aos-duration="1000">
        У нас нет строгого дресс-кода, но мы будем рады, если вы придержитесь концепции Black & White
      </div>
      <img
        src="https://i.ibb.co/RGzZMs6V/colors-palitre.jpg"
        className="colors__cover"
        alt="colors cover"
        data-aos="fade-down"
        data-aos-duration="1000"
      />
    </div>
  );
};
