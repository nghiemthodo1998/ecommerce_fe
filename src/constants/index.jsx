export const defaultImg =
  "https://cdn.tgdd.vn/Files/2019/07/25/1181734/do-sau-truong-anh-la-gi-cach-thiet-lap-de-chup-anh-dep-nhat--1.jpg";

export const carouselImg = [
  {
    img: "https://img5.thuthuatphanmem.vn/uploads/2022/01/10/anh-bia-zalo-canh-dep-thien-nhien_024637306.jpg",
    alt: "First slide",
    title: "First slide label",
    content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    img: "https://img5.thuthuatphanmem.vn/uploads/2022/01/10/anh-bia-phong-canh-thien-nhien-tuyet-dep_024637082.jpg",
    alt: "Second slide",
    title: "Second slide label",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "https://img5.thuthuatphanmem.vn/uploads/2022/01/10/anh-bia-phong-canh-thien-nhien-cho-zalo_024636795.jpg",
    alt: "Third slide",
    title: "Third slide label",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

export const ENDPOINT = {
  HOME: "/",
  PRODUCT_LIST: "/product-list",
  PRODUCT_DETAILS: "/product-details",
  CART: "/cart",
  LOGIN: "/login",
  REGISTER: "/register",
  ERROR: "*",
};

export const USER_ENDPOINT = {
  USER: "/user",
  ORDERS: "/user/my-orders",
  CART_DETAILS: "/user/cart-details",
  ORDER_DETAILS: "/user/order-details",
};

export const ADMIN_ENDPOINT = {
  USERS: "/admin/users",
  EDIT_USER: "/admin/edit-user",
  PRODUCTS: "/admin/products",
  CREATE_PRODUCT: "/admin/create-new-product",
  EDIT_PRODUCT: "/admin/edit-product",
  ORDERS: "/admin/orders",
  ORDER_DETAILS: "/admin/order-details",
  CHATS: "/admin/chats",
  ANALYTICS: "/admin/analytics",
};
