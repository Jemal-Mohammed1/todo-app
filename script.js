
document.addEventListener("DOMContentLoaded", ()=>{

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const todolist = document.getElementById("todo-list");
let tasks=JSON.parse(localStorage.getItem("task")) || [];

    tasks.forEach(task => rendertask(task));

addTaskButton.addEventListener("click", ()=>{
    const taskText =taskInput.value.trim();
    if(taskText ==="") return;
    const newTask = {
        id:Date.now(),
        text: taskText,
        completed:false

    }

    tasks.push(newTask);
    saveTasks();
   rendertask(newTask);
   
    taskInput.value="";
    console.log(tasks)
})
function rendertask(task){
const li = document.createElement("li");
li.	setAttribute("data-id",task.id);
if(task.completed) li.classList.add("completed");
li.innerHTML =`
    <span>${task.text}</span>
    <button >Delete</button>

`;
li.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON") return;
    li.completed = !li.completed;
    li.classList.toggle("completed");
       saveTasks()
    
})
li.querySelector("button").addEventListener("click" ,(e)=>{
    e.stoppropagation;
    tasks = tasks.filter(t => t.id !== task.id);
   
    li.remove();
    saveTasks();
})
todolist .appendChild(li);

}





function saveTasks(){
    localStorage.setItem("task",JSON.stringify(tasks))
}


})
