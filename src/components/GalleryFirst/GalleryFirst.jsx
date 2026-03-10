import React from 'react';
import './GalleryFirst.css';

export const GalleryFirst = () => {
  return (
    <div className="gallery">
      <div className="gallery__sub" data-aos="fade-down" data-aos-duration="1000">
        <img
          src="https://i.ibb.co/tpWFX58d/first-image-gallery.jpg"
          alt="second phot"
          className="gallery__photo-sub"
        />
        <img
          src="https://i.ibb.co/1tgfTymY/second-image-gallery.jpg"
          alt="third phot"
          className="gallery__photo-sub"
        />
      </div>
      <div className="gallery__main" data-aos="fade-down" data-aos-duration="1000">
        <img
          src="https://i.ibb.co/k29G1G6p/last-image-gallery.jpg"
          alt="first phot"
          className="gallery__photo-main"
        />
      </div>
    </div>
  );
};
