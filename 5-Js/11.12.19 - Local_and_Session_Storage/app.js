// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

 // change local storage item
// localStorage.setItem('name', 'Beth');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;
  //console.log(localStorage.getItem('tasks'))

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  //alert('Task saved');

  e.preventDefault();
  
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});

document.querySelector('#clear').addEventListener('click', function(){
  let delTasks;  

  if(localStorage.getItem('delTasks') === null) {
    delTasks = Array.from(localStorage.getItem('tasks'));
  } else {
   // delTasks = JSON.parse(localStorage.getItem('delTasks'));
    delTasks += localStorage.getItem('tasks');
  }

  localStorage.clear();

})