import { useRef } from "react";
import AddIcon from "../UI/AddIcon";

const NewTodo = ({ onAddTodo }) => {

    const inputRef = useRef();

    const getNewTodo = () => {
        if (!inputRef.current?.value) {
            return alert("Please enter a new todo");
        }
        const newTodo = inputRef.current.value;
        inputRef.current.value = "";
        return newTodo;
    };


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