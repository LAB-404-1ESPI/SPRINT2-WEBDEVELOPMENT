const entrar = document.getElementById("entrar")

entrar.addEventListener("click", function(){

    const nome = document.getElementById("nome").value

    if(nome == ""){
        alert("Digite seu nome")
    } else {
        alert("Bem-vindo ao JOVIX")
    }

})