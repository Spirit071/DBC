import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { FronteggProvider } from "@frontegg/react";

const env = import.meta.env;

const contextOptions = {
  baseUrl: env.VITE_BASE_URL,
  clientId: env.VITE_CLIENTID,
};

const authOptions = {
  keepSessionAlive: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <FronteggProvider
    contextOptions={contextOptions}
    hostedLoginBox={true}
    authOptions={authOptions}
  >
    <App />
  </FronteggProvider>
);
