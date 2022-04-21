// Declaración de constantes - elementos
const inputTexto = document.getElementById('input-texto');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const inputResultado = document.getElementById('mensaje-texto');
const btnCopiar = document.getElementById('btn-copy');
const soloLetras ='^[a-z !ñ]+$';

// Eventos a escuchar 
document.addEventListener('DOMContentLoaded', () => {
  btnEncriptar.addEventListener('click', encriptarTexto);
  btnDesencriptar.addEventListener('click', desencriptarTexto);
  btnCopiar.addEventListener('click', copiarTexto);
});

function encriptarTexto(e) { // Declaración de función que encripta el texo
  e.preventDefault(); // Declaración de método
  inputResultado.value = ''; // Resultado de la entrada
  let texto = inputTexto.value; // Variable igual a la entrada de texto
  
  if(texto.match(soloLetras)!=null){ // Condicional de escritura coincidentes
    let palabras = texto.split(' '); // variable 
    let nuevasPalabras = []; // variable para matriz de caractéres
    
    for (let palabra of palabras) { // Ciclo tipo de palabras e intecambios
      palabra = palabra.replaceAll('e','enter');
      palabra = palabra.replaceAll('i','imes');
      palabra = palabra.replaceAll('a','ai');
      palabra = palabra.replaceAll('o','ober');
      palabra = palabra.replaceAll('u','ufat');      
      
      nuevasPalabras.push(palabra);   // encriptación de texto ingresado 
    }

    const resultado = nuevasPalabras.join(' '); // variable
    
    inputResultado.value = resultado;
  } else { // Mostrar error si no cumple condiciones
    mostrarError('Solo se permiten letras minúsculas, sin acentos');
    return;
  }  
}

function desencriptarTexto(e) { // función para desencriptar texto
  e.preventDefault();  
  inputResultado.value = '';
  let texto = inputTexto.value;

  if(texto.match(soloLetras)!=null){
    let palabras = texto.split(" ");
    let nuevasPalabras = [];    

    for (let palabra of palabras) {
      palabra = palabra.replaceAll('enter','e');
      palabra = palabra.replaceAll('imes','i');
      palabra = palabra.replaceAll('ai','a');
      palabra = palabra.replaceAll('ober','o');
      palabra = palabra.replaceAll('ufat','u');
      nuevasPalabras.push(palabra);    
    }

    const resultado = nuevasPalabras.join(' ');
    
    inputResultado.value = resultado;
  } else {
    mostrarError('Solo se permiten letras minúsculas, sin acentos');
    return;
  }  
}

function mostrarError(mensaje) {
  const existeError = document.querySelector('.error');
  
  if(!existeError) {
      const formulario = document.getElementById('formulario');
      const divMensaje = document.createElement('div');
      divMensaje.classList.add('error');
  
      divMensaje.textContent = mensaje;            
      formulario.appendChild(divMensaje);
      
      setTimeout(()=> {
          divMensaje.remove();
      }, 3000);
  }
}

function copiarTexto(e) {
    e.preventDefault(); 
    const mensaje = inputResultado.value;

    navigator.clipboard.writeText(mensaje);
}