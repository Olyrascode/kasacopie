import { useState } from 'react';

import data from "../logements.json";

function Carousel() {
    //reset des positions
  const [currentIndex, setCurrentIndex] = useState(0);
    //fleches suivant
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };
    //fleche precedent
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    //création du html dynamique//
    <div className="carousel-container">
      <div className="carousel">
        <button onClick={goToPrev} className="arrow left-arrow">&#9665;</button>
        <img src={data[currentIndex].cover} alt="Cover" className="cover-image" />
        <button onClick={goToNext} className="arrow right-arrow">&#9655;</button>
      </div>
    <div>
    <h1>{data[currentIndex].title}</h1>
    </div>
    </div>
 
  );
}

export default Carousel;