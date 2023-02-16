import React from "react";
import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <Form>
      {[{ color: ["red", "blue", "green"] }, { ram: ["1TB", "2TB"] }].map(
        (item, index) => (
          <div key={index} className="mb-3">
            <Form.Label>{Object.keys(item)}</Form.Label>
            {item[Object.keys(item)].map((i, index) => (
              <Form.Check
                type="checkbox"
                label={i}
                id="disabled-custom-switch"
              />
            ))}
          </div>
        )
      )}
    </Form>
  );
};

export default AttributesFilterComponent;
