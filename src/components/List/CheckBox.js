const CheckBox = ({ id, checked, onChange }) => {
    return (
        <input className="w-4 h-4" type="checkbox" checked={ checked } onChange={ () => onChange(id) } />
    );
};

export default CheckBox;