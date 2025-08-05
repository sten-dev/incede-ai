import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { customersList } from "./customer-data";
import "../../styles/customer-carousel.scss";

const CustomerCarousel = () => {
  const [chunkSize, setChunkSize] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setChunkSize(2);
      } else if (window.innerWidth <= 768) {
        setChunkSize(3);
      } else {
        setChunkSize(5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkedCustomers = [];
  for (let i = 0; i < customersList.length; i += chunkSize) {
    chunkedCustomers.push(customersList.slice(i, i + chunkSize));
  }

  return (
    <div className="customer-carousel-container">
      <div className="customer-carousel-heading">
        TRUSTED BY BUSINESSES BIG AND SMALL, EVERYWHERE
      </div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={5000}
        showIndicators={false}
      >
        {chunkedCustomers.map((chunk, index) => (
          <div key={index} className="carousel-slide">
            {chunk.map((customer, i) => (
              <div key={i} className="customer-logo">
                <img src={customer} alt={`customer-logo-${i}`} />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerCarousel;
