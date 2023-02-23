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
import { registerSchema } from "./valitation";
import { ENDPOINT } from "../../constants";

const RegisterLayout = () => {
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Register</h1>
          <Formik
            validationSchema={registerSchema}
            onSubmit={console.log}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
          >
            {({ handleSubmit, handleChange, handleBlur, values, errors }) => {
              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="validationFormik01">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                      placeholder="Enter your first name"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik02">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                      placeholder="Enter your last name"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      placeholder="Enter your email"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik04">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik05">
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your password"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Row className="pb-2">
                    <Col>
                      Do you have an account already?{" "}
                      <Link to={ENDPOINT.LOGIN}>Login</Link>
                    </Col>
                  </Row>
                  <Button type="submit">
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Submit
                  </Button>
                  <Alert show={true} variant="danger">
                    User with that email already exists!
                  </Alert>
                  <Alert show={true} variant="info">
                    User created
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

export default RegisterLayout;
