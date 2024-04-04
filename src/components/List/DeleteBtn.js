const DeleteBtn = ({ id, deleteItem }) => {
    return (
        <button className="cursor-pointer p-2" onClick={ () => deleteItem(id) }>X</button>
    );
};

export default DeleteBtn;