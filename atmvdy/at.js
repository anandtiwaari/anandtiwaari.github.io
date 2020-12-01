//selectors
let todoinput=document.querySelector('.todo-input');
let todobutton=document.querySelector('.todo-button');
let todolist=document.querySelector('.todo-list');

//Event listeners
todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click',deletecheck);
//function
function addtodo(event){
    event.preventDefault();
    // console.log('hello kaise ho sabb')
    const tododiv=document.createElement('div')
    tododiv.classList.add("todo");
    //li banaya
    const newtodo=document.createElement('li');
    newtodo.innerText=todoinput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    //check buttons
    const completebutton=document.createElement('button')
    completebutton.classList.add('complete-btn');
    completebutton.innerHTML='<i class="fas fa-check"></i>';
    tododiv.appendChild(completebutton);
    //delete button
    const trashbutton=document.createElement('button')
    trashbutton.classList.add('trash-btn');
    trashbutton.innerHTML='<i class="fas fa-trash"></i>';
    tododiv.appendChild(trashbutton);
    todolist.appendChild(tododiv);
    //clear to-do input values
    todoinput.value="";
}
function deletecheck(e){
    // console.log(e.target);
    const item=e.target;
    //delete todo
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.remove();
        //Check mark
        if(item.classList[0]==="complete-btn"){
            const todo=item.parentElement;
            todo.classList.toggle('completed');
        }
    }
}
