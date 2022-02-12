import React from "react";
import { Redirect, Route } from "react-router-dom";
import Layout from "./layout";
import ScrollToTop from "../Component/ScrollToTop";
import Swal from "sweetalert2";

const renderRoute = (condition, message) => {
  return ({ Component, redirectRoute, ...props }) => {
    return (
      <Route
        {...props}
        render={(propsComponent) => {
          if (condition) {
            
            return (
              <Layout>
                <ScrollToTop/>
                <Component {...propsComponent} />
              </Layout>
            );
          }
          Swal.fire({
            title: message,
            icon: "warning",
          });
          // alert(message);
          return <Redirect to={redirectRoute} />;
        }}
      />
    );
  };
};

export const LoginRoute = renderRoute(
  localStorage.getItem("token"),
  "Bạn vui lòng đăng nhập"
);
export const AdminRoute = renderRoute(
  localStorage.getItem("userLogin") === "QuanTri",
  "Bạn không có quyền truy cập"
);

export const PublicRoute = renderRoute(true);
