const DeleteBtn = ({ onDelete }) => {
    return (
        <button className="cursor-pointer p-2 ml-auto" onClick={ onDelete }>X</button>
    );
};

export default DeleteBtn;