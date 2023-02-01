function encriptar (){
  var texto = document.querySelector(".text-area").value;
  var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  document.querySelector("#mensaje").value = textoCifrado;
  document.querySelector(".text-area").value;
  document.getElementById("mono").style.display = "none";
}

function desencriptar (){ 
  var texto = document.querySelector(".text-area").value; 
  var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector("#mensaje").value = textoCifrado; document.querySelector(".text-area").value;

}

const boton1 = document.querySelector('.btm-encriptar')
const boton2 = document.querySelector('.btm-desencriptar')

boton1.addEventListener("click",encriptar)
boton2.addEventListener("click",desencriptar)

// e - enter
// i - imes
// a - ai
// o - ober
// u - ufat

document.getElementById("copiar").addEventListener("click", function(){
  var textoEncriptado = document.getElementById("mensaje").value;
  navigator.clipboard.writeText(textoEncriptado);
});

document.getElementById("copiar").addEventListener("click", function(){
  var textoEncriptado = document.getElementById("mensaje").value;
  navigator.clipboard.writeText(textoEncriptado);
  var copyMessage = document.getElementById("mensaje-copiado");
  copyMessage.innerHTML = "Texto copiado al portapapeles!";
  copyMessage.style.color = "black";
  copyMessage.style.display = "block";
  setTimeout(function(){
  copyMessage.style.display = "none";
  }, 2000);
});