const matematica = document.getElementById("matematica")
const historia = document.getElementById("historia")
const geografia = document.getElementById("geografia")


matematica.addEventListener("click", function(){
    alert("Você escolheu Matemática")
    window.location.href = "./questoesmat.html"
})
historia.addEventListener("click", function(){
    alert("Você escolheu História")
    window.location.href = "./questoeshist.html"
})
geografia.addEventListener("click", function(){
    alert("Você escolheu Geografia")
    window.location.href = "./questoesgeo.html"
})  
