import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinks from "../../../components/admin/AdminLinks";
import { ADMIN_ENDPOINT } from "../../../constants";

const AdminUsersLayout = () => {
  const handleDelete = () => {
    if (window.confirm("Are you sure?")) alert("User deleted!");
  };
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinks />
      </Col>
      <Col md={10}>
        <h1>User List</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi-bi-x-lg text-danger"].map(
              (item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>Mark</td>
                  <td>Twain</td>
                  <td>email@gmail.com</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>
                    <LinkContainer to={ADMIN_ENDPOINT.EDIT_USER}>
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
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminUsersLayout;
