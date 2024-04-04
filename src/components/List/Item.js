import DeleteBtn from "./DeleteBtn";
import CheckBox from "./CheckBox";

const trapezoidClasses = "h-14 w-0 border-r-4 border-r-blue-500 border-y-4 border-y-transparent border-solid";//左邊的梯形

const Item = ({ todo, onCheck }) => {

    const isLineThrough = todo.isDone ? "line-through" : "";

    return (
        <div className="flex">
            <div className={ trapezoidClasses } />
            <li className={ `flex-1 p-2 border-b bg-white text-blue-500 flex items-center rounded-md gap-3 ${isLineThrough}` }>
                <CheckBox onChange={ () => onCheck(todo.id) } />
                <p>{ todo.name }</p>
                <DeleteBtn />
            </li>
        </div>

    );
};

export default Item;