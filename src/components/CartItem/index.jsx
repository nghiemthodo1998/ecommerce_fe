import React from "react";
import {
  Button,
  Col,
  FormSelect,
  Image,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { defaultImg } from "../../constants";

const CartItem = ({ item, orderCreated = false }) => {
  return (
    <>
      <ListGroupItem>
        <Row>
          <Col md={2}>
            <Image
              crossOrigin="anonymous"
              fluid
              src={item.image ? item.image.path : defaultImg}
            />
          </Col>
          <Col md={2}>{item.name}</Col>
          <Col md={2}>
            <b>${item.price}</b>
          </Col>
          <Col md={3}>
            <FormSelect
              onChange={() => {}}
              disabled={orderCreated}
              value={item.quantity}
            >
              {[...Array(item.count).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
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
