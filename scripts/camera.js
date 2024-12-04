const camera = document.getElementById("camera");
const botao = document.getElementById("botaoCamera");

botao.addEventListener("click",function(){
    if (camera.style.display == "none"){
        camera.style.display = "flex"
        camera.style.animation = "slide-rotate-hor-bottom 0.18s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both"
    }else{
        camera.style.animation = "slide-rotate-hor-bottom 0.18s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        camera.style.display = "none"
    }
});