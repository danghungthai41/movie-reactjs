import React, { Component } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Home from "../Pages/Home";
const Layout = (props) => {

  
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
