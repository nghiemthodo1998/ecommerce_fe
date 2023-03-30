import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import CartItem from "../../../../components/CartItem";

const OrderDetailPageLayout = ({ fetchOrder, markAsDelivered }) => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [dataOrder, setDataOrder] = useState({
    paymentMethod: "",
    isPaid: false,
    paidAt: "",
    isDelivered: false,
    deliveredAt: "",
    cartSubtotal: 0,
    buttonDisabled: false,
    orderButtonMessage: "Mark as delivered",
  });
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchOrder(id)
      .then((order) => {
        console.log(order);
        setUserInfo(order.user);
        setDataOrder((prev) => ({
          ...prev,
          paymentMethod: order.paymentMethod,
          isPaid: order.isPaid | false,
          paidAt: order.paidAt,
          isDelivered: order.isDelivered | false,
          deliveredAt: order.deliveredAt,
          cartSubtotal: order.orderTotal.cartSubtotal | 0,
          buttonDisabled: order.isDelivered ? true : false,
          orderButtonMessage: order.isDelivered
            ? "Order is finished"
            : "Mark as delivered",
        }));
        setCartItems(order.cartItems);
      })
      .catch((error) =>
        console.log(
          error.response.message
            ? error.response.data.message
            : error.response.data
        )
      );
  }, [fetchOrder, id, dataOrder.isDelivered]);

  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Order Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: {userInfo.name} {userInfo.lastName}
              <br />
              <b>Address</b>: {userInfo.address} <br />
              <b>City</b>: {userInfo.city} <br />
              <b>State</b>: {userInfo.state}
              <br />
              <b>Zipcode</b>: {userInfo.zipCode}
              <br />
              <b>Phone</b>: {userInfo.phoneNumber}
            </Col>
            <Col md={6}>
              <h2>Payment method</h2>
              <Form.Select value={dataOrder.paymentMethod} disabled={true}>
                <option value={"pp"}>PayPal</option>
                <option value={"cod"}>
                  Cash On Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert
                  className="mt-3"
                  variant={dataOrder.isDelivered ? "success" : "danger"}
                >
                  {dataOrder.isDelivered ? (
                    <>Delivered at {dataOrder.deliveredAt}</>
                  ) : (
                    <>Not delivered</>
                  )}
                </Alert>
              </Col>
              <Col>
                <Alert
                  className="mt-3"
                  variant={dataOrder.isPaid ? "success" : "danger"}
                >
                  {dataOrder.paidAt ? (
                    <>Paid on {dataOrder.paidAt}</>
                  ) : (
                    <>Not paid yet</>
                  )}
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup>
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} orderCreated={true} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price (after tax): <span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shopping: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total price:{" "}
              <span className="fw-bold">${dataOrder.cartSubtotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button
                  size="lg"
                  disabled={dataOrder.buttonDisabled}
                  variant="danger"
                  type="button"
                  onClick={() =>
                    markAsDelivered(id).then((res) => {
                      if (res) {
                        setDataOrder((prev) => ({
                          ...prev,
                          isDelivered: true,
                        }));
                      }
                    })
                  }
                >
                  {dataOrder.orderButtonMessage}
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetailPageLayout;
