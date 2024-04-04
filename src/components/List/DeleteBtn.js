const DeleteBtn = ({ id, deleteItem }) => {
    return (
        <button className="cursor-pointer p-2 ml-auto" onClick={ () => deleteItem(id) }>X</button>
    );
};

export default DeleteBtn;