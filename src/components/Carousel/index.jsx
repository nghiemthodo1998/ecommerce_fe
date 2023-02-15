import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          // crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="https://img5.thuthuatphanmem.vn/uploads/2022/01/10/anh-bia-zalo-canh-dep-thien-nhien_024637306.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={{ cursor: "pointer" }} to="/product-details">
            <h3>First slide label</h3>
          </LinkContainer>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="https://img5.thuthuatphanmem.vn/uploads/2022/01/10/anh-bia-phong-canh-thien-nhien-tuyet-dep_024637082.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={{ cursor: "pointer" }} to="/product-details">
            <h3>Second slide label</h3>
          </LinkContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="https://img5.thuthuatphanmem.vn/uploads/2022/01/10/anh-bia-phong-canh-thien-nhien-cho-zalo_024636795.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={{ cursor: "pointer" }} to="/product-details">
            <h3>Third slide label</h3>
          </LinkContainer>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
