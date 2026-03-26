// Modal / Dialog
// You get a button, a modal overlay, and a close button. Your job: open on button click, close on X click, close on backdrop click, and close on Escape key. Key concepts: classList, event.target, keyboard events (keydown), event.key.

// What they give you (HTML template)

// Copy
// <!-- They give you this HTML -->
// <button id="open-btn">Open Modal</button>

// <div id="overlay" class="overlay hidden">
//   <div class="modal">
//     <button id="close-btn">X</button>
//     <h2>Modal Title</h2>
//     <p>Modal content here.</p>
//   </div>
// </div>


const openBtn = document.querySelector('#open-btn')
const overlay = document.querySelector('#overlay')
const closeBtn = document.querySelector('#close-btn')

openBtn.addEventListener('click',()=>{
  
    overlay.classList.remove('hidden')
})

closeBtn.addEventListener('click',()=>{
    overlay.classList.add('hidden');
})

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape') {
    overlay.classList.add('hidden');
  }
})
overlay.addEventListener('click',(e)=>{
    if (e.target==overlay) {
        overlay.classList.add('hidden');
        
    }
})
