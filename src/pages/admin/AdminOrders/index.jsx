import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminOrdersLayout = () => {
  return (
    <Row className="m-5">
      <Col md={2}>admin links</Col>
      <Col md={10}>
        <h1>Orders</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Payment Method</th>
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
                  <td>PayPal</td>
                  <td>
                    <Link to="/admin/order-details">go to order</Link>
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

export default AdminOrdersLayout;
