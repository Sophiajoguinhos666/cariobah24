let numeroSecreto = Math.floor(Math.random()*69);
console.log(numeroSecreto) ;
let chute = '';


while(chute == ''){
    chute = prompt ('escolha um número de 0 a 100');
}

if(numeroSecreto == chute){
    alert( 'boa chefia' );
    console.log('parabens, acertou !!!');
}else{
 alert('errou, acéfalo');
 console.log(' seu infeliz');
}