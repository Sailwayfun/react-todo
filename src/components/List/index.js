import Item from "./Item";
import { forwardRef } from "react";


const _List = (props, ref) => {
    return (
        <div className="mt-5 overflow-y-auto h-48 pb-40 pr-2">
            <ul className="flex flex-col gap-2" ref={ ref }>
                { props.todos.map((todo) => (
                    <Item key={ todo.id } todo={ todo } onCheck={ props.onCheckTodo } onDelete={ props.onDeleteTodo } />
                )) }
            </ul>
        </div>
    );
};

const List = forwardRef(_List);

export default List;