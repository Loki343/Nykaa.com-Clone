import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./AllProducts/AllProducts";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { LandingPage } from "../Components/LandingPage/LandingPage.jsx";
import Cart from './Cart/Cart';
import { SingleProduct } from './SingleProduct/SingleProduct';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/allproducts/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
