import { useRef, useEffect } from "react";
import AddIcon from "../UI/AddIcon";

const NewTodo = ({ onAddTodo }) => {

    const inputRef = useRef();
    const onAddTodoRef = useRef(onAddTodo);

    const getNewTodo = () => {
        if (!inputRef.current?.value?.trim()) {
            return alert("Please enter a new todo");
        }
        const newTodo = inputRef.current.value;
        inputRef.current.value = "";
        return newTodo;
    };

    useEffect(() => {
        onAddTodoRef.current = onAddTodo;
    }, [onAddTodo]);//拆成兩個useEffect，是為了避免event listener 因為 onAddTodo 這個 function 的reference改變而重新註冊

    useEffect(() => {
        const inputNode = inputRef.current;
        function addTodo(event) {
            if (event.key === "Enter") {
                const newTodo = getNewTodo();
                if (newTodo) {
                    onAddTodoRef.current(newTodo);
                }
            }
        }

        inputNode.addEventListener("keydown", addTodo);

        return () => inputNode.removeEventListener("keydown", addTodo);

    }, []);


    return (
        <div className="flex flex-col">
            <label htmlFor="newTodo" className="text-gray-500 py-2">Add to list</label>
            <div className="flex gap-2 items-center">
                <input id="newTodo" type="text" className="flex-1 px-2 py-1" ref={ inputRef } />
                <button className="bg-blue-500 w-6 h-6 p-4 flex relative rounded-sm text-lg" onClick={ () => onAddTodo(getNewTodo()) }>
                    <AddIcon />
                </button>
            </div>
        </div>
    );
};

export default NewTodo;