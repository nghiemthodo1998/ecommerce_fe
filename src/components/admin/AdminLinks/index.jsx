import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ADMIN_ENDPOINT } from "../../../constants";

const AdminLinks = () => {
  return (
    <Navbar bg="light" variant="light">
      {/* <Nav.Link className="flex-column"> */}
      <div className="flex-column">
        <LinkContainer to={ADMIN_ENDPOINT.ORDERS}>
          <Nav.Link>Orders</Nav.Link>
        </LinkContainer>
        <LinkContainer to={ADMIN_ENDPOINT.PRODUCTS}>
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>
        <LinkContainer to={ADMIN_ENDPOINT.USERS}>
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>
        <LinkContainer to={ADMIN_ENDPOINT.CHATS}>
          <Nav.Link>chats</Nav.Link>
        </LinkContainer>
        <LinkContainer to={ADMIN_ENDPOINT.ANALYTICS}>
          <Nav.Link>Analytics</Nav.Link>
        </LinkContainer>
        <Nav.Link>Logout</Nav.Link>
      </div>
      {/* </Nav.Link> */}
    </Navbar>
  );
};

export default AdminLinks;
