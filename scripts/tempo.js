const relogio = document.getElementById("hour");
const noite = document.getElementById("days");
const energia = document.getElementById("power-percentage");
let energiaNum = 999;
let noiteNum = 2;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function nextNight(){
    if (noiteNum==8){
        return "Venceu!"
    }
    relogio.innerHTML = "12 AM";
    energiaNum = 999;
    noite.innerHTML = `Night ${noiteNum}`;
    noiteNum++
    timeFlow();
}

async function energyDrain(){
    while(energiaNum != 0){
        await sleep(1000)
        energiaNum--
        energia.innerHTML = `${Math.floor(energiaNum/10)}%`
        console.log(energiaNum/10)
    }

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
energyDrain();