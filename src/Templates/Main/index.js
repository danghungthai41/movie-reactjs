import { Redirect, Route, useHistory } from "react-router-dom";
import ScrollToTop from "../../Component/ScrollToTop";
import Layout from "../../HOCS/layout";
import LoginRoute from "../../HOCS/route";
import Home from "../../Pages/Home";

// const LoginRoute = (Component, { ...props }) => {
//   const token = localStorage.getItem("token");
//   return (
//     <Route
//       {...props}
//       render={(propsComponent) => {
//         if (!token) {
//           return (
//             <Layout>
//               <Component {...propsComponent} />
//             </Layout>
//           );
//         }
//       }}
//     />
//   );
// };

const RouteMain = (Component, { ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <Layout>
            <ScrollToTop />
            <Component {...propsComponent} />;
          </Layout>
        );
      }}
    />
  );

  // return (
  //   <Route
  //     {...props}
  //     render={(propsComponent) => {
  //       const token = localStorage.getItem("token");
  //       if (!token) {
  //         return (
  //           <Layout>
  //             <ScrollToTop />
  //             <Component {...propsComponent} />
  //           </Layout>
  //         );
  //       }

  //       return (
  //         <Layout>
  //           <Component {...propsComponent} />
  //         </Layout>
  //       );
  //     }}
  //   />
  // );
};
export default RouteMain;
