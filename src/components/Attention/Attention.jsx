import React, { useState } from 'react';
import funnyVideo from '../../assets/video/video.MP4';

// import BG from "../../assets/img/7.jpg";
import './Attention.css';

export const Attention = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="attention">
      <div className="attention__text_secondary" data-aos="fade-down" data-aos-duration="1000">
        Чего хочет именинник?
      </div>
      <video className="attention__video" src={funnyVideo} controls playsInline />

      <div
        className={`attention__accordion_header ${isAccordionOpen ? 'attention__accordion_header--open' : ''}`}
        onClick={() => setIsAccordionOpen(prev => !prev)}>
        Для тех, у кого не запустилось видео
        <span className="attention__accordion_icon">{isAccordionOpen ? '−' : '+'}</span>
      </div>
      {isAccordionOpen && <div className="attention__accordion_body">Имениннику нужны деньги</div>}
    </div>
  );
};
