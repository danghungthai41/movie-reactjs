import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux";
import "./sass/index.scss";
import * as signalR from "@aspnet/signalr";

export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`https://movieapi.cyberlearn.vn/DatVeHub`)
  .configureLogging(signalR.LogLevel.Infomation)
  .build();

connection
  .start()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  })
  .catch((err) => {
    console.log(err);
  });

reportWebVitals();
