import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = /https:\/\/[^/]+/;
const basename = process.env.PUBLIC_URL.replace(domain, "");
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <AuthProvider
        tokenUrl={`${process.env.REACT_APP_USER_SERVICE_API_HOST}/token`}
      >
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
