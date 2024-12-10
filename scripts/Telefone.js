function initializeAudio() {
    const interactionPrompt = document.getElementById('interactionPrompt');
    const audio = document.getElementById('audio');
    const stopButton = document.getElementById('stopButton');

    // Esconde o botão de interação inicial
    interactionPrompt.style.display = 'none';

    // Inicia o áudio após 5 segundos
    setTimeout(() => {
        audio.play()
            .then(() => {
                // Exibe o botão de parar quando o áudio começa a tocar
                stopButton.style.display = 'block';
            })
            .catch(error => {
                console.error('Erro ao reproduzir o áudio:', error);
            });
    }, 5000);
}

function stopAudio() {
    const audio = document.getElementById('audio');
    const stopButton = document.getElementById('stopButton');

    // Pausa o áudio
    audio.pause();

    // Esconde o botão
    stopButton.style.display = 'none';
}
