// Form validation
// You get a form with name, email, and password fields.
// Your job: show inline error messages when fields are invalid,
// and disable the submit button until everything is valid.
// Key concepts: input events, regex, DOM manipulation, disabled attribute.
// What they give you (HTML template)

// Copy
// <!-- They give you this HTML -->
// <form id="signup-form">
//   <input id="name" type="text" placeholder="Name" />
//   <span id="name-error" class="error"></span>

//   <input id="email" type="text" placeholder="Email" />
//   <span id="email-error" class="error"></span>

//   <input id="password" type="password" placeholder="Password" />
//   <span id="password-error" class="error"></span>

//   <button id="submit-btn" disabled>Submit</button>
// </form>


const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const submit = document.getElementById('submit-btn')


function validate(){

    let validate =true;

    if (name.value.length<2) {
        validate= false;

    }

}