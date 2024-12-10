const chamada = document.createElement("audio");
const fonte = document.createElement("source");
const button = document.getElementById('stopButton');

fonte.src = "./sounds/phone-guy-fnaf-1-night-1-voice-lines-made-with-Voicemod.mp3";
fonte.type = "audio/mp3";

chamada.appendChild(fonte);
main.appendChild(chamada);

setTimeout(() => {
    chamada.play()
    chamada.onplay = function(){
        button.style.display = 'block';
    }
},3000)

function stopAudio() {
    // Pausa o áudio
    chamada.pause();

    // Esconde o botão
    button.style.display = 'none';
}

chamada.onended = function(){
    button.style.display = "none"
}