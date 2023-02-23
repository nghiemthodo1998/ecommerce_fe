import React, { useEffect } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddToCartMessage from "../../components/AddToCartMessage";
import ImageZoom from "js-image-zoom";
import { defaultImg } from "../../constants";

const options1 = {
  width: 400,
  zoomWidth: 500,
  offset: { vertical: 0, horizontal: 10 },
};

const ProductDetailsLayout = () => {
  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options1);
    new ImageZoom(document.getElementById("second"), options1);
    new ImageZoom(document.getElementById("third"), options1);
    new ImageZoom(document.getElementById("fourth"), options1);
  });

  return (
    <Container>
      <AddToCartMessage />
      <Row className="mt-5">
        <Col md={4}>
          <div style={{ zIndex: 1 }} id="first">
            <Image fluid src={defaultImg} />
          </div>
          <br />
          <div style={{ zIndex: 1 }} id="second">
            <Image fluid src={defaultImg} />
          </div>
          <br />
          <div style={{ zIndex: 1 }} id="third">
            <Image fluid src={defaultImg} />
          </div>
          <br />
          <div style={{ zIndex: 1 }} id="fourth">
            <Image fluid src={defaultImg} />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Product name</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={5} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price: <span className="fw-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>Status: in stock</ListGroup.Item>
                <ListGroup.Item>
                  Price: <span className="fw-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity:
                  <Form.Select size="lg" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Add to cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="mt-5">
                <h5>REVIEWS</h5>
                <ListGroup variant="flush">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <ListGroup.Item key={index}>
                      John Doe <br />
                      <Rating readonly size={20} initialValue={5} />
                      <br />
                      20-09-2001 <br />
                      Web beautiful
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Row>
              <hr />
              send review form
              <Alert variant="danger">Helo</Alert>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Write a review</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Select aria-label="Your rating">
                  <option value="1">(very good)</option>
                  <option value="2">(good)</option>
                  <option value="3">(average)</option>
                  <option value="4">(bad)</option>
                  <option value="5">(awful)</option>
                </Form.Select>
                <Button className="mb-3 mt-3" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsLayout;
