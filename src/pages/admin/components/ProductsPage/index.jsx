import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinks from "../../../../components/admin/AdminLinks";
import { ADMIN_ENDPOINT } from "../../../../constants";

const ProductsPageLayout = ({ fetchListProduct, deleteProduct }) => {
  const [listProduct, setListProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteProduct(productId);
      if (data.message === "Product removed") {
        setIsLoading(!isLoading);
      }
    }
  };

  useEffect(() => {
    const abort = new AbortController();
    fetchListProduct(abort)
      .then((res) => setListProduct(res))
      .catch((error) => {
        console.log(
          error.response.data.message
            ? error.response.data.message
            : error.response.data
        );
      });
    return () => abort.abort();
  }, [fetchListProduct, isLoading]);

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinks />
      </Col>
      <Col md={10}>
        <h1>
          Product list{" "}
          <LinkContainer to={ADMIN_ENDPOINT.CREATE_PRODUCT}>
            <Button variant="primary" size="lg">
              Create new
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {listProduct.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer
                    to={`${ADMIN_ENDPOINT.EDIT_PRODUCT}/${item._id}`}
                  >
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => handleDelete(item._id)}
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

export default ProductsPageLayout;
