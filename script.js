// const val=document.getElementsByTagName('input');
var taskListArr = [];
const taskInput = document.getElementById("taskInput");
const taskList=document.getElementById('taskList');
const addBtn=document.getElementById("Add")
let val = document.getElementById("taskInput");

taskInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
            addEntry();
    }
});

addBtn.addEventListener("click", () => {
    
    addEntry();
});

    function addEntry(){
    taskListArr.unshift({ id: Date.now(), value: taskInput.value });
        console.log(taskListArr);
        taskInput.value = "";
    let li=document.createElement('li');
    li.innerHTML=`${taskListArr[0].value} <button class="delete-btn" id="${taskListArr[0].id}">Delete</button>`; 
    li.id=taskListArr[0].id
    taskList.appendChild(li);
    li.querySelector(".delete-btn").addEventListener("click", buttonClickHandler);
}


function buttonClickHandler(event) {
    // Get the ID of the clicked button
    var buttonId = event.target.id;
    var taskIndex = taskListArr.findIndex(task => task.id == buttonId);

        if (taskIndex > -1) {
            // Remove the task from the array
            taskListArr.splice(taskIndex, 1);
        }
    console.log(buttonId);
}

// Get all buttons on the page
var buttons = document.querySelectorAll("button");

// Attach the click event listener to each button
buttons.forEach(function(button) {
    button.addEventListener("click", buttonClickHandler);
});

// document.addEventListener('DOMContentLoaded', () => {
//     const taskInput = document.getElementById('taskInput');
//     const addButton = document.getElementById('Add');
//     const taskList = document.getElementById('taskList');
//     const taskListArr = ['Task 1', 'Task 2', 'Task 3'];

//     // Function to add tasks from the array to the list
//     const populateTaskList = () => {
//         taskList.innerHTML = ''; // Clear the existing tasks
//         taskListArr.forEach(task => {
//             const li = document.createElement('li');
//             li.textContent = task;
//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'deleteTask';
//             deleteButton.addEventListener('click', () => {
//                 const index = taskListArr.indexOf(task);
//                 if (index > -1) {
//                     taskListArr.splice(index, 1); // Remove task from the array
//                     populateTaskList(); // Repopulate the list
//                 }
//             });
//             li.appendChild(deleteButton);
//             taskList.appendChild(li);
//         });
//     };

//     // Initial population of the task list
//     populateTaskList();

//     // Event listener for the Add button
//     addButton.addEventListener('click', () => {
//         const task = taskInput.value.trim();
//         if (task !== '') {
//             taskListArr.push(task); // Add new task to the array
//             populateTaskList(); // Repopulate the list
//             taskInput.value = ''; // Clear the input field
//         }
//     });

//     // Event listener for pressing Enter in the input field
//     taskInput.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter') {
//             const task = taskInput.value.trim();
//             if (task !== '') {
//                 taskListArr.push(task); // Add new task to the array
//                 populateTaskList(); // Repopulate the list
//                 taskInput.value = ''; // Clear the input field
//             }
//         }
//     });
// });
