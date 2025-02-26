const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodo()

function renderTodo() {
  let todoListHTML = '';
  for (let i =0; i < todoList.length;i++) {
    const todoObject = todoList[i]
    //const name = todoObject.name
    //const dueDate = todoObject.date
    const {name,dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button" onclick="
         todoList.splice(${i},1);
         renderTodo();
         saveToStorage();
      ">Delete</button> 
      
    `;
    todoListHTML += html
  }
  document.querySelector('.js-todo-list').innerHTML= todoListHTML
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value
  const dateInputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateInputElement.value
  
  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  inputElement.value = ''
  dateInputElement.value=''
  renderTodo();

  // Whenever we update the todo list, save in localStorage.
  saveToStorage()
}

function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}