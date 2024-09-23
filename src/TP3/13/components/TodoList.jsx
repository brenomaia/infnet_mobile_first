const TodoList = ({ items, onDelete }) => {
    return (
        <div className="todolist">
            <ul>
                {items.map((item, index) => (
                    <li className="list-item" key={index}>
                        {item} 
                        <button className="remove-button" onClick={() => onDelete(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;