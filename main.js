alert('Ola mundo');
let nomeusuario = "";
let anterior = document.querySelector('#texto');

while(nomeusuario == ""){
    nomeusuario = prompt('Qual o seu nome?');
}

if(nomeusuario == null){
    anterior.textContent = 'usuário';
} else{
    anterior.textContent = nomeusuario;
}

