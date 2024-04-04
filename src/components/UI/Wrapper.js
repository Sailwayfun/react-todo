const Wrapper = ({ children }) => {
    return (
        <div className="w-full p-10 flex flex-col justify-center bg-gradient-to-b from-blue-100 to-purple-100 overflow-y-scroll" >
            { children }
        </div>
    );
};

export default Wrapper;