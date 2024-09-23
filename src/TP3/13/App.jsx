import "./main.css"
import  Header from "./components/Header"
import  TodoList from "./components/TodoList"
import { useState, useReducer } from "react"

export default function App() {
    const [category, setCategory] = useState("Casa");
    const [newTask, setNewTask] = useState("");

    let defaultTodoList = {
        "Casa": ["Lavar louça", "Pendurar roupa"],
        "Trabalho": [],
        "Saúde": []
    }

    const [todoList, setTodoList] = useState(defaultTodoList);

    const changeCategory = (category) => {
        setCategory(category);
    };

    const onEditNewTask = (task) => {
        setNewTask(task);
    }

    const onAddTask = () => {
        var updatedCategory = [...todoList[category], newTask];
        var updatedTodoList = todoList

        updatedTodoList[category] = updatedCategory;

        setTodoList(updatedTodoList);

        setNewTask("");
    }

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const onDelete = (index) => {
        var updatedCategory = todoList[category];
        updatedCategory.splice(index, 1)
        var updatedTodoList = todoList

        updatedTodoList[category] = updatedCategory;

        setTodoList(updatedTodoList);

        forceUpdate();
    };

    return (
        <>
            < Header changeCategory={changeCategory} newTask={newTask} onEditNewTask={onEditNewTask} onAddTask={onAddTask} />
            < TodoList items={todoList[category]} onDelete={onDelete} />
        </>
    )
}