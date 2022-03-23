import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import createAction from "./Redux/action";
import { SET_TOKEN } from "./Redux/constants";
import { mainRouter,  } from "./configs/router";
import { AdminRoute, LoginRoute, PublicRoute } from "./HOCS/route";


import AdminTemplate from "./Templates/AdminTemplate/AdminTemplate";
import Users from "./Pages/Admin/Users/Users.jsx";
import Films from "./Pages/Admin/Films/Films";
import ShowTimeAdmin from "./Pages/Admin/ShowTimeAdmin.jsx/ShowTimeAdmin";
import AddNew from "./Pages/Admin/AddNew/AddNew";
import { useDispatch } from "react-redux";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Header from "./Component/Header";
import Edit from "./Pages/Admin/Edit/Edit";

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(createAction(SET_TOKEN, localStorage.getItem("token")));
    }
  }, []);

  const renderMainRouter = (listRouter) => {
    if (listRouter && listRouter.length > 0) {
      return listRouter.map(({ path, exact, component }) => {
        return (
          <PublicRoute
            key={path}
            path={path}
            exact={exact}
            Component={component}
          />
        );
      });
    }
  };
  
  return (
    <Router>
      <Switch>

        <Route path="/checkout/:maLichChieu" exact>
          <Header />
          <CheckOut />
        </Route>
        <Route path="/dashboard/users" exact>
          <AdminTemplate>
            <Users />
          </AdminTemplate>
        </Route>

        <Route path="/dashboard/addnew" exact>
          <AdminTemplate>
            <AddNew />
          </AdminTemplate>
        </Route>

        <Route path="/dashboard/films" exact>
          <AdminTemplate>
            <Films />
          </AdminTemplate>
        </Route>

        <Route path="/dashboard/edit/:maPhim" exact>
          <AdminTemplate>
            <Edit />
          </AdminTemplate>
        </Route>

        <Route path="/dashboard/showtime/:maPhim/:tenPhim" exact>
          <AdminTemplate>
            <ShowTimeAdmin />
          </AdminTemplate>
        </Route>
        {renderMainRouter(mainRouter)}
      </Switch>
    </Router>
  );
};

export default App;
