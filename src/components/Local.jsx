import { useEffect, useState } from "react";


const Local = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // charger les taches depuis le localStorage lors du montage
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log("Sauvegarde des tâches dans le localStorage...");
    }, [tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('')
        }
    };

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleDelete = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks)
    };
    return (
        <div className="global">
            <h1> Todo List</h1>
            <form onSubmit={handleSubmit} >
                <input type="text" value={task} onChange={handleChange} />
                <button type="submit" className="but1"> Ajouter Task</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDelete(index)} className="but2">DEL</button>
                    </li>
                ))

                }
            </ul>
        </div>
    );
}

export default Local;
