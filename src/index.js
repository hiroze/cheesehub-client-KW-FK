import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CheeseList from "./components/cheese-list";
import registerServiceWorker from "./registerServiceWorker";
import store from "./index-store";

const data = ["Bath Blue", "Barkham Blue", "Buxton Blue"];

ReactDOM.render(
  <Provider store={store}>
    <CheeseList cheeses={data} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
