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


// script.js
const stars = document.querySelectorAll('.star');
const ratingDisplay = document.getElementById('rating-display');
let rating = 0;

function highlight(rating){
    stars.forEach((star,index)=>{
        if (index<rating) {
            star.classList.add('active')
        }else{
            star.classList.remove('active')

        }
    })
}
stars.forEach((star)=>{
    star.addEventListener('click',()=>{
        rating=star.dataset.value
        rating=i+1
        highlight(rating)
        ratingDisplay.textContent=rating
    })
    star.addEventListener('mouseenter',()=>{
        highlight(i+1)
    })
    star.addEventListener('mouseleave',()=>{
        highlight(rating)
    })

})


// TODO 1: clicking a star sets the rating and highlights it + all stars before it
// TODO 2: hovering a star previews the rating (highlights up to that star)
// TODO 3: moving mouse away restores the actual saved rating
// TODO 4: update the rating display text when clicked



/* style.css */
// .star {
//   font-size: 30px;
//   cursor: pointer;
//   color: gray;
// }

// .star.active {
//   color: gold;
// }