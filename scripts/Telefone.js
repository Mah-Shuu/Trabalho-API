function stopAudio() {
    const audio = document.getElementById('audio');
    const button = document.getElementById('stopButton');

    // Pausa o áudio
    audio.pause();

    // Esconde o botão
    button.style.display = 'none';
}