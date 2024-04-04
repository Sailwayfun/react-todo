import DeleteBtn from "./DeleteBtn";

const Item = ({ todo }) => {
    return (
        <li className="p-2 border-b bg-white text-blue-500 flex items-center justify-between">
            <p>{ todo }</p>
            <DeleteBtn />
        </li>
    );
};

export default Item;