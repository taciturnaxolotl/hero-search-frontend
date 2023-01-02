const symbolsContainer = document.getElementById('symbols');

setInterval(() => {
  const symbol = document.createElement('div');
  symbol.innerHTML = '⚝';
  symbol.classList.add('symbol');

  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  const fontSize = Math.floor(Math.random() * 1) + 1; // Random number between 1 and 6

  symbol.style.left = `${x}px`;
  symbol.style.top = `${y}px`;
  symbol.style.fontSize = `${fontSize}rem`;

  symbolsContainer.appendChild(symbol);

  setTimeout(() => {
    symbol.remove();
  }, 3000);
}, 100);
