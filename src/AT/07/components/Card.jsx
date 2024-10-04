const Card = () => {
    return (
        <div className="card">
            <div className="profile">
                <div className="profile-pic">
                    <img src="../../assets/brenos-picture.jpeg"></img>
                </div>
                <div className="profile-info">
                    <h1 className="name">Breno</h1>
                    <h3>28/09/1995</h3>
                    <h3>Engenharia</h3>
                    <h3>SWE</h3>
                </div>
                <div className="actions">
                    <img src="../../assets/home.png"></img>
                    <img src="../../assets/linkedin.png"></img>
                    <img src="../../assets/contact.png"></img>
                </div>
            </div>
            <div className="tasks">
                <table className="tasks-table">
                    <tr>
                        <th>Estado</th>
                        <th>Tarefa</th>
                    </tr>
                    <tr>
                        <td className="task-state"><input type="checkbox"></input></td>
                        <td>Task 1</td>
                    </tr>
                    <tr>
                        <td className="task-state"><input type="checkbox"></input></td>
                        <td>Task 2</td>
                    </tr>
                    <tr>
                        <td className="task-state"><input type="checkbox"></input></td>
                        <td>Task 3</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Card;