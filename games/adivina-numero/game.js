const form = document.querySelector('#guess-form');
const input = document.querySelector('#guess');
const message = document.querySelector('#message');
const attemptsLabel = document.querySelector('#attempts');
const resetButton = document.querySelector('#reset');

let secretNumber;
let attempts;
let finished;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  finished = false;
  attemptsLabel.textContent = attempts;
  message.textContent = 'Introduce un número para empezar.';
  message.className = 'message';
  input.disabled = false;
  input.value = '';
  input.focus();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (finished) return;

  const guess = Number(input.value);
  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Escribe un número entero entre 1 y 100.';
    message.className = 'message hint';
    return;
  }

  attempts += 1;
  attemptsLabel.textContent = attempts;

  if (guess === secretNumber) {
    message.textContent = `¡Exacto! Has encontrado el número en ${attempts} ${attempts === 1 ? 'intento' : 'intentos'}.`;
    message.className = 'message success';
    finished = true;
    input.disabled = true;
  } else if (guess < secretNumber) {
    message.textContent = 'Demasiado pequeño. Prueba con un número mayor.';
    message.className = 'message hint';
  } else {
    message.textContent = 'Demasiado grande. Prueba con un número menor.';
    message.className = 'message hint';
  }
  input.select();
});

resetButton.addEventListener('click', startGame);
startGame();
