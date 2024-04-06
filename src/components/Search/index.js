import Button from "./Button";
import { useState, forwardRef, useEffect } from "react";

const _Search = ({ search, setSearch, onSearch, onBackToAllTodos, onCompositionStart, onCompositionEnd }, ref) => {

    const [isSearching, setIsSearching] = useState(false);

    function focusSearchInput() {
        setIsSearching(true);
    }
    //Search component在focus的時候，會顯示SearchIcon和BackIcon，這個功能是透過focusSearchInput來控制的

    useEffect(() => {
        function onMouseDown(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsSearching(false);
            }
        }
        document.addEventListener("mousedown", onMouseDown);
        return () => document.removeEventListener("mousedown", onMouseDown);
    });
    //之所以不用input的onBlur，是為了避免input的onBlur和button的onClick事件衝突，所以這裡使用document的mousedown事件來偵測點擊事件

    return (
        <div className="flex justify-end relative">
            <input
                type="text"
                value={ search }
                onChange={ (e) => setSearch(e.target.value) }
                className="w-40 h-8 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:w-2/3 relative"
                onFocus={ focusSearchInput }
                ref={ ref }
                onCompositionStart={ onCompositionStart }
                onCompositionEnd={ onCompositionEnd }
            />
            <Button onSearch={ onSearch } isSearching={ isSearching } onBackToAllTodos={ onBackToAllTodos } />
        </div>

    );
};

const Search = forwardRef(_Search);
//這裡使用forwardRef，是為了讓Search component可以接收ref，這樣就可以在父層component中監聽Search component的keydown事件

export default Search;