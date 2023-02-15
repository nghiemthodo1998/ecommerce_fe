import { Route, Routes } from "react-router-dom";
import "./App.css";

import RouteWithUserChat from "./routes/RouteWithUserChat";
import ProtectedRoutes from "./routes/ProtectedRoutes";

import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import HomeLayout from "./pages/Home";
import ProductListLayout from "./pages/ProductList";
import ProductDetailsLayout from "./pages/ProductDetails";
import CartLayout from "./pages/Cart";
import RegisterLayout from "./pages/Register";
import LoginLayout from "./pages/Login";
import UserProfileLayout from "./pages/user/UserProfile";
import UserOrdersLayout from "./pages/user/UserOrders";
import UserCartDetailsLayout from "./pages/user/UserCartDetails";
import UserOrderDetailsLayout from "./pages/user/UserOrderDetails";
import AdminUsersLayout from "./pages/admin/AdminUsers";
import AdminEditUserLayout from "./pages/admin/AdminEditUser";
import AdminProductsLayout from "./pages/admin/AdminProducts";
import AdminCreateProductLayout from "./pages/admin/AdminCreateProduct";
import AdminEditProductLayout from "./pages/admin/AdminEditProduct";
import AdminOrdersLayout from "./pages/admin/AdminOrders";
import AdminOrderDetailsLayout from "./pages/admin/AdminOrderDetails";
import AdminChatsLayout from "./pages/admin/AdminChats";
import AdminAnalyticsLayout from "./pages/admin/AdminAnalytics";

function App() {
  //11
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route element={<RouteWithUserChat />}>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/product-list" element={<ProductListLayout />} />
          <Route
            path="/product-details/:id"
            element={<ProductDetailsLayout />}
          />
          <Route path="/cart" element={<CartLayout />} />
          <Route path="/login" element={<LoginLayout />} />
          <Route path="/register" element={<RegisterLayout />} />
          <Route path="*" element={"Page not exists 404"} />
        </Route>

        <Route element={<ProtectedRoutes admin={false} />}>
          <Route path="/user" element={<UserProfileLayout />} />
          <Route path="/user/my-orders" element={<UserOrdersLayout />} />
          <Route
            path="/user/cart-details"
            element={<UserCartDetailsLayout />}
          />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsLayout />}
          />
        </Route>

        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersLayout />} />
          <Route path="/admin/edit-user" element={<AdminEditUserLayout />} />
          <Route path="/admin/products" element={<AdminProductsLayout />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductLayout />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductLayout />}
          />
          <Route path="/admin/orders" element={<AdminOrdersLayout />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsLayout />}
          />
          <Route path="/admin/chats" element={<AdminChatsLayout />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsLayout />} />
        </Route>
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
