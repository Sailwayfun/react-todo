import Item from "./Item";
import { forwardRef } from "react";


const _List = (props, ref) => {
    return (
        <div className="mt-5 overflow-y-auto h-72 pb-40 pr-2">
            <ul className="flex flex-col gap-2" ref={ ref }>
                { props.todos.map((todo) => (
                    <Item key={ todo.id } todo={ todo } onCheck={ props.onCheckTodo } onDelete={ props.onDeleteTodo } />
                )) }
            </ul>
        </div>
    );
};

const List = forwardRef(_List);
//這個component是用來顯示所有的todo，所以會接收一個todos的props，然後把每個todo傳給Item component
//這裡使用forwardRef，是為了讓List component可以接收ref，然後再傳遞給ul element，這樣可以在父層component中控制List component的scroll位置

export default List;