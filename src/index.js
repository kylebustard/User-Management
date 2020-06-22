import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/home/app/App";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

axios.interceptors.request.use(
  (requestConfig) => {
    console.log(requestConfig);
    return requestConfig;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (responseConfig) => {
    console.log(responseConfig);
    return responseConfig;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
