/* ----Traigo los elementso del HTML */
const inputNombre = document.getElementById("inputName");
const inputContra = document.getElementById("inputContra");
const inputDireccion = document.getElementById("inputDireccion");
const inputEmail = document.getElementById("inputEmail");
const checkMasculino = document.getElementById("radioMasc");
const checkFemenino = document.getElementById("radioFem");
const listaCarreras = document.getElementById("exampleFormControlSelect1")
const botonEnviar = document.getElementById("buttonEnviar");

/* Avisos */
const avisoNombre = document.querySelector(".avisoNombre");
const avisoPass = document.querySelector(".avisoPass");
const avisoMail = document.querySelector(".avisoMail");
const avisoGenero = document.querySelector(".avisoSexo");
const avisoCarrera = document.querySelector(".avisoCarrera")

let evento = (e) => {
  e.preventDefault();
  let decimal = "^(?=.*d).{4,8}$";
  let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let valido = true;

  if (inputNombre.value.length < 2) {
    avisoNombre.style.display = "block";
    inputNombre.style.border = "1px solid red"
    valido = false;
  } else {
    avisoNombre.style.display = "none";
    inputNombre.style.border = ""
  }
  if (!inputContra.value.match(decimal)) {
    avisoPass.style.display = "block";
    valido = false;
    inputContra.style.border = "1px solid red"
  } else {
    avisoPass.style.display = "none";
    inputContra.style.border = ""
  }
  if (!validEmail.test(inputEmail.value.trim())) {
    avisoMail.style.display = "block";
    inputEmail.style.border = "1px solid red"
    valido = false;
  } else {
    avisoMail.style.display = "none";
    inputEmail.style.border = ""
  }
  if (!checkMasculino.checked && !checkFemenino.checked) {
    avisoGenero.style.display = "block";
    valido = false;
  } else {
    avisoGenero.style.display = "none";
  }
  if (listaCarreras.value == 0) {
    avisoCarrera.style.display ="block"
    valido = false;
  } else {
    avisoCarrera.style.display ="none"
  }
  if (valido) {
    alert("Datos ingresados correctamente")
    
  } else{
    alert("Faltan datos por completar")
  }
};

botonEnviar.addEventListener("click", evento);
