const audio = document.getElementById('audio');
const button = document.getElementById('stopButton');

setTimeout(() => {

    // Toca o áudio
    audio.play();

    // Exibe o botão
    button.style.display = 'block';
}, 5000);

function stopAudio() {
    // Pausa o áudio
    audio.pause();

    // Esconde o botão
    button.style.display = 'none';
}