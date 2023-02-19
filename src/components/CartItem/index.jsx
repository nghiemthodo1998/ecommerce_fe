import React from "react";
import {
  Button,
  Col,
  FormSelect,
  Image,
  ListGroupItem,
  Row,
} from "react-bootstrap";

const CartItem = () => {
  return (
    <>
      <ListGroupItem>
        <Row>
          <Col md={2}>
            <Image
              crossOrigin="anonymous"
              fluid
              src="https://cdn.tgdd.vn/Files/2019/07/25/1181734/do-sau-truong-anh-la-gi-cach-thiet-lap-de-chup-anh-dep-nhat--1.jpg"
            />
          </Col>
          <Col md={2}>
            Nghiem Tho <br />
            Do
          </Col>
          <Col md={2}>
            <b>$89</b>
          </Col>
          <Col md={3}>
            <FormSelect>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </FormSelect>
          </Col>
          <Col md={3}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.confirm("Are you sure?")}
            >
              <i className="bi bi-trash"></i>
            </Button>
          </Col>
        </Row>
      </ListGroupItem>
    </>
  );
};

export default CartItem;
