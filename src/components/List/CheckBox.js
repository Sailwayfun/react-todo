const CheckBox = ({ id, isChecked, onChange }) => {
    return (
        <input className="w-4 h-4" type="checkbox" checked={ isChecked } onChange={ () => onChange(id) } />
    );
};

export default CheckBox;