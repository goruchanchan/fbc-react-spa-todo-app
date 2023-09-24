import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoTable } from "./TodoTable";

const root = ReactDOM.createRoot(document.getElementById("root"));

const todos = [
  { id: 1, content: "hoge", editing: false },
  { id: 2, content: "foo", editing: true },
  { id: 3, content: "bar", editing: false },
  { id: 4, content: "hogehoge\nhogehoge", editing: false },
  { id: 5, content: "foo\nbar", editing: false },
];

root.render(
  <React.StrictMode>
    <TodoTable todos={todos} />
  </React.StrictMode>
);
