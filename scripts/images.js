const pato = document.getElementById("pato");
const urso = document.getElementById("urso");
const raposa = document.getElementById("raposa");
const coelho = document.getElementById("coelho");
const listaUrso = [200,300,400,500,600,700,800,900,1000];

async function switchImagePato(){
    const num = Math.floor(Math.random() * 291)
    const link = `https://random-d.uk/api/`+num+`.jpg`;
    pato.src = link;
}
async function switchImageUrso(){
    const comprimento = listaUrso[Math.floor(Math.random() * listaUrso.length)];
    const largura = listaUrso[Math.floor(Math.random() * listaUrso.length)];
    const link = "https://placebear.com/"+comprimento+"/"+largura+".jpg";
    urso.src = link;
}
async function switchImageRaposa(){
    const response = await fetch("https://randomfox.ca/floof/");
    const data = await response.json();
    raposa.src = data.image;
}
async function switchImageCoelho(){
    const num = Math.floor(Math.random() * 21)
    coelho.src = "./images/images-bonnie/"+num+".jpg";
}

switchImageRaposa();
switchImageCoelho();
switchImageUrso();
switchImagePato();