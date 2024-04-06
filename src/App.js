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
  const [isComposing, setIsComposing] = useState(false);
  const listRef = useRef();
  const todosNumberRef = useRef();
  const searchRef = useRef();
  const justAddedRef = useRef(false);
  //ref跟state的選擇，差別在於是否需要更新UI，如果只是需要存取DOM元素或儲存數值，就使用ref，如果需要更新UI，就使用state

  const setTodos = useCallback((newTodos) => {
    if (isDoneAtBottom) {
      const doneTodos = newTodos.filter(todo => todo.isDone);
      const notDoneTodos = newTodos.filter(todo => !todo.isDone);
      _setTodos([...notDoneTodos, ...doneTodos]);
      return;
    }
    const todosByTime = newTodos.sort((a, b) => a.id - b.id);
    _setTodos(todosByTime);
    return;
  }, [
    isDoneAtBottom,
  ]);
  //之所以不直接使用_setTodos，是因為這樣可以在setTodos裡面加入邏輯，例如isDoneAtBottom的判斷
  //每次呼叫setTodos，都會檢查isDoneAtBottom的值，如果是true，就會把已完成的todo移到陣列最後面，否則就維持原本的順序


  useEffect(() => {
    todosNumberRef.current = todos.length;
    if (listRef.current && justAddedRef.current) {
      listRef.current.lastChild?.scrollIntoView({ behavior: "smooth" });
      justAddedRef.current = false;
    }
  }, [todos.length]);
  //這裡的useEffect是為了在新增todo時，自動捲動到新增的todo，這樣使用者就不用自己滾動畫面
  //這裡使用justAddedRef.current是為了避免畫面重整和刪除todo時也會觸發scrollIntoView

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
  //這個side effect是為了初始化todos，如果localStorage裡面沒有todos，就會新增一些預設的todos

  const searchTodos = useCallback(() => {
    if (!searchTerm || isComposing) return;
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(allTodos.filter(todo => todo.name.toLowerCase().includes(searchTerm.toLowerCase())) || []);
  }, [searchTerm, setTodos, isComposing]);
  //search功能分成按鈕和鍵盤兩種，都會使用到這個callback function，這樣就不用重複寫相同的邏輯
  //用useCallback包裝，是為了避免每次render都會重新建立這個function


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
    //這裡選擇在search input而不是window上加上event listener，是為了避免在其他地方按下enter或esc也會觸發searchTodos

  }, [searchTerm, searchTodos, setTodos]);

  function addTodo(newTodo) {
    if (!newTodo || isComposing) return;
    const newTodos = [...todos, { name: newTodo, isDone: false, id: Date.now() }];
    localStorage.setItem("todos", JSON.stringify(newTodos) || JSON.stringify([]));
    justAddedRef.current = true;
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
  //這裡使用useMemo，是為了避免每次render都會重新計算進度條的進度，這樣可以節省效能

  function toggleTodoOrder() {
    setIsDoneAtBottom(prevOrder => !prevOrder);
  }
  //因為todos的順序是由isDoneAtBottom來控制，所以只要改變這個state，就可以改變todos的順序

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
      <Search search={ searchTerm }
        setSearch={ setSearchTerm }
        onSearch={ searchTodos }
        onBackToAllTodos={ backToAllTodos }
        ref={ searchRef }
        onCompositionStart={ () => setIsComposing(true) }
        onCompositionEnd={ () => setIsComposing(false) }
      />
      <h2 className="text-gray-500">Add things to do</h2>
      <Split />
      <ProgressBar progress={ progress } />
      <List todos={ todos } ref={ listRef } onCheckTodo={ checkTodo } onDeleteTodo={ deleteTodo } />
      <Split />
      <Container>
        <p className="text-gray-500">Move done things to end?</p>
        <Toggle onToggle={ toggleTodoOrder } />
      </Container>
      <NewTodo
        onAddTodo={ addTodo }
        onCompositionStart={ () => setIsComposing(true) }
        onCompositionEnd={ () => setIsComposing(false) }
      />
    </Wrapper>
  );
}

export default App;
