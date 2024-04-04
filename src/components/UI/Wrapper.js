const Wrapper = ({ children }) => {
    return (
        <div className="w-[768px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square flex flex-col justify-center p-10 bg-gradient-to-b from-blue-100 to-purple-100 overflow-y-scroll fixed">
            { children }
        </div>
    );
};

export default Wrapper;