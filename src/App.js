import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import createAction from "./Redux/action";
import { SET_TOKEN } from "./Redux/constants";
import RouteMain from "./Templates/Main";
import RouteAdmin from "./Templates/Admin";
import { loginRouter, mainRouter, adminRouter } from "./configs/router";
import { AdminRoute, LoginRoute, PublicRoute } from "./HOCS/route";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import InfoUser from "./Pages/InfoUser";
import Loader from "./Component/Loading/index";
import SignUp from "./Pages/SignUp";
import Detail from "./Pages/Detail";
import DashBoard from "./Pages/DashBoard/DashBoard";

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
      <BrowserRouter>
        <Switch>
          {this.renderLoginRouter(loginRouter)}
          {this.renderAdminRouter(adminRouter)}
          {this.renderMainRouter(mainRouter)}
        </Switch>
        {/* <CheckOut/> */}
      </BrowserRouter>
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
