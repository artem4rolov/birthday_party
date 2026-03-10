import React from 'react';
import './InfoBlock.css';

export const InfoBlock = () => {
  return (
    <div className="infoblock">
      <div className="infoblock__text_primary" data-aos="fade-down" data-aos-duration="1000">
        20.06.2026 <br />
        Это приглашение <br /> на мою вечеринку!
      </div>
      <div className="infoblock__text_secondary" data-aos="fade-down" data-aos-duration="1000">
        Давайте вместе похороним мои двадцать
      </div>
    </div>
  );
};
