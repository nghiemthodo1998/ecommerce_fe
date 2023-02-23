import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { USER_ENDPOINT } from "../../../constants";

const UserOrdersLayout = () => {
  return (
    <Row className="m-5">
      <Col md={12}>
        <h1>My Orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Order details</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi-bi-x-lg text-danger"].map(
              (item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>Mark Twain</td>
                  <td>2023-02-21</td>
                  <td>$124</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>
                    <Link to={USER_ENDPOINT.ORDER_DETAILS}>go to order</Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrdersLayout;
