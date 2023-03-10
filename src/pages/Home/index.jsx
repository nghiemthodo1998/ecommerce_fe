import React from "react";
import { Container, Row } from "react-bootstrap";
import CarouselComponent from "../../components/Carousel";
import CategoryCardComponent from "../../components/CategoryCard";

const HomeLayout = () => {
  const categories = ["Book", "Laptop", "Camera", "Mobile"];
  return (
    <>
      <CarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, index) => (
            <CategoryCardComponent
              key={index}
              category={category}
              index={index}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeLayout;
