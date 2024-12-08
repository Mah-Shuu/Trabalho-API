const camera = document.getElementById("camera");
const botao = document.getElementById("botaoCamera");
const video = document.getElementById("static");
const effect = document.getElementById("static2");
const main = document.getElementById("main");
const sujeitos = document.getElementById("sujeitos");
const bola = document.getElementById("recording");
const map = document.getElementById("map")
const camText = document.getElementById("mapText");

function animationStatic(){
    video.style.display = "block"
    video.style.animation = "statica 2s both"
    setTimeout(() => {video.style.display = "none"},2000)
}
function animationStaticFast(){
    video.style.display = "block"
    video.style.animation = ""
    setTimeout(() => {video.style.display = "none"},500)
}

botao.addEventListener("mouseover",function(){
    if (camera.className == "camera close"){
        camera.className = "camera open"
        setTimeout(() => {animationStatic()},600)
        setTimeout(() => {camera.style.visibility = "hidden"},1000)
        setTimeout(() => {main.style.border = "3px solid #fff"},1000)
        setTimeout(() => {sujeitos.style.visibility = "visible"},1000)
        setTimeout(() => {urso.style.visibility = "visible"},1000)
        setTimeout(() => {camText.innerHTML = "Show Stage"},1000)
        setTimeout(() => {body.className = "body stage"},1000)
        setTimeout(() => {map.style.visibility = "visible"},1000) // aqui eu adicioner o map
        setTimeout(() => {bola.style.visibility = "visible"},1000)
        setTimeout(() => {effect.style.display = "block"},1000)
    }else{
        animationStatic();
        setTimeout(() => {camera.style.visibility = "visible"},1000)
        setTimeout(() => {sujeitos.style.visibility = "hidden"},1000)
        setTimeout(() => {map.style.visibility = "hidden"},1000) // aqui eu adicioner o map
        setTimeout(() => {bola.style.visibility = "hidden"},1000)
        setTimeout(() => {urso.style.visibility = "hidden"},1000)
        setTimeout(() => {coelho.style.visibility = "hidden"},1000)
        setTimeout(() => {raposa.style.visibility = "hidden"},1000)
        setTimeout(() => {pato.style.visibility = "hidden"},1000)
        setTimeout(() => {main.style.border = "0"},1000)
        setTimeout(() => {body.className = "body"},1000)
        setTimeout(() => {effect.style.display = "none"},1000)
        setTimeout(() => {camera.className = "camera close"}, 1800)
    }
});