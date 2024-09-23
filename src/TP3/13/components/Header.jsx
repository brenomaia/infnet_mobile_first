const Header = ({ changeCategory, newTask, onEditNewTask, onAddTask }) => {
    return (
        <div className="header">
            <h2>Lista de tarefas</h2>

            <div className="new-task">
                <input onChange={(event) => onEditNewTask(event.target.value)} placeholder="Nova task" value={newTask}></input>
                <button onClick={onAddTask}>Adicionar</button>
            </div>
            
            <div className="selector">
                <h3>Selecione a categoria</h3>
                <button onClick={() => changeCategory("Casa")}>Casa</button>
                <button onClick={() => changeCategory("Trabalho")}>Trabalho</button>
                <button onClick={() => changeCategory("Saúde")}>Saúde</button>
            </div>
        </div>
    )
}

export default Header;