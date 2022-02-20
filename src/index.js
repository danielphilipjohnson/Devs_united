import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DocsProvider from "./Context/DocsContext";
import UserProvider from "./Context/UserContext";
import ColorProvider from "./Context/ColorContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <UserProvider>
        <DocsProvider>
          <App />
        </DocsProvider>
      </UserProvider>
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
