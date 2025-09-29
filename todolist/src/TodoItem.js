import React from "react";

export default function TodoItem({ todo, removeTask }) {
  return (
    <li>
      {todo.date} -- {todo.hora} : {todo.text}
      <button style={styles.button} onClick={() => removeTask(todo.id)}>X</button>
    </li>
  );
}

const styles = {
  item: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
