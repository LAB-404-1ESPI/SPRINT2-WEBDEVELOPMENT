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