import Card from "./components/Card"
import { Profile, ProfileActions, ProfileInfo, ProfilePic } from "./components/Profile"
import { Tasks, TasksTable } from "./components/Tasks"

export default function App() {
    return (
        <Card>
            <Profile>
                <ProfilePic>
                    <img src="../../assets/brenos-picture.jpeg"></img>
                </ProfilePic>
                <ProfileInfo>
                    <h1 className="name">Breno</h1>
                    <h3>28/09/1995</h3>
                    <h3>Engenharia</h3>
                    <h3>SWE</h3>
                </ProfileInfo>
                <ProfileActions>
                    <img src="../../assets/home.png"></img>
                    <img src="../../assets/linkedin.png"></img>
                    <img src="../../assets/contact.png"></img>
                </ProfileActions>
            </Profile>
            <Tasks>
                <TasksTable>
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
                </TasksTable>
            </Tasks>
        </Card>
    )
}