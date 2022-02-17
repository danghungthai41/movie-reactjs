import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux";
import "./sass/index.scss";
import * as signalR from "@aspnet/signalr";
import 'antd/dist/antd.css';

//   .start()
//   .then(() => {

//   })
//   .catch((err) => {
//     console.log(err);
//   });
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
