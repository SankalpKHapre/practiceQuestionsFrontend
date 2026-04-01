// <!-- index.html — they give you this -->
// <div id="root">
//   <div class="left">
//     <div class="input-container">
//       <label>First name</label>
//       <input type="text" name="firstName" id="firstName" />
//       <!-- TODO: error message for first name -->
//     </div>

//     <div class="input-container">
//       <label>Last Name</label>
//       <input type="text" name="lastName" id="lastName" />
//       <!-- TODO: error message for last name -->
//     </div>

//     <!-- TODO: duplicate user error message (shown above button) -->
//     <button id="submitBtn">Submit</button>
//   </div>

//   <div class="right">
//     <h3>User List</h3>
//     <ol id="user-list"></ol>
//   </div>
// </div>


// script.js — they give you this, you fill in the TODOs
const users=[]
function isValid(value) {
  if (value === undefined || value === null || value.length === 0) {
    return false;
  }
  return true;
}

const submitBtn = document.getElementById('submitBtn');
const inputfirstName = document.getElementById('firstName')
const inputLastName = document.getElementById('lastName')

submitBtn.onclick = () => {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  document.querySelectorAll('.error').forEach((e)=>e.remove())
  inputfirstName.style.border=''
  inputLastName.style.border=''

  // they already have this — basic guard
  if (!isValid(firstName) || !isValid(lastName)) {
      if (!isValid(firstName)) {
            const div = document.createElement('div')
            div.textContent='Invalid firstName'
            div.className = 'error';
            inputfirstName.style.border = '2px solid red';
            inputfirstName.after(div)
        }
        if (!isValid(lastName)) {
            const div = document.createElement('div')
            div.textContent='Invalid lastName'
            div.className = 'error';
            inputLastName.style.border = '2px solid red';
            inputLastName.after(div)
    }
    return;
  }

  const fullName = `${firstName} ${lastName}`

    if (users.includes(fullName.toLowerCase())) {
        const div = document.createElement('div')
        div.textContent= 'User already Exists'
        submitBtn.before(div)
        inputfirstName.value=''
        inputLastName.value=''
        
        return
    }
  

  const userList = document.getElementById('user-list');
  const newUser = document.createElement('li');
  newUser.innerText = `${firstName} ${lastName}`;
  users.push(fullName.toLowerCase())
  userList.appendChild(newUser);
};