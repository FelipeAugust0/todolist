import React from "react";

export default function TodoItem({todo, removeTask}){
    return(
        <li>
            {todo.date} -- : {todo.text}
            <button onClick={() => removeTask(todo.id)}>X</button>
        </li>
    )
}