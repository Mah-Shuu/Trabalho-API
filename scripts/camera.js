const camera = document.getElementById("camera");
const botao = document.getElementById("botaoCamera");
const video = document.getElementById("static");
const main = document.getElementById("main");
const mapa = document.getElementById("mapa");

botao.addEventListener("mouseover",function(){
    if (camera.className == "camera close"){
        camera.className = "camera open"
        setTimeout(() => {video.style.display = "block"},600)
        setTimeout(() => {camera.style.visibility = "hidden"},1000)
        setTimeout(() => {mapa.style.visibility = "visible"},1000)
        setTimeout(() => {main.style.border = "2px solid #fff"},1000)
        setTimeout(() => {video.style.display = "none"},2500)
    }else{
        video.style.display = "block"
        setTimeout(() => {camera.style.visibility = "visible"},1000)
        setTimeout(() => {mapa.style.visibility = "hidden"},1000)
        setTimeout(() => {main.style.border = "0"},1000)
        setTimeout(() => {video.style.display = "none"},2500)
        setTimeout(() => {camera.className = "camera close"}, 1800)
    }
});