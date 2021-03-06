window.addEventListener("DOMContentLoaded", init);
window.addEventListener("storage", initList);

var olTaskList = null;
function init(){
    olTaskList = document.getElementById("olTaskList");
    document.getElementById("btnAdd")
        .addEventListener("click", onBtnAddTaskClick);
    document.getElementById("btnRemoveCompleted")
        .addEventListener("click", onBtnRemoveCompletedClick);
    initList();
}
function initList(){
    olTaskList.innerHTML = '';
    for(var i=0; i<localStorage.length; i++){
        var id = localStorage.key(i);
        var name = localStorage.getItem(id);
        addTaskToList(id, name);
    }

}
function onBtnAddTaskClick(){
    var taskName = document.getElementById("txtTask").value;
    var newId = new Date().getTime().toString();
    localStorage.setItem(newId, taskName);
    addTaskToList(newId, taskName);
}

function addTaskToList(id, taskName){
    var newTask = document.createElement("li");
    newTask.setAttribute("taskId", id);
    newTask.innerHTML = taskName;
    newTask.addEventListener("click", onTaskItemClick);
    olTaskList.appendChild(newTask);

}
function onTaskItemClick(evtArg){
    evtArg.target.classList.toggle("completed");
}
function onBtnRemoveCompletedClick(){
    for(var i=olTaskList.children.length-1; i>=0 ; i--){
        var taskItem = olTaskList.children[i];
        if (taskItem.classList.contains("completed")){
            var id = taskItem.getAttribute("taskId");
            localStorage.removeItem(id);
            taskItem.remove();
        }
    }
}
