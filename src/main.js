const dino = document.getElementById('dinosour');

const jumpDino = () => {
  if (dino.classList !== 'jumping') {
    dino.classList.add('jump');
    setTimeout(() => {
      dino.classList.remove('jump');
    }, 5000);
  }
};

let isAlive = setInterval(() => {
  // const dinoTop = dino.offsetTop;
  // const cactusTop = document.getElementById('cactus').offsetTop;
  // const cactusleft = document.getElementById('cactus').offsetLeft;

  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'), 10);
  let cactusleft = parseInt(window.getComputedStyle(dino).getPropertyValue('left'), 10);
  if (cactusleft < 50 && cactusleft > 0 && dinoTop >= 140) {
    alert('Game Over');
  }
}, 100);

document.addEventListener('keydown', jumpDino);
