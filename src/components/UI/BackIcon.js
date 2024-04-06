const BackButton = ({ backToAllTodos }) => {
    return (
        <button onClick={ backToAllTodos } className="contents">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } className="w-full h-full stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
    );
};

export default BackButton;