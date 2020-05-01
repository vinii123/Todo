import React from "react";

const Todo = ({ onClick, comleted, text }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: comleted ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
};

export default Todo;
