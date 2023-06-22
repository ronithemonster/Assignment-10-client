import React from "react";
import Header from "../Header/Header";
import Footer from "../Header/Footer/Footer";
// import Home from "../Pages/Home/Home";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />

      <Outlet> </Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
