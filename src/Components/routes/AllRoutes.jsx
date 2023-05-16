import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import { LandingPage } from "../LandingPage/LandingPage.jsx";
import Cart from '../../Pages/Cart/Cart';
import { SingleProduct } from '../../Pages/SingleProduct/SingleProduct';
import PrivateRoute from "../../Pages/PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/allproducts/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
