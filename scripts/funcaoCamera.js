// Seleciona o elemento body
const body = document.body;

// Função para alterar o fundo dinamicamente
function mudarFundo(caminhoImagem, descricao) {
    body.style.backgroundImage = `url(${caminhoImagem})`; // Atualiza o fundo
    mapText.innerHTML = descricao; // Atualiza o texto do mapa
}
// Seleciona os botões
const stage = document.getElementById("cam1");
const pirateCove = document.getElementById("cam2");
const closet = document.getElementById("cam3");
const restroom = document.getElementById("cam4");

// Atualiza o fundo e a descrição ao clicar nos botões
stage.addEventListener("click", function(){
    animationStaticFast();
    switchImageRaposa();
    switchImageCoelho();
    switchImageUrso();
    mudarFundo('./images/fnaf-background/stage.webp', 'Show Stage');
    urso.style.visibility = "visible";
    raposa.style.visibility = "hidden";
    coelho.style.visibility = "hidden";
    pato.style.visibility = "hidden";
});

pirateCove.addEventListener("click", function(){
    animationStaticFast();
    switchImageRaposa();
    switchImageCoelho();
    switchImageUrso();
    mudarFundo('./images/fnaf-background/Pirate_cove_nocamera.webp', 'Pirate Cove');
    urso.style.visibility = "visible";
    raposa.style.visibility = "hidden";
    coelho.style.visibility = "hidden";
    pato.style.visibility = "hidden";
});

closet.addEventListener("click", function(){
    animationStaticFast();    
    switchImageRaposa();
    switchImageCoelho();
    switchImageUrso();
    mudarFundo('./images/fnaf-background/closet.webp', 'Supply Closet');
    urso.style.visibility = "visible";
    raposa.style.visibility = "hidden";
    coelho.style.visibility = "hidden";
    pato.style.visibility = "hidden";
});

restroom.addEventListener("click", function(){
    animationStaticFast();
    switchImageRaposa();
    switchImageCoelho();
    switchImageUrso();
    mudarFundo('./images/fnaf-background/Restroom.webp', 'Restrooms');
    urso.style.visibility = "hidden";
    raposa.style.visibility = "visible";
    coelho.style.visibility = "hidden";
    pato.style.visibility = "hidden";
});
// cameras pricipais ja foram
co.addEventListener("click", function(){
    animationStaticFast();
    mudarFundo('./images/fnaf-background/Restroom.webp', 'Restrooms');
    urso.style.visibility = "hidden";
    raposa.style.visibility = "hidden";
    coelho.style.visibility = "hidden";
    pato.style.visibility = "hidden";
});