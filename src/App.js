import ProgressBar from "./components/ProgressBar";
import Wrapper from "./components/UI/Wrapper";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["Learn React", "Learn Tailwind CSS", "Learn Firebase"]);

  return (
    <Wrapper>
      <h1 className="text-3xl text-blue-300">
        Todo List
      </h1>
      <p>Add things to do</p>
      <div className="w-full h-[1px] my-4 bg-blue-400"></div>
      <ProgressBar progress={ 50 } />
      <List todos={ todos } />
      <div className="w-full h-[1px] my-4 bg-blue-400"></div>
    </Wrapper>
  );
}

export default App;
