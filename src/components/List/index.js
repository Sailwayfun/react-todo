import Item from "./Item";
import { forwardRef } from "react";


const _List = (props, ref) => {
    return (
        <div className="mt-5">
            <ul className="flex flex-col gap-2" ref={ ref }>
                { props.todos.map((todo, index) => (
                    <Item key={ index } todo={ todo } />
                )) }
            </ul>
        </div>
    );
};

const List = forwardRef(_List);

export default List;