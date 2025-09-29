import React, { useState } from "react";
import TodoList from "./TodoList";

// Componente principal
export default function App(){
  // Variavel de estado que armazena todas as atividades
  const [todos, setTodos] = useState([]); // Indica um array

  // Variavel de estado relativo a tarefa
  const [newTask, setNewTask] = useState("");

  // Variavel relativa a data
  const [datadia, setDatadia] = useState("");

  // Variavel de estado relativo a hora
  const [hora, setHora] = useState("");

  // Funcao adiciona uma tarefa na lista
  const addTask = () => {
    if (newTask.trim() === "") return;
    
    // Crio um objeto que representa a tarefa
    const newTodo = {
      id: Date.now(), // Crio um id unico baseado na hora atual
      text: newTask,
      date: datadia,
      hora: hora
    }
    setTodos([...todos, newTodo]);
    // Limpar as variaveis de estado
    setNewTask("");
    setDatadia("");
    setHora("");
  }

  // Funcao remove as tarefas pelo id
  const removeTask = (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id));
  }

  return(
    <div>
      <h1>Minha ToDo List</h1>
      <div>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <div>
        <TodoList todos ={todos} removeTask={removeTask}/>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    magin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  },
  inputdh: {
    padding: "10px",
    witdth: "39%",
    marginRight: "5px",
    borderRadius: "10px",
  },
  input: {
    padding: "10px",
    width: "70%",
    marginRight: "5px",
  },
  button: {
    padding: "10px",
    cursor: "pointer"
  }
}
