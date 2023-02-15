import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsLayout = () => {
  const { id } = useParams();
  return <div>ProductDetailsLayout {id}</div>;
};

export default ProductDetailsLayout;
