const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full h-4 bg-gray-200 rounded flex mt-3 items-center gap-4">
            <span className="text-blue-500 whitespace-nowrap">{ progress } %</span>
            <div
                className="h-full bg-blue-500 rounded"
                style={ { width: `${progress}%` } }
            ></div>
        </div>
    );
};

export default ProgressBar;