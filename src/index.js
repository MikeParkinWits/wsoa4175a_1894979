import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Adding React Routing
import { BrowserRouter } from "react-router-dom";

//Adding React-snap
import { hydrate, render } from "react-dom";

//Context Imports
import { GlobalContextProvider } from "./context/GlobalContext";

//Using React-Snap package to allow meta tags dynamically generated with React-Helmet package to be rendered client side --> https://www.npmjs.com/package/react-snap
const rootElement = document.getElementById("root");

{
  /* Entire website wrapped in GlobalContextProvider to allow access to global state variables in any component without excessive prop drilling - done in Index.js to allow App.js to have access to global states */
}

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </BrowserRouter>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
