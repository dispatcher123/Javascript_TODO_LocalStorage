const form =document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const addbtn = document.querySelector('#btnAddNewTask');
const dltbtn = document.querySelector('#btnDeleteTask');
const taskList = document.querySelector('#task-list');

eventListiners();

function eventListiners() {
  form.addEventListener("submit", NewItem);
}

function NewItem(e) {
  if (input == "") {
    alert("Pls add a new item");
  }
  const li =document.createElement('li');
    li.className='list-group-item list-group-item-secondary';
  li.appendChild(document.createTextNode(input.value));

  const a = document.createElement("a");
  a.className="delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fa fa-times"></i>';

  //add li to a
  li.appendChild(a);

  //add lu to li
  taskList.appendChild(li);
  input.value = "";
  e.preventDefault();
}
