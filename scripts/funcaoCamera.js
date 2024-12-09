const stage = document.getElementById("cam1");
const pirateCove = document.getElementById("cam2");
const closet = document.getElementById("cam3");
const restroom = document.getElementById("cam4");
const cam2a = document.getElementById("cam5");
const body = document.getElementsByTagName("body")[0];
const mapText = document.getElementById("mapText");

stage.addEventListener("click",function(){
    animationStaticFast();
    switchImageRaposa();
    switchImageCoelho();
    switchImagePato();
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
    body.className = "body restroom";
    mapText.innerHTML = "Restrooms"
    pato.style.visibility = "visible";
    raposa.style.visibility = "hidden";
    coelho.style.visibility = "hidden";
    urso.style.visibility = "hidden";
})

// corredor =====
// cam2a.addEventListener("click",function(){
//     body.className = "body cam2a";
//     mapText.innerHTML = "corredor"
//     pato.style.visibility = "visible";
//     raposa.style.visibility = "hidden";
//     coelho.style.visibility = "hidden";
//     urso.style.visibility = "hidden";
// })
// Definindo as imagens de fundo possíveis
const imagensDeFundo = [
    "url('../images/fnaf-background/left0.jpg')", // Imagem base
    "url('../images/fnaf-background/left1.png')", // Imagem evento 1
    "url('../images/fnaf-background/left2.jpg')"  // Imagem evento 2
];

// Variável para armazenar a imagem base
const primeiraImagem = imagensDeFundo[0];

// Função para gerar uma imagem aleatória
function gerarImagemAleatoria() {
    const indexAleatorio = Math.floor(Math.random() * (imagensDeFundo.length - 1)) + 1; // Exclui a imagem base
    return imagensDeFundo[indexAleatorio];
}

// Função para mudar a imagem de fundo
function mudarFundo(imagem) {
    cam2a.style.backgroundImage = imagem;
}

// Evento de clique no primeiro botão (para mudar a imagem de fundo)
 // Exemplo de id do botão
cam2a.addEventListener("click", function() {
    // Muda a classe do body e o texto do mapa
    body.className = "body cam2a";
    mapText.innerHTML = "Corredor";
    
    // Exibe o pato e esconde os outros personagens
    pato.style.visibility = "visible";
    raposa.style.visibility = "hidden";
    coelho.style.visibility = "hidden";
    urso.style.visibility = "hidden";
    
    // Verifica a chance de mudar o fundo
    const chance = 0.5; // 50% de chance de mudar o fundo
    if (Math.random() <= chance) {
        // Se a chance for atingida, muda para uma imagem aleatória
        const imagemAleatoria = gerarImagemAleatoria();
        mudarFundo(imagemAleatoria);
    }
});

// Evento de clique no segundo botão (para voltar à imagem inicial)
const segundoBotao = document.getElementById('segundoBotao'); // Exemplo de id do botão
segundoBotao.addEventListener("click", function() {
    // Volta para a imagem inicial
    mudarFundo(primeiraImagem);
});