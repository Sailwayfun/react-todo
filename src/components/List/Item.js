import DeleteBtn from "./DeleteBtn";

const trapezoidClasses = "h-14 w-0 border-r-4 border-r-blue-500 border-y-4 border-y-transparent border-solid";//左邊的梯形

const Item = ({ todo }) => {

    return (
        <div className="flex">
            <div className={ trapezoidClasses } />
            <li className="flex-1 p-2 border-b bg-white text-blue-500 flex items-center justify-between rounded-md">
                <p>{ todo }</p>
                <DeleteBtn />
            </li>
        </div>

    );
};

export default Item;