// You get a search input. Without debounce, every keypress fires an API call or filter.
// Your job: implement debounce so the function only runs after the user stops typing for
// X milliseconds. Key concepts: setTimeout, clearTimeout, closures.
// What they give you (HTML template)

// Copy
// <!-- They give you this HTML -->
// <input id="search" type="text" placeholder="Search..." />
// <ul id="results"></ul>

// <!-- And maybe a mock data array -->
// <script>
//   const data = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry'];
// </script>



const input = document.getElementById('search')

    const data = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry'];
    const ul = document.getElementById('results')
    let timer;


    input.addEventListener('input',()=>{
        clearTimeout(timer);

        timer =setTimeout(()=>{
        ul.innerHTML='';
        const array= data.filter((item)=>item.toLowerCase().includes(input.value.toLowerCase()))

        array.forEach((items)=>{
            const li = document.createElement('li')
            li.textContent= items;
            ul.appendChild(li);
            
        })
        },300)
    })


