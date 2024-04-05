import Button from "./Button";
import { useState } from "react";

const Search = ({ search, setSearch, onSearch, onBackToAllTodos }) => {

    const [isSearching, setIsSearching] = useState(false);

    function focusSearchInput() {
        setIsSearching(true);
    }

    return (
        <div className="flex justify-end relative">
            <input
                type="text"
                value={ search }
                onChange={ (e) => setSearch(e.target.value) }
                className="w-40 h-8 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:w-2/3 relative"
                onFocus={ focusSearchInput }
            />
            <Button onSearch={ onSearch } isSearching={ isSearching } onBackToAllTodos={ onBackToAllTodos } />
        </div>

    );
};

export default Search;