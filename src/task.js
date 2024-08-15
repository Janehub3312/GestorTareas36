//Lista de tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Funcion para llevar las tareas
export const getTasks = () => tasks;

//funcion para agregar una terea
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false, 
    };
    task.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
