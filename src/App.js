import Wrapper from "./components/UI/Wrapper";

function App() {
  return (
    <Wrapper>
      <h1 className="text-3xl text-blue-300">
        Todo List
      </h1>
      <p>Add things to do</p>
      <div className="w-full h-[1px] mt-3 bg-blue-400"></div>
    </Wrapper>
  );
}

export default App;
