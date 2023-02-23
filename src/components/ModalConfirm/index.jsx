import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalConfirm = ({ title, show, setShow }) => {
  const handleClose = () => setShow(false);
  const handleOK = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>{title}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleOK}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirm;
