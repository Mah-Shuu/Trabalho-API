const relogio = document.getElementById("hour");
const noite = document.getElementById("days");
noiteNum = 2;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function nextNight(){
    if (noiteNum==8){
        return "Venceu!"
    }
    relogio.innerHTML = "12 AM";
    noite.innerHTML = `Night ${noiteNum}`;
    noiteNum++
    timeFlow();
}

async function timeFlow(){
    for (let hora = 1; hora != 7; hora++) {
        await sleep(90000);
        relogio.innerHTML = `${hora} AM`;
    }
    await sleep(5000)
    nextNight();
}

timeFlow();

