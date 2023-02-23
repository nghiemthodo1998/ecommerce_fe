import React from "react";
import { Col, Row } from "react-bootstrap";
import AdminLinks from "../../../components/admin/AdminLinks";
import AdminChatRoom from "../../../components/admin/AdminLinks/AdminChatRoom";

const AdminChatsLayout = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinks />
      </Col>
      <Col md={8}>
        <AdminChatRoom />
      </Col>
    </Row>
  );
};

export default AdminChatsLayout;
