// <!-- index.html -->
// <div class="container">
//   <textarea id="input" placeholder="Type something..."></textarea>
//   <p>Characters remaining: <span id="remaining">100</span></p>
//   <button id="submit-btn">Submit</button>
// </div>

// script.js
const input = document.getElementById('input');
const remaining = document.getElementById('remaining');
const submitBtn = document.getElementById('submit-btn');
const MAX = 100;

input.addEventListener('input',()=>{
    const remainingChar = MAX -input.value.length
    remaining.innerText =remainingChar;
    submitBtn.disabled = remaining<0
    if (remainingChar < 0) {
        input.classList.add('over-limit');
    } else {
        input.classList.remove('over-limit');
    }

    // red counter when 20 or below:
    if (remainingChar <= 20) {
        remaining.classList.add('danger');
    } else {
        remaining.classList.remove('danger');
    }
})


// TODO 1: as user types, update remaining characters count
// TODO 2: when over the limit, add red border to textarea
// TODO 3: disable submit button when over the limit
// TODO 4: when remaining hits 20 or below, turn the counter text red

// /* style.css */
// .over-limit {
//   border: 2px solid red;
// }

// #remaining.danger {
//   color: red;
// }