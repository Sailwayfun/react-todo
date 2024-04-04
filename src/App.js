import ProgressBar from "./components/ProgressBar";
import Wrapper from "./components/UI/Wrapper";
import List from "./components/List";
import { useState, useEffect, useRef, useMemo } from "react";
import Container from "./components/Switch/Container";
import Split from "./components/UI/Split";
import Toggle from "./components/Switch/Toggle";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState([{ id: 0, name: "Learn React", isDone: false }, { id: 1, name: "Learn Tailwind CSS", isDone: false }, { id: 2, name: "Learn Firebase", isDone: false }]);
  const listRef = useRef();
  const todosNumberRef = useRef();


  useEffect(() => {
    todosNumberRef.current = todos.length;
    if (listRef.current) {
      listRef.current.lastChild?.scrollIntoView({ behavior: "smooth" });
    }
  }, [todos.length]);

  function addTodo(newTodo) {
    if (!newTodo) return;
    setTodos([...todos, { name: newTodo, isDone: false, id: Math.random() }]);
  }

  function checkTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    }));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const progress = useMemo(() => {
    const doneTodos = todos.filter(todo => todo.isDone);
    return Math.floor((doneTodos.length / todos.length) * 100);
  }, [todos]);

  return (
    <Wrapper>
      <h1 className="text-3xl text-blue-300">
        Todo List
      </h1>
      <p>Add things to do</p>
      <Split />
      <ProgressBar progress={ progress } />
      <List todos={ todos } ref={ listRef } onCheckTodo={ checkTodo } onDeleteTodo={ deleteTodo } />
      <Split />
      <Container>
        <p className="text-blue-400">Move done things to end?</p>
        <Toggle />
      </Container>
      <NewTodo onAddTodo={ addTodo } />
    </Wrapper>
  );
}

export default App;
