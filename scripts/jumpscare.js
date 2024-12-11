let jumpChance = 0;
const freddyJump = document.getElementById("freddyJump");
const bonnieJump = document.getElementById("bonnieJump");
const chicaJump = document.getElementById("chicaJump");
const foxyJump = document.getElementById("foxyJump");

function getChance(){
    jumpChance = Math.floor(Math.random() * 200);
}

function jumpscareFreddy(){
    getChance();
    if (jumpChance == 1){
        console.log(jumpChance)
    }
}