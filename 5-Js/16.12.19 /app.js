//Define UI Variables

const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn =  document.querySelector('#clear')
const filter = document.querySelector('#fTask')
const taskInput = document.querySelector('#task')
let tasks, delTasks = [];
let x = 0;

//console.log(form, taskList, clearBtn, filter, taskInput)

//Load all event Listeners
loadEventListeners()

//Defining the Function that Load all event listeners
function loadEventListeners(){
    //Add Task event
    form.addEventListener('submit', addTask)
    //Remove Task event
    taskList.addEventListener('click', removeTask)
    //Clear Task List
    clearBtn.addEventListener('click', clearTasks)
    //Filter Task List
    filter.addEventListener('keyup', filterTasks)
    //Store and get Task 
    getTaskInLocalStorage()
}

//Store Task in LocalStorage
function storeTaskInLocalStorage(task){
    //Init the Task Array
    //console.log(localStorage.getItem('tasks'))
    //console.log(tasks)
 
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//Store Task in LocalStorage
function getTaskInLocalStorage(){
    //Init the Task Array

    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.forEach(function(item){
        const liItem = document.createElement('li')
        liItem.classList.add(`collection-item`,`${x}`)
        x++
        liItem.innerText = item
        
        liItem.insertAdjacentHTML("beforeend", `<a href="#" class="delete-item secondary-content">
        <i class="fa fa-remove"></i>
        </a>`)
        taskList.insertAdjacentElement("beforeend", liItem)
        })
    }
}

//Filter Tasklist Event Handler
function filterTasks(e){
    Array.from(taskList.children).forEach(function(item){
        item.style.display = (item.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? 'block' : 'none')
    })
}

//Clear Tasklist Event Handler
function clearTasks(e){
    if(confirm('Are u sure?')){
   // taskList.innerHTML = ""  -> while ist schneller
        while(taskList.lastChild){
            taskList.removeChild(taskList.lastChild)
        }
        delTasks.push(tasks)
        localStorage.setItem('delTasks', JSON.stringify(delTasks));

        tasks = []
        localStorage.setItem('tasks', JSON.stringify(tasks));
    
    }

}

//Remove Task Event Handler
function removeTask(e){
    if(e.target.tagName == 'I'){
        //Remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        //Remove from UL
        e.target.closest('li').remove()
    }
}

//Remove Task from LS
function removeTaskFromLocalStorage(taskItem){
    //Init the Task Array
    tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i<tasks.length; i++){
        //console.log(taskItem.innerText)
        if (tasks[i] == taskItem.innerText) {
            delTasks.push(tasks[i])
            tasks.splice(i, 1)
        }
        
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('delTasks', JSON.stringify(delTasks));
}

//Add Task Event Handler
function addTask(e){
    e.preventDefault();
    //Check if the Task Input is empty
    if(!taskInput.value){
        taskInput.nextElementSibling.innerText = 'Add Task here!'
        taskInput.nextElementSibling.style.color = '#ffab40'
        taskInput.nextElementSibling.style = `color: #ffab40;
                                              transition: color 0.5s ease;
                                              background-color: transperent`
        
    }else{
        const liItem = document.createElement('li')
        liItem.classList.add(`collection-item`,`${x}`)
        x++
        liItem.innerText = taskInput.value
        
        liItem.insertAdjacentHTML("beforeend", `<a href="#" class="delete-item secondary-content">
        <i class="fa fa-remove"></i>
        </a>`)
        taskList.insertAdjacentElement("beforeend", liItem)
        storeTaskInLocalStorage(taskInput.value)
        taskInput.value = ''
        taskInput.nextElementSibling.style = null
        taskInput.nextElementSibling.classList.remove('active')
        taskInput.nextElementSibling.innerText = 'What are you going to do?'
        }
        
}