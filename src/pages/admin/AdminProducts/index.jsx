import React from "react";
import { fetchListProduct, deleteProduct } from "../../../utils/fetchProduct";

import ProductsPageLayout from "../components/ProductsPage";

const AdminProductsLayout = () => {
  return (
    <ProductsPageLayout
      fetchListProduct={fetchListProduct}
      deleteProduct={deleteProduct}
    />
  );
};

export default AdminProductsLayout;
