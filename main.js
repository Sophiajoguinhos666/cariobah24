alert('Ola mundo');
let nomeusuario = "";
let anterior = document.querySelector('#texto');

while(nomeusuario == ""){
    nomeusuario = prompt('Qual o seu nome?');
}

anterior.textContent = nomeusuario;