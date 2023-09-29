import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoTable } from "./TodoTable";

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsonData = localStorage.getItem("todos");
const todos = jsonData == null ? [] : JSON.parse(jsonData);

root.render(
  <React.StrictMode>
    <TodoTable localStorageTodos={todos} />
  </React.StrictMode>
);
