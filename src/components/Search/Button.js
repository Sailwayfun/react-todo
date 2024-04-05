import SearchIcon from "../UI/SearchIcon";
import BackIcon from "../UI/BackIcon";

const Button = ({ onSearch, isSearching }) => {
    return (
        <button
            onClick={ onSearch }
            className="w-12 h-6 absolute top-1 right-1 flex gap-3"
        >
            <SearchIcon />
            { isSearching ? <BackIcon /> : null }
        </button>
    );
};

export default Button;