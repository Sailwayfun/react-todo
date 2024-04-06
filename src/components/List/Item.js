import DeleteBtn from "./DeleteBtn";
import CheckBox from "./CheckBox";

const trapezoidClasses = "h-14 w-0 border-r-4 border-r-blue-500 border-y-4 border-y-transparent border-solid";
//左邊的梯形

const Item = ({ todo, onCheck, onDelete }) => {

    const isLineThrough = todo.isDone ? "line-through" : "";
    //如果todo.isDone是true，就加上line-through的class，表示要有刪除線

    return (
        <div className="flex">
            <div className={ trapezoidClasses } />
            <li className="flex-1 p-2 border-b bg-white text-gray-500 flex items-center rounded-md gap-3">
                <CheckBox onChange={ () => onCheck(todo.id) } isChecked={ todo.isDone } />
                <p className={ isLineThrough }>{ todo.name }</p>
                <DeleteBtn onDelete={ () => onDelete(todo.id) } />
            </li>
        </div>

    );
};

export default Item;