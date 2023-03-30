import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinks from "../../../../components/admin/AdminLinks";
import { ADMIN_ENDPOINT } from "../../../../constants";

const OrdersPageLayout = ({ fetchListOrder }) => {
  const [listOrder, setListOrder] = useState([]);
  console.log("listOrder", listOrder);
  const [isLoading, setIsLoading] = useState(false);

  //   const handleDelete = async (productId) => {
  //     if (window.confirm("Are you sure?")) {
  //       const data = await deleteProduct(productId);
  //       if (data.message === "Product removed") {
  //         setIsLoading(!isLoading);
  //       }
  //     }
  //   };

  useEffect(() => {
    fetchListOrder()
      .then((res) => setListOrder(res))
      .catch((error) => {
        console.log(
          error.response.data.message
            ? error.response.data.message
            : error.response.data
        );
      });
  }, [fetchListOrder]);
  console.log("listOrder", listOrder);
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinks />
      </Col>
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
            {listOrder.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {order.user !== null ? (
                    <>
                      {order.user.name} {order.user.lastName}
                    </>
                  ) : null}
                </td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.orderTotal.cartSubtotal}</td>

                <td>
                  {order.isDelivered ? (
                    <i className="bi bi-check-lg text-success"></i>
                  ) : (
                    <i className="bi bi-check-lg text-danger"></i>
                  )}
                </td>
                <td>{order.paymentMethod}</td>
                <td>
                  <Link to={`${ADMIN_ENDPOINT.ORDER_DETAILS}/${order._id}`}>
                    go to order
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default OrdersPageLayout;
