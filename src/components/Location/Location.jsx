import React from 'react';

// import BG from "../../assets/img/7.jpg";
import './Location.css';

export const Location = () => {
  return (
    <div className="location">
      <div className="location__text_secondary" data-aos="fade-down" data-aos-duration="1000">
        Место проведения
      </div>
      <div className="location__text_primary" data-aos="fade-down" data-aos-duration="1000">
        Ресторан "Самовар"
        <div className="location__text_secondary" data-aos="fade-down" data-aos-duration="1000">
          (бывший ресторан "Меритаж")
        </div>
      </div>
      <div className="location__text_primary" data-aos="fade-down" data-aos-duration="1000">
        Адрес: Волгоград, Набережная 62-й Армии, 3
      </div>
      <img
        src="https://i.ibb.co/nMk8sDzq/location.jpg"
        className="location__cover"
        alt="main cover"
        data-aos="fade-down"
        data-aos-duration="1000"
      />
      <div className="location__button" data-aos="fade-down" data-aos-duration="1000">
        <a href="https://yandex.ru/maps/-/CPBeFD~C" target="norefferer">
          <button>Открыть карту</button>
        </a>
      </div>
    </div>
  );
};
