// <!-- index.html -->
// <div class="container">
//   <input type="text" id="search" placeholder="Search fruits..." />
//   <ul id="list"></ul>
// </div>
// script.js
const fruits = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Date', 'Elderberry'];

const search = document.getElementById('search');
const list = document.getElementById('list');

// TODO 1: implement debounce function
var timer;
search.addEventListener('input',()=>{
    
    
        clearTimeout(timer);
        timer =setTimeout(()=>{
            list.innerHTML=''
            filterFruits(search.value)
            
        }
    ,300)
})
// TODO 2: implement filter and render logic
function filterFruits(query) {
    const filtered = fruits.filter((item)=>item.toLowerCase().includes(query.toLowerCase()))
    
    filtered.forEach((items)=>{
        const lis = document.createElement('li')
        lis.innerText= items;
        list.appendChild(lis)
        
    })

    
}

// TODO 3: wire up the debounced input listener