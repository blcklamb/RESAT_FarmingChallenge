import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { imageData } from "../assets/ImageData";

const CarouselComponent = () => {
  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));

  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="carousel-wrapper">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
      >
        {renderSlides}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
