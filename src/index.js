import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./Redux/configureStore";
import { Provide as ReduxProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import App from "./Container/App";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
