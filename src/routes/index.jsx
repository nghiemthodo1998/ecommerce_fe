import React from "react";
import { Route, Routes } from "react-router-dom";
import RouteWithUserChat from "./RouteWithUserChat";
import HomeLayout from "../pages/Home";
import ProductListLayout from "../pages/ProductList";
import ProductDetailsLayout from "../pages/ProductDetails";
import CartLayout from "../pages/Cart";
import LoginLayout from "../pages/Login";
import RegisterLayout from "../pages/Register";
import UserProfileLayout from "../pages/user/UserProfile";
import UserOrdersLayout from "../pages/user/UserOrders";
import UserCartDetailsLayout from "../pages/user/UserCartDetails";
import UserOrderDetailsLayout from "../pages/user/UserOrderDetails";
import AdminUsersLayout from "../pages/admin/AdminUsers";
import AdminEditUserLayout from "../pages/admin/AdminEditUser";
import AdminProductsLayout from "../pages/admin/AdminProducts";
import AdminCreateProductLayout from "../pages/admin/AdminCreateProduct";
import AdminEditProductLayout from "../pages/admin/AdminEditProduct";
import AdminOrdersLayout from "../pages/admin/AdminOrders";
import AdminOrderDetailsLayout from "../pages/admin/AdminOrderDetails";
import AdminChatsLayout from "../pages/admin/AdminChats";
import AdminAnalyticsLayout from "../pages/admin/AdminAnalytics";
import ProtectedRoutes from "./ProtectedRoutes";
import { ADMIN_ENDPOINT, ENDPOINT, USER_ENDPOINT } from "../constants";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<RouteWithUserChat />}>
        <Route path={ENDPOINT.HOME} element={<HomeLayout />} />
        <Route path={ENDPOINT.PRODUCT_LIST} element={<ProductListLayout />} />
        <Route
          path={ENDPOINT.PRODUCT_DETAILS}
          element={<ProductDetailsLayout />}
        />
        <Route path={ENDPOINT.CART} element={<CartLayout />} />
        <Route path={ENDPOINT.LOGIN} element={<LoginLayout />} />
        <Route path={ENDPOINT.REGISTER} element={<RegisterLayout />} />
        <Route path={ENDPOINT.ERROR} element={"Page not exists 404"} />
      </Route>

      {/* user route */}
      <Route element={<ProtectedRoutes admin={false} />}>
        <Route path={USER_ENDPOINT.USER} element={<UserProfileLayout />} />
        <Route path={USER_ENDPOINT.ORDERS} element={<UserOrdersLayout />} />
        <Route
          path={USER_ENDPOINT.CART_DETAILS}
          element={<UserCartDetailsLayout />}
        />
        <Route
          path={USER_ENDPOINT.ORDER_DETAILS}
          element={<UserOrderDetailsLayout />}
        />
      </Route>

      {/* admin route */}
      <Route element={<ProtectedRoutes admin={true} />}>
        <Route path={ADMIN_ENDPOINT.USERS} element={<AdminUsersLayout />} />
        <Route
          path={ADMIN_ENDPOINT.EDIT_USER}
          element={<AdminEditUserLayout />}
        />
        <Route
          path={ADMIN_ENDPOINT.PRODUCTS}
          element={<AdminProductsLayout />}
        />
        <Route
          path={ADMIN_ENDPOINT.CREATE_PRODUCT}
          element={<AdminCreateProductLayout />}
        />
        <Route
          path={ADMIN_ENDPOINT.EDIT_PRODUCT}
          element={<AdminEditProductLayout />}
        />
        <Route path={ADMIN_ENDPOINT.ORDERS} element={<AdminOrdersLayout />} />
        <Route
          path={`${ADMIN_ENDPOINT.ORDER_DETAILS}/:id`}
          element={<AdminOrderDetailsLayout />}
        />
        <Route path={ADMIN_ENDPOINT.CHATS} element={<AdminChatsLayout />} />
        <Route
          path={ADMIN_ENDPOINT.ANALYTICS}
          element={<AdminAnalyticsLayout />}
        />
      </Route>
    </Routes>
  );
};

export default MainRoute;
