import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminLinks = () => {
  return (
    <Navbar bg="light" variant="light">
      {/* <Nav.Link className="flex-column"> */}
      <div className="flex-column">
        <LinkContainer to="/admin/orders">
          <Nav.Link>Orders</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/products">
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/users">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/chats">
          <Nav.Link>chats</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/analytics">
          <Nav.Link>Analytics</Nav.Link>
        </LinkContainer>
        <Nav.Link>Logout</Nav.Link>
      </div>
      {/* </Nav.Link> */}
    </Navbar>
  );
};

export default AdminLinks;
