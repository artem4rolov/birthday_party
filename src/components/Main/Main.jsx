import React from 'react';
import './Main.css';

export const Main = () => {
  return (
    <section className="main" aria-label="Приглашение на юбилей 30 лет">
      <div className="main_hero">
        <div className="main_hero_numbers">
          <div
            className="main_hero_digit_3"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-out">
            3
          </div>
          <div
            className="main_hero_digit_0"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
            data-aos-easing="ease-out">
            <img src={'https://i.ibb.co/QjXk5hQR/main-photo.jpg'} alt="" className="main_hero_photo" />
          </div>
        </div>
        <div className="main_hero_title" data-aos="fade" data-aos-duration="1200" data-aos-delay="1000">
          BIRTHDAY PARTY
        </div>
        <div className="main_hero_subtitle" data-aos="fade" data-aos-duration="1200" data-aos-delay="1000">
          R.I.P. twenties
        </div>
      </div>
    </section>
  );
};
