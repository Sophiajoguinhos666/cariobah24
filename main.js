alert('Ola mundo');
let nomeusuario = "";
let anterior = document.querySelector('#texto');

while(nomeusuario == ""){
    nomeusuario = prompt('Qual o seu nome?');
}

if(nomeusuario == null){
    anterior = document.querySelector('#texto');
} else{nterior.textContent = nomeusuario;

}

anterior.textContent = nomeusuario;