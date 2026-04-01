// Build a todo list with filters.
// You have an input to add todos and 3 filter buttons — All, Active, Completed.
//  Clicking a todo marks it complete (strikethrough). 
// The filter buttons show only the relevant todos.
// <!-- index.html -->
// <div class="container">
//   <div class="input-container">
//     <input type="text" id="todo-input" placeholder="Add a todo..." />
//     <button id="add-btn">Add</button>
//   </div>

//   <div class="filters">
//     <button class="filter-btn active" data-filter="all">All</button>
//     <button class="filter-btn" data-filter="active">Active</button>
//     <button class="filter-btn" data-filter="completed">Completed</button>
//   </div>

//   <ul id="todo-list"></ul>
// </div>


// script.js
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const filterBtns = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';
const todos = [];


function render(){
    
    const filtered = todos.filter((data)=>{
        if (currentFilter=='active') return data.completed==false 
        if (currentFilter=='completed') return data.completed==true
        return true; 
    })

    list.innerHTML = filtered.map((data)=> `<li class='${data.completed?'completed':''}'>${data.text}</li>`).join('')

    list.querySelectorAll('li').forEach((li,i)=>{
        li.addEventListener('click',()=>{
            
            todos[i].completed=!todos[i].completed
            render()
        })
    })
}

addBtn.addEventListener('click',()=>{
    if (input.ariaValueMax.length<=0) {
        return
    }
    todos.push({text:input.ariaValueMax.trim(),completed:false})
    input.value = ''
    render()
})

filterBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        filterBtns.forEach((b)=>b.classList.remove('active'))
        btn.classList.add('active')
        currentFilter=btn.dataset.filter
        render()
    })
})







// /* style.css */
// .completed {
//   text-decoration: line-through;
//   color: gray;
// }

// .filter-btn.active {
//   background: dodgerblue;
//   color: white;
// }