import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import createAction from "./Redux/action";
import { SET_TOKEN } from "./Redux/constants";
import RouteMain from "./Templates/Main";
import RouteAdmin from "./Templates/AdminTemplate/AdminTemplate";
import { loginRouter, mainRouter, adminRouter } from "./configs/router";
import { AdminRoute, LoginRoute, PublicRoute } from "./HOCS/route";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Loader from "./Component/Loading/index";
import SignUp from "./Pages/SignUp";
import Detail from "./Pages/Detail";
import DashBoard from "./Pages/Admin/DashBoard/DashBoard";
import Layout from "./HOCS/layout";
import AdminTemplate from "./Templates/AdminTemplate/AdminTemplate";
import Users from "./Pages/Admin/Users/Users";
import Films from "./Pages/Admin/Films/Films";
import ShowTimeAdmin from "./Pages/Admin/ShowTimeAdmin.jsx/ShowTimeAdmin";
import AddNew from "./Pages/Admin/AddNew/AddNew";
import UserInfo from "./Pages/UserInfo/UserInfo";

class App extends Component {
  renderMainRouter = (listRouter) => {
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
  renderAdminRouter = (listRouter) => {
    if (listRouter && listRouter.length > 0) {
      return listRouter.map(({ exact, component, path }) => (
        <AdminRoute
          key={path}
          path={path}
          exact={exact}
          Component={component}
          redirectRoute="/"
        />
      ));
    }
  };

  renderLoginRouter = (listRouter) => {
    if (listRouter && listRouter.length > 0) {
      return listRouter.map(({ exact, component, path }) => (
        <LoginRoute
          key={path}
          path={path}
          exact={exact}
          Component={component}
          redirectRoute="/signin"
        />
      ));
    }
  };

  render() {
    return (
      <Router>
        <Switch>
          {this.renderLoginRouter(loginRouter)}
        
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

          <Route path="/dashboard/showtimeadmin" exact>
            <AdminTemplate>
              <ShowTimeAdmin />
            </AdminTemplate>
          </Route>

          <Route path="/dashboard" exact>
            <AdminTemplate>
              <DashBoard />
            </AdminTemplate>
          </Route>
          <Layout>{this.renderMainRouter(mainRouter)}</Layout>
        </Switch>
        {/* <CheckOut/> */}
      </Router>
    );
  }
  componentDidMount() {
    this.getToken();
  }
  getToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.dispatch(createAction(SET_TOKEN, token));
    }
  };
}
export default connect()(App);
