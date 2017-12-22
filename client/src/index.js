import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CheeseList from './components/cheese-list';
import registerServiceWorker from "./registerServiceWorker";

const data = ["Bath Blue", "Barkham Blue", "Buxton Blue"];

ReactDOM.render(<CheeseList cheeses={data}/>, document.getElementById("root"));
registerServiceWorker();
