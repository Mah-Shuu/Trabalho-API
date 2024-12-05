setInterval(() => {
    const camera = document.querySelector('.camera');
    const intensity = Math.random() * 0.5 + 0.5;
    camera.style.opacity = intensity;
  }, 1000);