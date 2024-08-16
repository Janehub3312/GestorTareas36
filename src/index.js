import "./styles.css";
import { addTask, deleteTask, toggleTask } from "./task";
import { renderTasks } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
     renderTasks();
     console.log("entra7")
     document.getElementById("task-form").addEventListener("submit", (e) => {
          e.preventDefault();
           console.log("entra10")
          const taskInput = document.getElementById("task-input").value; 
          if(taskInput !== "") {
           console.log("entra")
            addTask(taskInput);
            renderTasks();
                //limpiar el cuadro de texto
                document.getElementById("task-input").value = "";
          }
     });

     document.getElementById("task-list").addEventListener("click", (e) => {
          if(e.target.classList.contains("delete")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            deleteTask(taskId);
            renderTasks();
          }

          if(e.target.classList.contains("toggle")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            toggleTask(taskId);
            renderTasks();
          }
     });
});