const Toggle = ({ onToggle }) => {
    return (
        <label className="switch relative inline-block w-14 h-8">
            <input type="checkbox" className="opacity-0 w-0 h-0 peer" onChange={ onToggle } />
            <span className="slider absolute cursor-pointer block bg-gray-300 transition duration-200 ease-in-out inset-0 rounded-3xl before:absolute before:w-6 before:h-6 before:left-1 before:bottom-1 before:bg-white before:transition before:duration-200 peer-checked:bg-blue-500 peer-focus:shadow-blue-500 peer-checked:before:transform peer-checked:before:translate-x-6 before:rounded-full"></span>
        </label>
    );
};

export default Toggle;