// <!-- They give you this HTML -->
// <div class="accordion">
//   <div class="item">
//     <button class="header">Section 1</button>
//     <div class="content">Content for section 1</div>
//   </div>
//   <div class="item">
//     <button class="header">Section 2</button>
//     <div class="content">Content for section 2</div>
//   </div>
// </div>

const headerAll = document.querySelectorAll('.header')
// const item = document.querySelectorAll('.item')

headerAll.forEach((items)=>{
    items.classList.remove('active')
    items.addEventListener('click',()=>{
        
        items.nextElementSibling.classList.add('active')
            
        
    })
})