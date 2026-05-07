const entrar = document.getElementById("entrar")

entrar.addEventListener("click", function(){

    const nome = document.getElementById("nome").value

    if(nome == ""){
        alert("Digite seu nome")
    } else {
        alert("Bem-vindo ao JOVIX")
    }

})

document.getElementById("home").style.display = "none"

document.getElementById("materias").style.display = "block"

const materia = prompt("Digite uma matéria")

alert("IA JOVIX identificou: " + materia)

const slide = document.getElementById("slide")
// exemplos de imagens
let imagens = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
]

let atual = 0

setInterval(function(){

    atual++

    if(atual >= imagens.length){
        atual = 0
    }

    slide.src = imagens[atual]

}, 2000)

alert("Resposta correta")