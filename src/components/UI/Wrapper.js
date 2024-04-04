const Wrapper = ({ children }) => {
    return (
        <div className="max-w-3xl aspect-square flex flex-col justify-center p-10 bg-gradient-to-b from-blue-100 to-purple-100 overflow-scroll">
            { children }
        </div>
    );
};

export default Wrapper;