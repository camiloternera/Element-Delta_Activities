<<<<<<< HEAD
let username = document.querySelector(".username"); 
let password = document.querySelector(".password"); 
let btnLogin = document.querySelector(".login__boton"); 
let inform = document.querySelector(".informacion");

let usernameCheck = "Bret"



btnLogin.addEventListener('click', ()=>{
   username.style.border = "1px solid black"
   password.style.border = "1px solid black"
   let alertText = ""; 

  if(username.value.length == 0 && password.value.length == 0)
  {
   username.style.border = "1px solid red";
   password.style.border = "1px solid red";
   alertText = `<p>Los campos están vacios</p>`
  }
  else if(username.value.length == 0)
  { username.style.border = "1px solid red";
    alertText = `<p>EL username está vacio</p>`
  }
  else if(password.value.length == 0) 
  {password.style.border = "1px solid red";
  alertText = `<p>La contraseña está vacia</p>`
  }
  else if(username.value == usernameCheck  && password.value == "1234")
  {
   username.style.border = "1px solid green";
   password.style.border = "1px solid green";
   GetDataApi(usernameCheck); 


  }  
  else if(username.value != usernameCheck  && password.value != "1234")
  {
   username.style.border = "1px solid red";
   password.style.border = "1px solid red";
   alertText = `<p>Los datos son incorrectos</p>`
  } 
  else if(username.value != usernameCheck )
  {
  username.style.border = "1px solid red";
  password.style.border = "1px solid red";
  alertText = `<p>El nombre y/o contraseña son incorrectos</p>`

  }
  else if(password.value != usernameCheck ) 
  {
     password.style.border = "1px solid red";
     alertText = `<p>La contraseña es erronea</p>`


  }  
   inform.innerHTML = alertText; 

})

const GetDataApi = (nombre)=>{

    fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json() )
   .then(datos =>{
    if(datos){
         location.href = "dashboard.html";
         alert(datos[0].name)

      }
    
    })


 

=======
// Variables globales
var username = document.querySelector(".username");
var password = document.querySelector(".password");
var btnLogin = document.querySelector(".login__boton");
var inform = document.querySelector(".informacion");

// Capturar evento click del boton
btnLogin.addEventListener("click", validationForm);

//Funcion de validación
function validationForm() {
  username.style.border = "1px solid black";
  password.style.border = "1px solid black";
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
>>>>>>> 8cb219e4ef198f18fcad1dcac4717cd9fd2c58d9
}