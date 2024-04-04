const Wrapper = ({ children }) => {
    return (
        <div className="w-full h-screen p-10 flex flex-col bg-gradient-to-b from-blue-100 to-purple-100" >
            { children }
        </div>
    );
};

export default Wrapper;