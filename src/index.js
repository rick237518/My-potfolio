import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Route} from 'react-router-dom'
import App from "./App";
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './reducers/allreducers'
const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Route>
    <Provider store={store}>
    <App />
    </Provider>
    </Route>
  </React.StrictMode>,
  rootElement
);
