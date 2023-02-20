import { Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { loginSchema } from "./valitation";

const LoginLayout = () => {
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Login</h1>
          <Formik
            validationSchema={loginSchema}
            onSubmit={console.log}
            initialValues={{
              email: "",
              password: "",
            }}
          >
            {({ handleSubmit, handleChange, handleBlur, values, errors }) => {
              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="validationFormik01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      // isInvalid={!!errors.email}
                      placeholder="Enter your email"
                    />
                    {/* <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback> */}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik04">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      // isInvalid={!!errors.password}
                    />
                    {/* <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback> */}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      name="doNotLogout"
                      type="checkbox"
                      label="Do not logout"
                    />
                  </Form.Group>
                  <Row className="pb-2">
                    <Col>
                      Don't you have an account?{" "}
                      <Link to="/register">Register</Link>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit">
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Login
                  </Button>
                  <Alert show={true} variant="danger">
                    Wrongg credentials
                  </Alert>
                </Form>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginLayout;
