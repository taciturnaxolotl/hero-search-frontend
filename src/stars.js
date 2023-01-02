const symbolsContainer = document.getElementById('symbols');

setInterval(() => {
  const symbol = document.createElement('div');
  symbol.innerHTML = '⚝';
  symbol.classList.add('symbol');

  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  const fontSize = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  const rotation = Math.floor(Math.random() * 360); // Random number between 0 and 360

  symbol.style.left = `${x}px`;
  symbol.style.top = `${y}px`;
  symbol.style.fontSize = `${fontSize}rem`;
  symbol.style.transform = `rotate(${rotation}deg)`;

  symbolsContainer.appendChild(symbol);

  setTimeout(() => {
    symbol.remove();
  }, 1000);
}, 500);
