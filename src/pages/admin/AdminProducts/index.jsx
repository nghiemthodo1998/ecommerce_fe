import React, { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinks from "../../../components/admin/AdminLinks";
import ModalConfirm from "../../../components/ModalConfirm";
import { ADMIN_ENDPOINT } from "../../../constants";

const AdminProductsLayout = () => {
  const [showModalConfirm, setShowModalConfirm] = useState(false);

  const handleDelete = () => {
    setShowModalConfirm(true);
  };

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinks />
      </Col>
      <Col md={10}>
        <h1>
          Product list{" "}
          <LinkContainer to={ADMIN_ENDPOINT.CREATE_PRODUCT}>
            <Button variant="primary" size="lg">
              Create new
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Panasonic", price: "$250", category: "TV" },
              { name: "Lenovo", price: "$1000", category: "Laptops" },
              { name: "GTA 10", price: "$345", category: "Games" },
            ].map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer to={ADMIN_ENDPOINT.EDIT_PRODUCT}>
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={handleDelete}
                  >
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
      <ModalConfirm
        title="Are you sure?"
        show={showModalConfirm}
        setShow={setShowModalConfirm}
      />
    </Row>
  );
};

export default AdminProductsLayout;
