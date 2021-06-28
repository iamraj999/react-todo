import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./store/reducer";

import Todos from "./components/Todos";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById("root")
);
