import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoTable } from "./TodoTable";
import { LoginProvider } from "./LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LoginProvider>
      <TodoTable />
    </LoginProvider>
  </React.StrictMode>,
);
