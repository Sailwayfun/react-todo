const NewTodo = () => {
    return (
        <div className="flex flex-col">
            <label htmlFor="newTodo" className="text-gray-500 py-2">Add to list</label>
            <div className="flex gap-2 items-center">
                <input id="newTodo" type="text" className="flex-1 px-2 py-1" />
                <button className="bg-blue-500 w-6 h-6 p-4 flex justify-center items-center rounded-sm text-lg text-white">+</button>
            </div>
        </div>
    );
};

export default NewTodo;