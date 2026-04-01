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

// script.js
const headers = document.querySelectorAll('.header');

headers.forEach((header)=>{
    header.addEventListener('click',()=>{
        
        // to close ALL content panels:
        document.querySelectorAll('.content').forEach(c => c.classList.remove('open'));
        header.nextElementSibling.classList.add('open')

})
})
// TODO: clicking a header should open its content
// and close all other open sections