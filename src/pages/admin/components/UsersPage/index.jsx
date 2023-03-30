import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinks from "../../../../components/admin/AdminLinks";
import { ADMIN_ENDPOINT } from "../../../../constants";

const UserPageLayout = ({ fetchListUser, deleteUser }) => {
  const [listUser, setListUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteUser(userId);
      console.log("data", data);
      if (data === "user removed") {
        setIsLoading(!isLoading);
      }
    }
  };

  useEffect(() => {
    const abort = new AbortController();
    fetchListUser(abort)
      .then((res) => setListUser(res))
      .catch((error) => {
        console.log(
          error.response.data.message
            ? error.response.data.message
            : error.response.data
        );
      });
    return () => abort.abort();
  }, [fetchListUser, isLoading]);

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
            {listUser.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  {user.isAdmin ? (
                    <i className="bi bi-check-lg text-success"></i>
                  ) : (
                    <i className="bi bi-x-lg text-danger"></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`${ADMIN_ENDPOINT.EDIT_USER}/${user._id}`}>
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => handleDelete(user._id)}
                  >
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserPageLayout;
