import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "font-awesome/css/font-awesome.min.css";
require('./styles/index.dev.scss');


ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)