import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App3";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("app"));
registerServiceWorker();
