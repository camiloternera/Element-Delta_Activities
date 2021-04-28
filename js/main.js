// Variables globales
var username = document.querySelector(".login__username");
var password = document.querySelector(".login__password");
var btnLogin = document.querySelector(".login__boton");
var inform = document.querySelector(".informacion");
var contentLogin = document.querySelectorAll(".login__view"); 

// Capturar evento click del boton
btnLogin.addEventListener("click", validationForm);

//Funcion de validación
function validationForm() {
  username.style.border = "1px solid rgb(26, 26, 26)";
  password.style.border = "1px solid rgb(26, 26, 26)";
  let alertText = "";

  if (username.value.length == 0 && password.value.length == 0) {
    //Si ambos estan vacios
    username.style.border = "1px solid red";
    password.style.border = "1px solid red";
    alertText = `<p>Los campos están vacios</p>`;
  } else if (username.value.length == 0) {
    //Si está vacio el username
    username.style.border = "1px solid red";
    alertText = `<p>EL username está vacio</p>`;
  } else if (password.value.length == 0) {
   //   Si está vacio la password
    password.style.border = "1px solid red";
    alertText = `<p>La contraseña está vacia</p>`;
  } else if (username.value == "Diego" && password.value == "1234") {
   //   Logeo correcto
    username.style.border = "1px solid green";
    password.style.border = "1px solid green";
    for(let i = 0; i<contentLogin.length; i++)contentLogin[i].style.display = "none"; 
    obtencionDatos();
  } else if (username.value != "Diego" && password.value != "1234") {
   //   Si los datos son incorrectos
    username.style.border = "1px solid red";
    password.style.border = "1px solid red";
    alertText = `<p>Los datos son incorrectos</p>`;
  } else if (username.value != "Diego") {
    username.style.border = "1px solid red";
    password.style.border = "1px solid red";
    alertText = `<p>El nombre y/o contraseña son incorrectos</p>`;
  } else if (password.value != "1234") {
    password.style.border = "1px solid red";
    alertText = `<p>La contraseña es erronea</p>`;
  }
  inform.innerHTML = alertText;
}

//Adquieriendo datos de la API en formato JSON
async function obtencionDatos() {
   const url = 'https://jsonplaceholder.typicode.com/users';
   const result = await fetch(url);
   const datos = await result.json();
   const users = datos[0];
   // console.log(users);
   alertText = `<p><b>Name: </b>${users.name}</p>
                <p><b>Username: </b>${users.username}</p>
                <p><b>Email: </b>${users.email}</p>
   `;
   inform.innerHTML = alertText;
}