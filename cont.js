const botoes = document. querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');

for (let x  =0; x<botoes.length; x++){
    console.log(x)
    botoes[x].onclick = function () {
        for(let y = 0; y< botoes.length;  y++){
            botoes[y].classList.remove('ativo');
            textos[y].classList.remove('ativa');
        }
            botoes[x].classList.add('ativo'); 
            textos[x].classList.add('ativa');    

     // botoes[x].classList.remove('ativo');
    }
}

const contadores = document.querySelectorAll('.contador');
let tempoAtual = new Date ();
let tempoObjetivo1 = new Date('2024-04-29T00:00:00');
let TempoFinal = tempoObjetivo1 - tempoAtual;
let segundos = Math.floor (TempoFinal/1000);
let minutos = Math.floor (segundos/60);
let horas = Math.floor (minutos/60);    
let dias = Math.floor (horas/24)
segundos %= 60;
minutos %= 60;
horas %=24;



contadores [0].textContent = dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos " ;