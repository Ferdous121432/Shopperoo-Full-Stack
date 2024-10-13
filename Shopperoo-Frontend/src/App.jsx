/* eslint-disable */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import HomePage from "./pages/Homepage";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import CheckoutPage from "./pages/CheckoutPage";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import RestrictedPage from "./pages/RestrictedPage";
import About from "./pages/About";

// const Homepage = lazy(() => import("./pages/Homepage"));
// const Product = lazy(() => import("./pages/Product"));
// const Pricing = lazy(() => import("./pages/Pricing"));
// const Login = lazy(() => import("./pages/Login"));
// const AppLayout = lazy(() => import("./pages/AppLayout"));
// const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// dist/assets/index-59fcab9b.css   30.56 kB │ gzip:   5.14 kB
// dist/assets/index-f7c12d89.js   572.44 kB │ gzip: 151.29 kB

import { useAuth } from "./context/AuthProvider";

function App() {
  const { state } = useAuth();
  console.log(state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="product/f" element={<SingleProductPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout/:id" element={<CheckoutPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="restricted" element={<RestrictedPage />} />
        <Route path="/product/:product_id" element={<SingleProductPage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
