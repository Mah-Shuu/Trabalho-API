setTimeout(() => {
    const audio = document.getElementById('audio');
    const button = document.getElementById('stopButton');

    // Toca o áudio
    audio.play();

    // Exibe o botão
    button.style.display = 'block';
}, 5000);

function stopAudio() {
    const audio = document.getElementById('audio');
    const button = document.getElementById('stopButton');

    // Pausa o áudio
    audio.pause();

    // Esconde o botão
    button.style.display = 'none';
}