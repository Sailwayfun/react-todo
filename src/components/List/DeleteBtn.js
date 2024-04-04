import DeleteIcon from "../UI/DeleteIcon";

const DeleteBtn = ({ onDelete }) => {
    return (
        <button className="cursor-pointer p-2 ml-auto" onClick={ onDelete }>
            <DeleteIcon />
        </button>
    );
};

export default DeleteBtn;