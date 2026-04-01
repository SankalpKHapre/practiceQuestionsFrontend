// <!-- index.html -->
// <div class="container">
//   <textarea id="input" placeholder="Type something..."></textarea>
//   <p>Characters remaining: <span id="remaining">150</span></p>
//   <button id="submit-btn">Submit</button>
// </div>
// Build a live character counter with a submit button.
// You have a textarea and a character counter. As the user types:

// Show how many characters are remaining out of 150
// When 50 or fewer characters remain, turn the counter orange
// When 0 or fewer characters remain, turn the counter red and add a red border to the textarea
// Disable the submit button when over the limit
// When back under the limit, restore everything to normal

// script.js
const input = document.getElementById('input');
const remaining = document.getElementById('remaining');
const submitBtn = document.getElementById('submit-btn');
const MAX = 150;


input.addEventListener('input',()=>{
    const updatedValue = Max -input.value.length
    remaining.textContent = updatedValue
    if (updatedValue<=0) {
        remaining.classList.add('danger')
        return
    }
    if (updatedValue<50) {
        remaining.classList.add('warning')
        return;
    }
    if (updatedValue>MAX) {
        input.classList.add('over-limit')
        input.disabled =true
        return
    }
        
        remaining.disabled=false;
        remaining.classList.remove('warning')
        remaining.classList.remove('danger')
        input.classList.remove('over-limit')
    

})


// YOUR CODE HERE


// /* style.css */
// .over-limit {
//   border: 2px solid red;
// }

// .warning {
//   color: orange;
// }

// .danger {
//   color: red;
// }