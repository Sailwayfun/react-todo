import ProgressBar from "./components/ProgressBar";
import Wrapper from "./components/UI/Wrapper";
import List from "./components/List";
import { useState, useEffect, useRef } from "react";
import Container from "./components/Switch/Container";
import Split from "./components/UI/Split";
import Toggle from "./components/Switch/Toggle";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState(["Learn React", "Learn Tailwind CSS", "Learn Firebase"]);
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
    setTodos([...todos, newTodo]);
  }

  return (
    <Wrapper>
      <h1 className="text-3xl text-blue-300">
        Todo List
      </h1>
      <p>Add things to do</p>
      <Split />
      <ProgressBar progress={ 50 } />
      <List todos={ todos } ref={ listRef } />
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
