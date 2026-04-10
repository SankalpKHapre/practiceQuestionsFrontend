/*
1) accordion — Accordion UI
Question:
Implement an accordion where clicking a header opens its 
content panel and closes all other open panels. 

What the feature should do (as per TODO):
When a user clicks any .header, its next sibling content 
should open.
Any other .content panels that are open should be closed.

// <!-- index.html -->
// <div class="container">
//   <div class="accordion-item">
//     <button class="header">Section 1</button>
//     <div class="content">Content for section 1</div>
//   </div>

//   <div class="accordion-item">
//     <button class="header">Section 2</button>
//     <div class="content">Content for section 2</div>
//   </div>

//   <div class="accordion-item">
//     <button class="header">Section 3</button>
//     <div class="content">Content for section 3</div>
//   </div>
// </div>

const header = document.querySelectorForAll('.header')
header.forEach((item)=>{

    header.addEventListener('click',()=>{

        document.querySelectorAll('.content').forEach((item)=>{
            item.classList.remove('open')
        })
        item.nextElementSibling.classList.add('open')       

        })
    })




2) tabs — Tabs UI
Question:
Implement tab switching logic such that clicking a tab:

Highlights the clicked tab
Shows its matching panel
Hides all other panels 

(Also aligns with the CSS notes: .panel.active shows, 
otherwise hidden; .tab.active changes styling.)

<div class="tabs">
  <button class="tab" data-target="panel1">Tab 1</button>
  <button class="tab" data-target="panel2">Tab 2</button>
  <button class="tab" data-target="panel3">Tab 3</button>
</div>
<div id="panel1" class="panel">Content 1</div>
<div id="panel2" class="panel">Content 2</div>
<div id="panel3" class="panel">Content 3</div> 

//script
const tab = document.querySelectorAll('.tab')
const panel = document.querySelectorAll('.panel')

tab.forEach((item)=>{
    
    item.addEventListener('click',()=>{
        tab.forEach((item)=>item.classList.remove('actice'))
        panel.forEach((item)=>item.classList.remove('active'))     

        item.classList.add('active')
        const panelClass = item.dataset.target
        document.getElementById(`${panelClass}`).classList.add('active')
        })
    
    })


// .panel { display: none; }
// .panel.active { display: block; }
// .tab.active { background: dodgerblue; color: white; }

3) todoList — Todo List (Add / Delete / Complete)
Question:
Build a simple todo list where:
Clicking Add creates a new list item from the input text
Each item includes a Delete/Remove button to remove it
Clicking the item text toggles completed state (strikethrough style) 
(The file also shows the intended .completed CSS behavior.) 

    // <!-- index.html -->
    // <div class="container">
    //   <div class="input-container">
    //     <input type="text" id="todo-input" placeholder="Add a task..." />
    //     <button id="add-btn">Add</button>
    //   </div>
    //   <ul id="todo-list"></ul>
    // </div>

    // script.js

    

    // .completed {
    //   text-decoration: line-through;
    //   color: gray;
    // }


4) ratingDisplay — Star Rating (Click + Hover Preview)
Question:
Implement a 5-star rating component with the following behaviors:
Clicking a star sets the rating and highlights that star + 
all before it
Hovering a star previews the rating 
(temporary highlight up to that star)
Moving mouse away restores the saved rating highlight
Update the rating text display when clicked 

(Uses .star.active styling to show highlighted stars.) 
// <!-- index.html -->
// <div class="container">
//   <div id="stars">
//     <span class="star" data-value="1">★</span>
//     <span class="star" data-value="2">★</span>
//     <span class="star" data-value="3">★</span>
//     <span class="star" data-value="4">★</span>
//     <span class="star" data-value="5">★</span>
//   </div>
//   <p>Rating: <span id="rating-display">0</span></p>
// </div>

//Script


// .star {
//   font-size: 30px;
//   cursor: pointer;
//   color: gray;
// }

// .star.active {
//   color: gold;
// }


5) characterCounter — Character Counter with Validation
Question:
Implement a live character counter with max length MAX = 100:

As the user types, update “characters remaining”
When over the limit, add a red border to the textarea (.over-limit)
Disable the submit button when over the limit
When remaining is 20 or below, turn the counter text red 
(#remaining.danger) 

// <!-- index.html -->
// <div class="container">
//   <textarea id="input" placeholder="Type something..."></textarea>
//   <p>Characters remaining: <span id="remaining">100</span></p>
//   <button id="submit-btn">Submit</button>
// </div>

// script.js




// .over-limit {
//   border: 2px solid red;
// }

// #remaining.danger {
//   color: red;
// }



6) modal — Modal (Open/Close + Backdrop + Escape)
Question:
Implement a modal overlay with these controls:

Clicking Open Modal shows the overlay
Clicking X closes/hides it
Clicking the backdrop/overlay area closes it
Pressing Escape closes it

(Uses .hidden class to hide/show the overlay.) 
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

*/
