import React, { useState } from "react";
import TodoList from "./TodoList";

// Componente principal
export default function App() {
  // Variavel de estado que armazena todas as atividades
  const [todos, setTodos] = useState([]); // Indica um array

  // Variavel de estado relativo a tarefa
  const [newTask, setNewTask] = useState("");

  // Variavel relativa a data
  const [dataDia, setDatadia] = useState("");

  // Variavel de estado relativo a hora
  const [hora, setHora] = useState("");

  // Funcao adiciona uma tarefa na lista
  const addTask = () => {
    if (newTask.trim() === "") return;

    // Crio um objeto que representa a tarefa
    const newTodo = {
      id: Date.now(), // Crio um id unico baseado na hora atual
      text: newTask,
      date: dataDia,
      hora: hora,
    };
    setTodos([...todos, newTodo]);
    // Limpar as variaveis de estado
    setNewTask("");
    setDatadia("");
    setHora("");
  };

  // Funcao remove as tarefas pelo id
  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>Minha ToDo List</h1>
      <div style={styles.container}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <div magitTop="20">
        <input
          type="time"
          placeholder=""
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          style = {styles.inputdh}
        />

        <input
          type="date"
          placeholder=""
          value={dataDia}
          onChange={(e) => setDatadia(e.target.value)}
          style = {styles.inputdh}
        />
      </div>

      <div>
        <TodoList todos={todos} removeTask={removeTask} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  inputdh: {
    padding: "10px",
    width: "39%",
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
    cursor: "pointer",
  },
};
