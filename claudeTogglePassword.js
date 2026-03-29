// Toggle password visibility — clicking an eye icon shows/hides the password in an input.
// You have an input id 'password' (type=password) and a button id 'toggle'.

const toggle = document.getElementById("toggle");
const input = document.getElementById("password");
toggle.addEventListener('click',()=>{
    if(input.type == 'text'){
    input.type='password';
    }else{
    input.type = 'text'
    }
}
)
