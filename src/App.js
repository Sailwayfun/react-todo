import ProgressBar from "./components/ProgressBar";
import Wrapper from "./components/UI/Wrapper";
import List from "./components/List";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Container from "./components/Switch/Container";
import Split from "./components/UI/Split";
import Toggle from "./components/Switch/Toggle";
import NewTodo from "./components/NewTodo";
import Search from "./components/Search";

function App() {
  const [todos, _setTodos] = useState([]);
  const [isDoneAtBottom, setIsDoneAtBottom] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const listRef = useRef();
  const todosNumberRef = useRef();
  const searchRef = useRef();

  const setTodos = useCallback((newTodos) => {
    if (isDoneAtBottom) {
      const doneTodos = newTodos.filter(todo => todo.isDone);
      const notDoneTodos = newTodos.filter(todo => !todo.isDone);
      _setTodos([...notDoneTodos, ...doneTodos]);
      return;
    }
    _setTodos(newTodos);
    return;
  }, [
    isDoneAtBottom,
  ]);
  //之所以不直接使用_setTodos，是因為這樣可以在setTodos裡面加入邏輯，例如isDoneAtBottom的判斷
  //每次呼叫setTodos，都會檢查isDoneAtBottom的值，如果是true，就會把已完成的todo移到陣列最後面，否則就維持原本的順序


  useEffect(() => {
    todosNumberRef.current = todos.length;
    if (listRef.current) {
      listRef.current.lastChild?.scrollIntoView({ behavior: "smooth" });
    }
  }, [todos.length]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (!storedTodos) {
      const defaultTodos = [{ id: Date.now() - 4, name: "Learn Git", isDone: false }, { id: Date.now() - 3, name: "Learn React", isDone: false }, { id: Date.now() - 2, name: "Learn Tailwind CSS", isDone: false }, { id: Date.now() - 1, name: "Learn Firebase", isDone: false }];
      setTodos(defaultTodos);
      localStorage.setItem("todos", JSON.stringify(defaultTodos));
      return;
    }
    setTodos(JSON.parse(storedTodos));
  }, [setTodos]);

  const searchTodos = useCallback(() => {
    if (!searchTerm) return;
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(allTodos.filter(todo => todo.name.toLowerCase().includes(searchTerm.toLowerCase())) || []);
  }, [searchTerm, setTodos]);


  useEffect(() => {
    if (!searchTerm) return;
    if (!searchRef.current) return;
    const searchNode = searchRef.current;

    function initTodos() {
      const allTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(allTodos);
    }

    function searchListner(e) {
      if (e.key === "Enter") {
        searchTodos();
        setSearchTerm("");
      }
      if (e.key === "Escape") {
        setSearchTerm("");
        initTodos();
      }
    }

    searchNode.addEventListener("keydown", (e) => searchListner(e));
    return () => searchNode.removeEventListener("keydown", searchListner);

  }, [searchTerm, searchTodos, setTodos]);

  function addTodo(newTodo) {
    if (!newTodo) return;
    const newTodos = [...todos, { name: newTodo, isDone: false, id: Date.now() }];
    localStorage.setItem("todos", JSON.stringify(newTodos) || JSON.stringify([]));
    setTodos(newTodos);
  }

  function checkTodo(id) {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos) || JSON.stringify([]));
  }

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos) || JSON.stringify([]));
  }

  const progress = useMemo(() => {
    const doneTodos = todos.filter(todo => todo.isDone);
    return Math.floor((doneTodos.length / todos.length) * 100) || 0;
  }, [todos]);

  function toggleTodoOrder() {
    setIsDoneAtBottom(prevOrder => !prevOrder);
  }

  function backToAllTodos() {
    setSearchTerm("");
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(allTodos);
  }

  return (
    <Wrapper>
      <h1 className="text-3xl text-blue-400">
        Todo List
      </h1>
      <Search search={ searchTerm } setSearch={ setSearchTerm } onSearch={ searchTodos } onBackToAllTodos={ backToAllTodos } ref={ searchRef } />
      <h2 className="text-gray-500">Add things to do</h2>
      <Split />
      <ProgressBar progress={ progress } />
      <List todos={ todos } ref={ listRef } onCheckTodo={ checkTodo } onDeleteTodo={ deleteTodo } />
      <Split />
      <Container>
        <p className="text-gray-500">Move done things to end?</p>
        <Toggle onToggle={ toggleTodoOrder } />
      </Container>
      <NewTodo onAddTodo={ addTodo } />
    </Wrapper>
  );
}

export default App;
