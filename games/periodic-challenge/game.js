const TOTAL_QUESTIONS = 10;
const LEVELS = {
  easy: { label: 'FÁCIL', filter: e => e.z <= 20 },
  medium: { label: 'MEDIO', filter: e => e.z <= 56 || (e.z >= 72 && e.z <= 86) },
  hard: { label: 'DIFÍCIL', filter: () => true }
};
const MODES = {
  symbol: { question: '¿A qué elemento corresponde este símbolo?', hint: 'IDENTIFICA EL ELEMENTO' },
  number: { question: '¿Qué elemento tiene este número atómico?', hint: 'NÚMERO ATÓMICO' },
  name: { question: '¿Cuál es el símbolo de este elemento?', hint: 'ENCUENTRA EL SÍMBOLO' }
};

const screens = ['start', 'quiz', 'results'];
const $ = id => document.getElementById(id);
let elements = [];
let level = 'easy';
let mode = 'symbol';
let questions = [];
let index = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let correct = 0;
let answered = false;
let review = [];

function showScreen(name) {
  screens.forEach(screen => $(`screen-${screen}`).hidden = screen !== name);
}
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function promptFor(element) {
  if (mode === 'symbol') return element.symbol;
  if (mode === 'number') return String(element.z);
  return element.name;
}
function answerFor(element) {
  if (mode === 'name') return element.symbol;
  return element.name;
}
function makeQuestion(element, pool) {
  const distractors = shuffle(pool.filter(item => item.z !== element.z)).slice(0, 3);
  return { element, options: shuffle([element, ...distractors]) };
}
function startGame() {
  const pool = elements.filter(LEVELS[level].filter);
  questions = shuffle(pool).slice(0, TOTAL_QUESTIONS).map(element => makeQuestion(element, pool));
  index = score = streak = bestStreak = correct = 0;
  review = [];
  showScreen('quiz');
  renderQuestion();
}
function renderQuestion() {
  const question = questions[index];
  const element = question.element;
  answered = false;
  $('round-label').textContent = `PREGUNTA ${String(index + 1).padStart(2, '0')} / ${TOTAL_QUESTIONS}`;
  $('level-label').textContent = LEVELS[level].label;
  $('progress-bar').style.width = `${(index / TOTAL_QUESTIONS) * 100}%`;
  $('score').textContent = score;
  $('streak').textContent = streak;
  $('element-number').textContent = `#${element.z}`;
  $('element-category').textContent = element.category.toUpperCase();
  $('element-prompt').textContent = promptFor(element);
  $('element-prompt').classList.toggle('long-prompt', mode === 'name');
  $('element-hint').textContent = MODES[mode].hint;
  $('question-label').textContent = MODES[mode].question;
  $('feedback').textContent = 'Selecciona una respuesta.';
  $('feedback').className = 'feedback';
  $('next-button').hidden = true;
  $('streak-note').textContent = '+100 PUNTOS POR ACIERTO';
  $('options').innerHTML = question.options.map((option, i) => {
    const label = answerFor(option);
    return `<button class="option-button" type="button" data-z="${option.z}"><span class="option-letter">${'ABCD'[i]}</span><span>${escapeHtml(label)}</span></button>`;
  }).join('');
  $('options').querySelectorAll('button').forEach(button => button.addEventListener('click', () => chooseAnswer(Number(button.dataset.z))));
}
function chooseAnswer(selectedZ) {
  if (answered) return;
  answered = true;
  const question = questions[index];
  const target = question.element;
  const isCorrect = selectedZ === target.z;
  const selected = elements.find(element => element.z === selectedZ);
  if (isCorrect) {
    correct++;
    streak++;
    bestStreak = Math.max(bestStreak, streak);
    score += 100 + Math.max(0, streak - 1) * 25;
    $('feedback').textContent = `¡Correcto! ${target.name} (${target.symbol}), número atómico ${target.z}.`;
    $('feedback').className = 'feedback correct';
  } else {
    streak = 0;
    $('feedback').textContent = `No exactamente. Era ${target.name} (${target.symbol}), número atómico ${target.z}.`;
    $('feedback').className = 'feedback incorrect';
  }
  $('score').textContent = score;
  $('streak').textContent = streak;
  $('streak-note').textContent = isCorrect ? `RACHA × ${streak}` : 'RACHA INTERRUMPIDA';
  $('options').querySelectorAll('button').forEach(button => {
    const z = Number(button.dataset.z);
    button.disabled = true;
    if (z === target.z) button.classList.add('is-correct');
    else if (z === selectedZ) button.classList.add('is-wrong');
  });
  review.push({ target, selected, isCorrect });
  $('next-button').textContent = index === TOTAL_QUESTIONS - 1 ? 'Ver resultados' : 'Siguiente →';
  $('next-button').hidden = false;
}
function nextQuestion() {
  index++;
  if (index >= TOTAL_QUESTIONS) finishGame();
  else renderQuestion();
}
function finishGame() {
  showScreen('results');
  $('progress-bar').style.width = '100%';
  const accuracy = Math.round(correct / TOTAL_QUESTIONS * 100);
  const recordKey = `playground-periodic-record-${level}-${mode}`;
  const previous = Number(localStorage.getItem(recordKey) || 0);
  const record = Math.max(previous, score);
  localStorage.setItem(recordKey, String(record));
  $('result-title').textContent = correct === 10 ? '¡Tabla dominada!' : correct >= 7 ? '¡Muy buen resultado!' : correct >= 4 ? 'Buen intento.' : 'Hora de repasar.';
  $('result-subtitle').textContent = `${LEVELS[level].label} · ${MODES[mode].hint.toLowerCase()}`;
  $('final-score').textContent = score;
  $('correct-count').textContent = `${correct}/${TOTAL_QUESTIONS}`;
  $('accuracy').textContent = `${accuracy}%`;
  $('best-streak').textContent = bestStreak;
  $('personal-record').textContent = record;
  $('review-list').innerHTML = review.map((item, i) => `
    <div class="review-item ${item.isCorrect ? 'review-correct' : 'review-wrong'}">
      <span class="review-index">${String(i + 1).padStart(2, '0')}</span>
      <span class="review-symbol">${escapeHtml(item.target.symbol)}</span>
      <span class="review-name"><strong>${escapeHtml(item.target.name)}</strong><small>Z = ${item.target.z} · ${escapeHtml(item.target.category)}</small></span>
      <span class="review-mark">${item.isCorrect ? '✓' : '✕'}</span>
    </div>`).join('');
}

document.querySelectorAll('.difficulty').forEach(button => button.addEventListener('click', () => {
  level = button.dataset.level;
  document.querySelectorAll('.difficulty').forEach(item => item.classList.toggle('selected', item === button));
}));
document.querySelectorAll('.mode').forEach(button => button.addEventListener('click', () => {
  mode = button.dataset.mode;
  document.querySelectorAll('.mode').forEach(item => item.classList.toggle('selected', item === button));
}));
$('start-button').addEventListener('click', startGame);
$('next-button').addEventListener('click', nextQuestion);
$('play-again').addEventListener('click', () => { showScreen('start'); });

fetch('elements.json')
  .then(response => {
    if (!response.ok) throw new Error(`No se pudo cargar elements.json (${response.status})`);
    return response.json();
  })
  .then(data => {
    if (!Array.isArray(data) || data.length !== 118) throw new Error('La base de datos debe contener los 118 elementos.');
    elements = data;
    $('start-button').disabled = false;
  })
  .catch(error => {
    console.error(error);
    $('start-button').disabled = true;
    $('start-button').textContent = 'Error al cargar los elementos';
  });
$('start-button').disabled = true;
