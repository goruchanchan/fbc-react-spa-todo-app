import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoTable } from "./TodoTable";
import { LoginProvider } from "./LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsonData = localStorage.getItem("todos");
const todos = jsonData == null ? [] : JSON.parse(jsonData);

root.render(
  <React.StrictMode>
    <LoginProvider>
      <TodoTable localStorageTodos={todos} />
    </LoginProvider>
  </React.StrictMode>,
);
