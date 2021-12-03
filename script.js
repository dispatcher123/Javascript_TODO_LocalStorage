const form =document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const addbtn = document.querySelector('#btnAddNewTask');
const dltbtn = document.querySelector('#btnDeleteTask');
const taskList = document.querySelector('#task-list');



eventListiners();


function eventListiners() {
    form.addEventListener('submit',NewItem);
}

function NewItem(e) {
    if(input.value === ''){
        alert('Please enter a Task');
    }

    //create li 
    const li =document.createElement('li');
    li.className='list-group-item list-group-item-secondary';

    // create tet to li 
    li.appendChild(document.createTextNode(input.value));


    // create a
    const a= document.createElement('a');
    a.className='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fa fa-times"></i>';
    

    //make relationship between a and li

    //add a to li
    li.appendChild(a);

    // add li to lu

    taskList.appendChild(li);
    input.value='';

    e.preventDefault();


}