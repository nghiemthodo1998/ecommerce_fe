import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import SortOptionsComponent from "../../components/SortOptions";
import PriceFilterComponent from "../../components/filterProduct/PriceFilter";
import RatingFilterComponent from "../../components/filterProduct/RatingFilter";
import CategoryFilterComponent from "../../components/filterProduct/CategoryFilter";
import AttributesFilterComponent from "../../components/filterProduct/AttributesFilter";
import ProductForListComponent from "../../components/ProductForList";
import PaginationComponent from "../../components/Pagination";
import { defaultImg } from "../../constants";

const ProductListLayout = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="mb-3 mt-3">
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              FILTER: <br />
              <PriceFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary">Primary</Button>
              <Button variant="danger">Reset filters</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({ length: 5 }).map((_, index) => (
            <ProductForListComponent
              key={index}
              images={[defaultImg]} //them link anh vao cac phan tu cua array
            />
          ))}
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListLayout;
