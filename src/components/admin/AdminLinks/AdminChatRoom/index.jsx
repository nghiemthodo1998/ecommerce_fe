import React, { Fragment, useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";

const AdminChatRoom = () => {
  const [toast1, closeToast1] = useState(true);
  const close1 = () => closeToast1(false);
  const [toast2, closeToast2] = useState(true);
  const close2 = () => closeToast2(false);
  return (
    <>
      <Toast show={toast1} onClose={close1}>
        <Toast.Header>
          <strong className="me-auto">Chat with John Doe</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: "500px", overflow: "auto" }}>
            {Array.from({ length: 30 }).map((_, index) => (
              <Fragment key={index}>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>User wrote:</b> Hello, world! This is a chat message.
                </p>
                <p>
                  <b>User wrote:</b> Hello, world! This is a chat message.
                </p>
              </Fragment>
            ))}
          </div>

          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a message</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
      <Toast show={toast2} onClose={close2}>
        <Toast.Header>
          <strong className="me-auto">Chat with John Doe2</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: "500px", overflow: "auto" }}>
            {Array.from({ length: 30 }).map((_, index) => (
              <Fragment key={index}>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>User wrote:</b> Hello, world! This is a chat message.
                </p>
                <p>
                  <b>User wrote:</b> Hello, world! This is a chat message.
                </p>
              </Fragment>
            ))}
          </div>

          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a message</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default AdminChatRoom;
