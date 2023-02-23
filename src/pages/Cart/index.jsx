import React from "react";
import { Alert, Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItem from "../../components/CartItem";
import { USER_ENDPOINT } from "../../constants";

const CartLayout = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <CartItem key={index} /> <br />
              </div>
            ))}
          </ListGroup>
          <Alert variant="info">Your cart is empty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Subtotal (2 Items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to={USER_ENDPOINT.CART_DETAILS}>
                <Button type="button">Proceed To Checkout</Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartLayout;
