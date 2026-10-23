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
let userSequencia = [];
let sequencia = [];


function playSound(botao){
    botao.b_sound.play();
}
function animate(botao){
    botao.b_id.addClass("pressed");
    setTimeout(function(){
        botao.b_id.removeClass("pressed");
    },200);
}
function nextSequence(botoes,sequencia){
    let randomColor = Math.floor(Math.random()*botoes.length)
    sequencia.push(botoes[randomColor]);
    animate(sequencia[randomColor]);
    playSound(sequencia[randomColor]);
}

function userInput(botoes,userSequencia){
    for(let botao=0; botao<botoes.length;botao++){
        botoes[botao].b_id.on("click", function(){
            playSound(botoes[botao]);
            animate(botoes[botao]);
            userSequencia.push(botoes[botao])
        })
    }
}

$(document).on("keydown", function(event){
    if(event.key=="a"){
        nextSequence(botoes,sequencia);
    }
    userInput(botoes,userSequencia);
})



