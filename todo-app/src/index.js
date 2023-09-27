import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoTable } from "./TodoTable";

const root = ReactDOM.createRoot(document.getElementById("root"));

const todos = [
  { id: 0, content: "hoge"},
  { id: 1, content: "foo"},
  { id: 2, content: "bar"},
  { id: 3, content: "hogehoge\nhogehoge"},
  { id: 4, content: "foo\nbar"},
];

root.render(
  <React.StrictMode>
    <TodoTable localStorageTodos={todos} />
  </React.StrictMode>
);
