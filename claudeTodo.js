// <!-- They give you this HTML -->
// <input id="todo-input" type="text" placeholder="Add a task..." />
// <button id="add-btn">Add</button>
// <ul id="todo-list"></ul>
const btn = document.querySelector('#add-btn')
const todo = document.querySelector('#todo-list')
const input = document.querySelector('#todo-input')

btn.addEventListener('click',()=>{
    const inputData = input.value.trim()
    if(!inputData) return;

    const list = document.createElement('li')
    list.textContent = inputData;

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete'
    deletebtn.addEventListener('click',()=>{list.remove()})
    list.appendChild(deletebtn)
    todo.appendChild(list)
    input.value=''
    
})
