const camera = document.getElementById("camera");
const botao = document.getElementById("botaoCamera");

botao.addEventListener("mouseover",function(){
    if (camera.className == "camera close"){
        camera.className = "camera open"
        setTimeout(() => {})
        setTimeout(() => {camera.style.visibility = "hidden"},1000)
    }else{
        camera.style.visibility = "visible";
        setTimeout(() => {camera.className = "camera close"}, 700)
    }
});