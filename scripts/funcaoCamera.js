const stage = document.getElementById("cam1");
const pirateCove = document.getElementById("cam2");
const closet = document.getElementById("cam3");
const restroom = document.getElementById("cam4");
const body = document.getElementsByTagName("body")[0];
const mapText = document.getElementById("mapText");

stage.addEventListener("click",function(){
    animationStaticFast();
    switchImageRaposa();
    switchImageCoelho();
    switchImagePato();
    jumpscare()
    body.className = "body stage";
    mapText.innerHTML = "Show Stage"
    urso.style.visibility = "visible";
    raposa.style.visibility = "hidden";
    coelho.style.visibility = "hidden";
    pato.style.visibility = "hidden";
})
pirateCove.addEventListener("click",function(){;
    animationStaticFast();
    switchImageCoelho();
    switchImagePato();
    switchImageUrso();
    jumpscare()
    body.className = "body pirate-cove";
    mapText.innerHTML = "Pirate Cove"
    raposa.style.visibility = "visible";
    urso.style.visibility = "hidden";
    coelho.style.visibility = "hidden";
    pato.style.visibility = "hidden";
})
closet.addEventListener("click",function(){
    animationStaticFast();
    switchImageRaposa();
    switchImagePato();
    switchImageUrso();
    jumpscare()
    body.className = "body closet";
    mapText.innerHTML = "Supply Closet"
    coelho.style.visibility = "visible";
    raposa.style.visibility = "hidden";
    urso.style.visibility = "hidden";
    pato.style.visibility = "hidden";
})
restroom.addEventListener("click",function(){
    animationStaticFast();
    switchImageRaposa();
    switchImageCoelho();
    switchImageUrso();
    jumpscare()
    body.className = "body restroom";
    mapText.innerHTML = "Restrooms"
    pato.style.visibility = "visible";
    raposa.style.visibility = "hidden";
    coelho.style.visibility = "hidden";
    urso.style.visibility = "hidden";
})

