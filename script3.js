const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const addbtn = document.querySelector("#btnAddNewTask");
const dltbtn = document.querySelector("#btnDeleteTask");
const taskList = document.querySelector("#task-list");
let items;

eventListeners();

loadItems();

//events
function eventListeners() {
  form.addEventListener("submit", newItem);
  taskList.addEventListener("click", deleteItem);
  dltbtn.addEventListener("click", deleteAllItem);
}

// load items lists

function loadItems() {

    items = getItemsFromLS();


  items.forEach(function (item) {
    createItem(item);
  });
}



// get items from local storage

function getItemsFromLS() {
    //control local storage
    if(localStorage.getItem('items') === null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

// set item to Local Stroage

function SetToLocalStroage(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}


// delete from Stroage

function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index, 1);
        }
    })
    localStorage.setItem('items', JSON.stringify(items));
}


// create an item

function createItem() {
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(input.value));

  const a = document.createElement("a");
  a.className = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fa fa-times"></i>';

  // add li to a
  li.appendChild(a);

  // add ul to li
  taskList.appendChild(li);
}

// add new item
function newItem(e) {
  if (input.value == "") {
    alert("pls add a new item");
  }

  createItem(input.value);

  // save to local Stroage

  SetToLocalStroage(input.value);


  input.value = "";
  e.preventDefault();
}

// delete item
function deleteItem(e) {
  if (e.target.className == "fa fa-times") {
    if (confirm("Are you sure you want to delete")) {
      e.target.parentElement.parentElement.remove();

        // delete the
        deleteItemFromLS(e.target.parentElement.parentElement.textContent);


    }
  }

  e.preventDefault();
}

// delete all item
function deleteAllItem(e) {
  // first alternative
  // taskList.innerHTML = '<li class="list-group-item list-group-item-secondary">TODO item <a href="/" class="delete-item float-right"><i class="fa fa-times"></i></a></li>'
  // taskList.remove();

  // 2.alternative

  if (confirm("Are you sure you want to delete")) {
    
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
  }

  e.preventDefault();
}
