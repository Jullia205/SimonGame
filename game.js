//DEFININDO O COMPORTAMENTO DE CADA BOTÃO

const verde = new Audio('./sounds/green.mp3');
const vermelho = new Audio('./sounds/red.mp3');
const amarelo = new Audio('./sounds/yellow.mp3');
const azul = new Audio('./sounds/blue.mp3');
const erro = new Audio('./sounds/wrong.mp3')

function Button (b_id, b_sound){
    this.b_id = b_id;
    this.b_sound = b_sound;
}

let green = new Button($("#green"),verde);
let red = new Button($("#red"),vermelho);
let yellow = new Button($("#yellow"),amarelo);
let blue = new Button($("#blue"),azul);
const botoes = [green,red,yellow,blue];

function playSound(botao){
    botao.b_sound.play();
}
function animate(botao){
    botao.b_id.addClass("pressed");
    setTimeout(function(){
        botao.b_id.removeClass("pressed");
    },200);
}
function newSequence(botoes){
    let sequencia = [];
    let randomLength = Math.floor(Math.random()*botoes.length)
    let number = 0;
    for(let i=0; i<randomLength;i++){
        number = Math.floor(Math.random()*botoes.length);
        sequencia.push(botoes[number]);
    }
    return sequencia;
}
function animateSequence(botoes){
    let timer = 300;
    let sequence = newSequence(botoes);
    for(let i=0; i<sequence.length;i++){
        setTimeout(function(){
            playSound(sequence[i]);
            animate(sequence[i]);
        },timer)
        timer=timer+300;
    }
}
for(let botao=0; botao<botoes.length;botao++){
    botoes[botao].b_id.on("click", function(){
        playSound(botoes[botao]);
        animate(botoes[botao]);
    })
}
$(document).on("keydown", function(event){
    if(event.key=="a"){
        animateSequence(botoes);
    }
})



