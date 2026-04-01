    // <!-- index.html -->
    // <div class="container">
    //   <div class="input-container">
    //     <input type="text" id="todo-input" placeholder="Add a task..." />
    //     <button id="add-btn">Add</button>
    //   </div>
    //   <ul id="todo-list"></ul>
    // </div>

    // script.js
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('todo-list');


    addBtn.addEventListener('click',()=>{
        const li = document.createElement('li')
        li.textContent=input.value
        const removeBtn = document.createElement('button')
        removeBtn.innerText='Remove'
        li.appendChild(removeBtn)
        list.appendChild(li)
        removeBtn.addEventListener('click',()=>{
            li.remove()
        })
        li.addEventListener('click',()=>{
            li.classList.toggle('completed')
        })

    })



    // TODO 1: clicking Add should add a new item to the list
    // TODO 2: each item should have a Delete button that removes it
    // TODO 3: clicking the item text should mark it as completed (strikethrough)


    /* style.css */
    // .completed {
    //   text-decoration: line-through;
    //   color: gray;
    // }