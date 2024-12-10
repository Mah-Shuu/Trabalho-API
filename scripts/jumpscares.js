// Função para exibir o jump scare
function showJumpScare() {
    const jumpscareDiv = document.getElementById('jumpscare');
    const jumpscareAudio = document.getElementById('jumpscareAudio');
    const infoText = document.getElementById('infoText');
    
    // Gera uma chance aleatória de 0 a 1
    const randomChance = Math.random();
    
    // Se a chance for menor que 0.2 (20%), ativa o jump scare
    if (randomChance < 1) {
        jumpscareDiv.style.display = 'flex';  // Torna o jump scare visível
        jumpscareAudio.play();  // Toca o áudio do jump scare
        infoText.innerText = "Jump Scare!";

        // Após 2 segundos, esconde o jump scare
        setTimeout(() => {
            jumpscareDiv.style.display = 'none';  // Esconde o jump scare
            infoText.innerText = "";
        }, 1000);
    }
}

// Verifica a cada segundo se o jump scare deve ser ativado
setInterval(showJumpScare, 1);