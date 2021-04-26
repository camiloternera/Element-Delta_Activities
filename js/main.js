var username = document.querySelector(".username"); 
var password = document.querySelector(".password"); 
var btnLogin = document.querySelector(".login__boton"); 
var inform = document.querySelector(".informacion");




btnLogin.addEventListener('click', ()=>{
   username.style.border = "1px solid black"
   password.style.border = "1px solid black"
   let alertText; 

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
  else if(username.value == "Diego" && password.value == "1234")
  {
   username.style.border = "1px solid green";
   password.style.border = "1px solid green";
   alertText = `<p>Usuario validado</p>`

  }  
  else if(username.value != "Diego" && password.value != "1234")
  {
   username.style.border = "1px solid red";
   password.style.border = "1px solid red";
   alertText = `<p>Los datos son incorrectos</p>`
  } 
  else if(username.value != "Diego")
  {
  username.style.border = "1px solid red";
  password.style.border = "1px solid red";
  alertText = `<p>El nombre y/o contraseña son incorrectos</p>`

  }
  else if(password.value != "1234") 
  {
     password.style.border = "1px solid red";
     alertText = `<p>La contraseña es erronea</p>`


  }  

 
   inform.innerHTML = alertText; 

})