import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";
import { carouselImg } from "../../constants";

const CarouselComponent = () => {
  return (
    <Carousel>
      {carouselImg.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            style={{ height: "300px", objectFit: "cover" }}
            src={item.img}
            alt={item.alt}
          />
          <Carousel.Caption>
            <LinkContainer style={{ cursor: "pointer" }} to="/product-details">
              <h3>{item.title}</h3>
            </LinkContainer>
            <p>{item.content}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
