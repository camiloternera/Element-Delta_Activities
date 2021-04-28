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


 

}