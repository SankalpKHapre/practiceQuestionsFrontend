// <!-- index.html -->
// <div class="container">
//   <button id="open-btn">Open Modal</button>

//   <div id="overlay" class="hidden">
//     <div id="modal">
//       <button id="close-btn">X</button>
//       <h2>Modal Title</h2>
//       <p>This is the modal content.</p>
//     </div>
//   </div>
// </div>

// script.js
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');


openBtn.addEventListener('click',()=>{
    overlay.classList.remove("hidden")
})

closeBtn.addEventListener('click',()=>{
    overlay.classList.add('hidden')
})

overlay.querySelector('.container').addEventListener('click',(e)=>{
    if (e.target === overlay) {
        overlay.classList.add('hidden')
    }
})

document.addEventListener('keydown',(e)=>{
    if (e.key==='Esc') {
        overlay.classList.add('hidden')

    }
})



// TODO 1: clicking 'Open Modal' should show the overlay
// TODO 2: clicking X should hide the overlay
// TODO 3: clicking the backdrop (overlay) should hide it
// TODO 4: pressing Escape key should hide it 




// /* style.css */
// .hidden {
//   display: none;
// }

// #overlay {
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// #modal {
//   background: white;
//   padding: 20px;
//   border-radius: 10px;
// }