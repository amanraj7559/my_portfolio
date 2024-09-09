const cells = document.querySelectorAll('.cell');
const message = document.querySelector('#message');
let currentPlayer = 'X';

function handleClick(event) {
  const cell = event.target;
  if (cell.textContent === '') {
    cell.textContent = currentPlayer;
    // Check for win or draw
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
