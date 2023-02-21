import { Formik } from "formik";
import React from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

const UserProfileLayout = () => {
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>User profile</h1>
          <Formik
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
                      required
                      type="text"
                      name="firstName"
                      defaultValue="NghiemTho"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik02">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      defaultValue="Do"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik03">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control disabled value="nghiemthodo1998@gmail.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik03">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your phone number"
                      defaultValue={""}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik03">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your street name and house number"
                      defaultValue={""}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik03">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your country"
                      defaultValue={""}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik03">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Zip code"
                      defaultValue={""}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik03">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your City"
                      defaultValue={""}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik03">
                    <Form.Label>Sate</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Sate"
                      defaultValue={""}
                    />
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

                  <Button variant="primary" type="submit">
                    Update
                  </Button>
                  <Alert show={true} variant="danger">
                    User with that email already exists!
                  </Alert>
                  <Alert show={true} variant="info">
                    User updated
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

export default UserProfileLayout;
