import SearchIcon from "../UI/SearchIcon";

const Button = ({ onSearch }) => {
    return (
        <button
            onClick={ onSearch }
            className="w-6 h-6 absolute top-1 right-1"
        >
            <SearchIcon />
        </button>
    );
};

export default Button;