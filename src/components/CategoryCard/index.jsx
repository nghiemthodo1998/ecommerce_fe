import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import { defaultImg, ENDPOINT } from "../../constants";

const CategoryCardComponent = ({ category, index }) => {
  return (
    <Card>
      <Card.Img crossOrigin="anonymous" variant="top" src={defaultImg} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to={ENDPOINT.PRODUCT_LIST}>
          <Button variant="primary">Go to Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
