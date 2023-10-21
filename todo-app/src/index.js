import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoTable } from "./TodoTable";
import { AuthProvider } from "./AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <TodoTable />
    </AuthProvider>
  </React.StrictMode>,
);
