import SearchIcon from "../UI/SearchIcon";
import BackButton from "../UI/BackIcon";

const Button = ({ onSearch, isSearching, onBackToAllTodos }) => {
    return (
        <div className="flex gap-3 absolute h-6 top-1 right-5">
            <button onClick={ onSearch } className="w-full h-full"
            >
                <SearchIcon />
            </button>
            { isSearching ? <BackButton backToAllTodos={ onBackToAllTodos } /> : null }
        </div>

    );
};

export default Button;