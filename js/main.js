
//show or hidden password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#API_Secret');

togglePassword.addEventListener('click', function (e) {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

//check inputs of form are empty or not
const txtUserName = document.querySelector("#userName");
const txtAPI_Key = document.querySelector("#API_Key");
const txtAPI_Secret = document.querySelector("#API_Secret");
const btnSubmit = document.querySelector("#btn_Submit");
let error = document.getElementById("error");
const formInput = document.querySelectorAll('.form__input input');

btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();

    for (var i = 0; i < formInput.length; ++i) {
        if(formInput[i].value ==""){
            error.className = "show";
            error.innerHTML='Oopss , please fill the form  ⁦ಠ_ಠ⁩ ';
            setTimeout(function(){ error.className = error.className.replace("show", ""); }, 2000);
            return;
        }
        else{
            console.log(formInput[i].value);
        }  
    }

    

});