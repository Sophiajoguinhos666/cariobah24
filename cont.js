const botoes = document. querySelectorAll('.objetivos');


for (let x  =0; x<botoes.length; x++){
    console.log(x)
    botoes[x].onclick = function () {
     botoes[x].classList.add('ativo')

    }
}