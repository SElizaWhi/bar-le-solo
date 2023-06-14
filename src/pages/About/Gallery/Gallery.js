import React from 'react'
import './gallery.css'
import food1 from '../../../assets/food1.jpg'
import food2 from "../../../assets/food2.jpg";
import food3 from "../../../assets/food3.jpg";
import food4 from "../../../assets/food4.jpg";
import food5 from "../../../assets/food5.jpg";
import food6 from "../../../assets/food6.jpg";


const Gallery = () => {
  return (
    <div className="gallery">
      <figure className="gallery_item gallery_item-1">
        <img src={food1} alt="plat" className="gallery_img" />
      </figure>

      <figure className="gallery_item gallery_item-2">
        <img src={food2} alt="plat" className="gallery_img" />
      </figure>

      <figure className="gallery_item gallery_item-3">
        <img src={food3} alt="plat" className="gallery_img" />
      </figure>

      <figure className="gallery_item gallery_item-4">
        <img src={food4} alt="plat" className="gallery_img" />
      </figure>

      <figure className="gallery_item gallery_item-5">
        <img src={food5} alt="plat" className="gallery_img" />
      </figure>

      <figure className="gallery_item gallery_item-6">
        <img src={food6} alt="plat" className="gallery_img" />
      </figure>
    </div>
  );
}

export default Gallery
