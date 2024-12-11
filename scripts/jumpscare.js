let jumpChance = 0;

function getChance(){
    jumpChance = Math.floor(Math.random() * 200);
}

function jumpscare(){
    getChance();
    if (jumpChance == 1){
        console.log(jumpChance)
    }
}