var titulo = document.getElementsByTagName("title")[0].innerHTML
document.getElementById("titulo").innerHTML = titulo
        
var medexatas = document.querySelector(".medexatas")
var medhumanas = document.querySelector(".medhumanas")

const ns1 = document.querySelectorAll(".n1")
const ns2 = document.querySelectorAll(".n2")
var medias = document.querySelectorAll(".media")

for (let i = 0; i < medias.length; i++) {
    let n1 = Number(ns1[i].innerText)
    let n2 = Number(ns2[i].innerText)
    let media = (n1 + n2) / 2
    medias[i].innerText = `${media}`
}

const exatas = document.querySelectorAll(".exata")
var medgeralex = 0
for (let i = 0; i < exatas.length; i++) {
    medgeralex += Number(exatas[i].parentElement.querySelector(".media").innerText)
}
medexatas.innerHTML = (medgeralex/exatas.length).toFixed(1)

const humanas = document.querySelectorAll(".humanas")
var soma = 0
for (let i = 0; i < humanas.length; i++) {
    soma += Number(humanas[i].parentElement.querySelector(".media").innerText)
}
medhumanas.innerHTML = (soma/humanas.length).toFixed(1)