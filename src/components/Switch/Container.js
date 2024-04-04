const Container = ({ children }) => {
    return (
        <div className="flex justify-end gap-4 items-center">
            { children }
        </div>
    );
};

export default Container;