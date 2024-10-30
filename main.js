function createStars() {
  const starsCount = 150;
  for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.width = `${Math.random() * 3 + 1}px`;
      star.style.height = star.style.width;
      star.style.animationDelay = `${Math.random() * 3}s`;
      document.body.appendChild(star);
  }
}

function createFlowers() {
    const flowersContainer = document.querySelector('.flowers');
    const flowerTemplate = document.querySelector('.flower--1').cloneNode(true);
    
    // Valores ajustados para usar más espacio de la página
    const positions = [
        { x: 10, count: 5, baseHeight: 3 },     // Primer grupo más a la izquierda
        { x: 35, count: 5, baseHeight: 4 },     // Segundo grupo
        { x: 65, count: 5, baseHeight: 3 },     // Tercer grupo
        { x: 90, count: 5, baseHeight: 4 }      // Cuarto grupo más a la derecha
    ];

    let flowerCount = 4;
    positions.forEach(group => {
        for (let i = 0; i < group.count; i++) {
            const newFlower = flowerTemplate.cloneNode(true);
            newFlower.className = `flower flower--${flowerCount}`;
            
            const offsetX = (Math.random() * 15) - 7.5;
            const offsetY = (Math.random() * 12);
            const rotation = (Math.random() * 20) - 10;
            
            newFlower.style.left = `${group.x + offsetX}%`;
            newFlower.style.bottom = `${group.baseHeight + offsetY}vmin`;
            newFlower.style.transform = `rotate(${rotation}deg)`;
            
            const growingGrass = document.createElement('div');
            growingGrass.className = 'growing-grass';
            
            const grassHTML = `
                <div class="flower__grass flower__grass--1">
                    <div class="flower__grass--top"></div>
                    <div class="flower__grass--bottom"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--1"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--2"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--3"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--4"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--5"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--6"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--7"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--8"></div>
                    <div class="flower__grass__overlay"></div>
                </div>
                <div class="flower__grass flower__grass--2">
                    <div class="flower__grass--top"></div>
                    <div class="flower__grass--bottom"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--1"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--2"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--3"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--4"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--5"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--6"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--7"></div>
                    <div class="flower__grass__leaf flower__grass__leaf--8"></div>
                    <div class="flower__grass__overlay"></div>
                </div>`;
                
            growingGrass.innerHTML = grassHTML;
            newFlower.appendChild(growingGrass);
            flowersContainer.appendChild(newFlower);
            flowerCount++;
        }
    });
}

function initAudio() {
  const audio = document.getElementById('backgroundMusic');
  audio.volume = 0.5;
  
  // Intentar reproducir inmediatamente
  const playPromise = audio.play();
  
  if (playPromise !== undefined) {
      playPromise.catch(error => {
          // Auto-play fue prevenido
          // Mostrar un botón de play o reproducir en el primer clic
          document.addEventListener('click', () => {
              audio.play();
          }, { once: true });
      });
  }
}

window.onload = () => {
  createStars();
  createFlowers();
  initAudio();
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);
};