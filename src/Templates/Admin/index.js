import { Redirect, Route } from "react-router-dom";
import ScrollToTop from "../../Component/ScrollToTop";
import Layout from "../../HOCS/layout";

const RouteAdmin = ({ Component, ...props }) => {
  // const maLoaiNguoiDung = localStorage.getItem("userLogin");
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        // if (maLoaiNguoiDung === "QuanTri") {
        return (
          <Layout>
            <ScrollToTop />
            <Component {...propsComponent} />
          </Layout>
        );
        // }
        // return <Redirect to="/" />;
      }}
    />
  );
};
export default RouteAdmin;
