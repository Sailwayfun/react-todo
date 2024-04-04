import Item from "./Item";


const List = ({ todos }) => {
    return (
        <div className="mt-5">
            <ul className="flex flex-col gap-2">
                { todos.map((todo, index) => (
                    <Item key={ index } todo={ todo } />
                )) }
            </ul>
        </div>
    );
};

export default List;