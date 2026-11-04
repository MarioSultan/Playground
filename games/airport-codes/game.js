const airports = [
  { city:'Madrid', country:'ESPAÑA · EUROPA', name:'Adolfo Suárez Madrid-Barajas', code:'MAD', level:1 },
  { city:'Barcelona', country:'ESPAÑA · EUROPA', name:'Josep Tarradellas Barcelona-El Prat', code:'BCN', level:1 },
  { city:'Londres', country:'REINO UNIDO · EUROPA', name:'Heathrow Airport', code:'LHR', level:1 },
  { city:'París', country:'FRANCIA · EUROPA', name:'Charles de Gaulle Airport', code:'CDG', level:1 },
  { city:'Nueva York', country:'ESTADOS UNIDOS · AMÉRICA', name:'John F. Kennedy International', code:'JFK', level:1 },
  { city:'Los Ángeles', country:'ESTADOS UNIDOS · AMÉRICA', name:'Los Angeles International', code:'LAX', level:1 },
  { city:'Ámsterdam', country:'PAÍSES BAJOS · EUROPA', name:'Amsterdam Airport Schiphol', code:'AMS', level:1 },
  { city:'Roma', country:'ITALIA · EUROPA', name:'Leonardo da Vinci–Fiumicino', code:'FCO', level:1 },
  { city:'Dubái', country:'EMIRATOS ÁRABES UNIDOS · ASIA', name:'Dubai International', code:'DXB', level:1 },
  { city:'Tokio', country:'JAPÓN · ASIA', name:'Tokyo Haneda Airport', code:'HND', level:1 },
  { city:'Singapur', country:'SINGAPUR · ASIA', name:'Singapore Changi Airport', code:'SIN', level:1 },
  { city:'Sídney', country:'AUSTRALIA · OCEANÍA', name:'Sydney Kingsford Smith', code:'SYD', level:1 },
  { city:'Fráncfort', country:'ALEMANIA · EUROPA', name:'Frankfurt Airport', code:'FRA', level:2 },
  { city:'Zúrich', country:'SUIZA · EUROPA', name:'Zurich Airport', code:'ZRH', level:2 },
  { city:'Estambul', country:'TURQUÍA · EUROPA/ASIA', name:'Istanbul Airport', code:'IST', level:2 },
  { city:'Doha', country:'CATAR · ASIA', name:'Hamad International Airport', code:'DOH', level:2 },
  { city:'Hong Kong', country:'CHINA · ASIA', name:'Hong Kong International', code:'HKG', level:2 },
  { city:'Seúl', country:'COREA DEL SUR · ASIA', name:'Incheon International Airport', code:'ICN', level:2 },
  { city:'Toronto', country:'CANADÁ · AMÉRICA', name:'Toronto Pearson International', code:'YYZ', level:2 },
  { city:'Chicago', country:'ESTADOS UNIDOS · AMÉRICA', name:"O'Hare International Airport", code:'ORD', level:2 },
  { city:'San Francisco', country:'ESTADOS UNIDOS · AMÉRICA', name:'San Francisco International', code:'SFO', level:2 },
  { city:'Miami', country:'ESTADOS UNIDOS · AMÉRICA', name:'Miami International Airport', code:'MIA', level:2 },
  { city:'Ciudad de México', country:'MÉXICO · AMÉRICA', name:'Benito Juárez International', code:'MEX', level:2 },
  { city:'São Paulo', country:'BRASIL · AMÉRICA', name:'Guarulhos International Airport', code:'GRU', level:2 },
  { city:'Atenas', country:'GRECIA · EUROPA', name:'Athens International Airport', code:'ATH', level:2 },
  { city:'Lisboa', country:'PORTUGAL · EUROPA', name:'Humberto Delgado Airport', code:'LIS', level:2 },
  { city:'Viena', country:'AUSTRIA · EUROPA', name:'Vienna International Airport', code:'VIE', level:2 },
  { city:'Copenhague', country:'DINAMARCA · EUROPA', name:'Copenhagen Airport', code:'CPH', level:2 },
  { city:'Delhi', country:'INDIA · ASIA', name:'Indira Gandhi International', code:'DEL', level:2 },
  { city:'Tokio', country:'JAPÓN · ASIA', name:'Narita International Airport', code:'NRT', level:3 },
  { city:'Londres', country:'REINO UNIDO · EUROPA', name:'London City Airport', code:'LCY', level:3 },
  { city:'Washington D. C.', country:'ESTADOS UNIDOS · AMÉRICA', name:'Dulles International Airport', code:'IAD', level:3 },
  { city:'Boston', country:'ESTADOS UNIDOS · AMÉRICA', name:'Logan International Airport', code:'BOS', level:3 },
  { city:'Las Vegas', country:'ESTADOS UNIDOS · AMÉRICA', name:'Harry Reid International', code:'LAS', level:3 },
  { city:'Vancouver', country:'CANADÁ · AMÉRICA', name:'Vancouver International Airport', code:'YVR', level:3 },
  { city:'Buenos Aires', country:'ARGENTINA · AMÉRICA', name:'Ministro Pistarini (Ezeiza)', code:'EZE', level:3 },
  { city:'Río de Janeiro', country:'BRASIL · AMÉRICA', name:'Galeão International Airport', code:'GIG', level:3 },
  { city:'Lima', country:'PERÚ · AMÉRICA', name:'Jorge Chávez International', code:'LIM', level:3 },
  { city:'Bogotá', country:'COLOMBIA · AMÉRICA', name:'El Dorado International Airport', code:'BOG', level:3 },
  { city:'Ciudad del Cabo', country:'SUDÁFRICA · ÁFRICA', name:'Cape Town International', code:'CPT', level:3 },
  { city:'Johannesburgo', country:'SUDÁFRICA · ÁFRICA', name:'O. R. Tambo International', code:'JNB', level:3 },
  { city:'Melbourne', country:'AUSTRALIA · OCEANÍA', name:'Melbourne Airport', code:'MEL', level:3 },
  { city:'Auckland', country:'NUEVA ZELANDA · OCEANÍA', name:'Auckland Airport', code:'AKL', level:3 },
  { city:'Helsinki', country:'FINLANDIA · EUROPA', name:'Helsinki Airport', code:'HEL', level:3 },
  { city:'Estocolmo', country:'SUECIA · EUROPA', name:'Stockholm Arlanda Airport', code:'ARN', level:3 },
  { city:'Dublín', country:'IRLANDA · EUROPA', name:'Dublin Airport', code:'DUB', level:3 },
  { city:'Múnich', country:'ALEMANIA · EUROPA', name:'Munich Airport', code:'MUC', level:3 },
  { city:'Bruselas', country:'BÉLGICA · EUROPA', name:'Brussels Airport', code:'BRU', level:3 },
  { city:'Riad', country:'ARABIA SAUDÍ · ASIA', name:'King Khalid International', code:'RUH', level:3 },
  { city:'Osaka', country:'JAPÓN · ASIA', name:'Kansai International Airport', code:'KIX', level:2 },
  { city:'Pekín', country:'CHINA · ASIA', name:'Beijing Capital International', code:'PEK', level:2 },
  { city:'Shanghái', country:'CHINA · ASIA', name:'Shanghai Pudong International', code:'PVG', level:2 },
  { city:'Bangkok', country:'TAILANDIA · ASIA', name:'Suvarnabhumi Airport', code:'BKK', level:2 },
  { city:'Kuala Lumpur', country:'MALASIA · ASIA', name:'Kuala Lumpur International', code:'KUL', level:2 },
  { city:'Yakarta', country:'INDONESIA · ASIA', name:'Soekarno–Hatta International', code:'CGK', level:2 },
  { city:'Manila', country:'FILIPINAS · ASIA', name:'Ninoy Aquino International', code:'MNL', level:2 },
  { city:'Bombay (Mumbai)', country:'INDIA · ASIA', name:'Chhatrapati Shivaji Maharaj International', code:'BOM', level:2 },
  { city:'Bangalore', country:'INDIA · ASIA', name:'Kempegowda International', code:'BLR', level:2 },
  { city:'Taipéi', country:'TAIWÁN · ASIA', name:'Taiwan Taoyuan International', code:'TPE', level:2 },
  { city:'Mascate', country:'OMÁN · ASIA', name:'Muscat International Airport', code:'MCT', level:2 },
  { city:'El Cairo', country:'EGIPTO · ÁFRICA', name:'Cairo International Airport', code:'CAI', level:2 },
  { city:'Nairobi', country:'KENIA · ÁFRICA', name:'Jomo Kenyatta International', code:'NBO', level:2 },
  { city:'Atlanta', country:'ESTADOS UNIDOS · AMÉRICA', name:'Hartsfield–Jackson Atlanta International', code:'ATL', level:2 },
  { city:'Dallas–Fort Worth', country:'ESTADOS UNIDOS · AMÉRICA', name:'Dallas Fort Worth International', code:'DFW', level:2 },
  { city:'Seattle', country:'ESTADOS UNIDOS · AMÉRICA', name:'Seattle–Tacoma International', code:'SEA', level:3 },
  { city:'Denver', country:'ESTADOS UNIDOS · AMÉRICA', name:'Denver International Airport', code:'DEN', level:3 },
  { city:'Orlando', country:'ESTADOS UNIDOS · AMÉRICA', name:'Orlando International Airport', code:'MCO', level:3 },
  { city:'Honolulu', country:'ESTADOS UNIDOS · AMÉRICA', name:'Daniel K. Inouye International', code:'HNL', level:3 },
  { city:'Montreal', country:'CANADÁ · AMÉRICA', name:'Montréal–Trudeau International', code:'YUL', level:3 },
  { city:'Calgary', country:'CANADÁ · AMÉRICA', name:'Calgary International Airport', code:'YYC', level:3 },
  { city:'Ciudad de Panamá', country:'PANAMÁ · AMÉRICA', name:'Tocumen International Airport', code:'PTY', level:3 },
  { city:'Santiago', country:'CHILE · AMÉRICA', name:'Arturo Merino Benítez International', code:'SCL', level:3 },
  { city:'Quito', country:'ECUADOR · AMÉRICA', name:'Mariscal Sucre International', code:'UIO', level:3 },
  { city:'San José', country:'COSTA RICA · AMÉRICA', name:'Juan Santamaría International', code:'SJO', level:3 },
  { city:'Cancún', country:'MÉXICO · AMÉRICA', name:'Cancún International Airport', code:'CUN', level:3 },
  { city:'Manchester', country:'REINO UNIDO · EUROPA', name:'Manchester Airport', code:'MAN', level:3 },
  { city:'Edimburgo', country:'REINO UNIDO · EUROPA', name:'Edinburgh Airport', code:'EDI', level:3 },
  { city:'Milán', country:'ITALIA · EUROPA', name:'Milan Malpensa Airport', code:'MXP', level:3 },
  { city:'Venecia', country:'ITALIA · EUROPA', name:'Venice Marco Polo Airport', code:'VCE', level:3 },
  { city:'Málaga', country:'ESPAÑA · EUROPA', name:'Málaga-Costa del Sol Airport', code:'AGP', level:3 },
  { city:'Palma de Mallorca', country:'ESPAÑA · EUROPA', name:'Palma de Mallorca Airport', code:'PMI', level:3 },
  { city:'Sevilla', country:'ESPAÑA · EUROPA', name:'Seville Airport', code:'SVQ', level:3 },
  { city:'Oporto', country:'PORTUGAL · EUROPA', name:'Francisco Sá Carneiro Airport', code:'OPO', level:3 },
  { city:'Ginebra', country:'SUIZA · EUROPA', name:'Geneva Airport', code:'GVA', level:3 },
  { city:'Oslo', country:'NORUEGA · EUROPA', name:'Oslo Airport, Gardermoen', code:'OSL', level:3 },
  { city:'Varsovia', country:'POLONIA · EUROPA', name:'Warsaw Chopin Airport', code:'WAW', level:3 },
  { city:'Praga', country:'CHEQUIA · EUROPA', name:'Václav Havel Airport Prague', code:'PRG', level:3 },
  { city:'Budapest', country:'HUNGRÍA · EUROPA', name:'Budapest Ferenc Liszt International', code:'BUD', level:3 },
  { city:'Reikiavik', country:'ISLANDIA · EUROPA', name:'Keflavík International Airport', code:'KEF', level:3 },
  { city:'Brisbane', country:'AUSTRALIA · OCEANÍA', name:'Brisbane Airport', code:'BNE', level:3 },
  { city:'Perth', country:'AUSTRALIA · OCEANÍA', name:'Perth Airport', code:'PER', level:3 },
  { city:'Christchurch', country:'NUEVA ZELANDA · OCEANÍA', name:'Christchurch Airport', code:'CHC', level:3 },
  { city:'Tel Aviv', country:'ISRAEL · ASIA', name:'Ben Gurion International Airport', code:'TLV', level:3 },
  { city:'Casablanca', country:'MARRUECOS · ÁFRICA', name:'Mohammed V International Airport', code:'CMN', level:3 },
  { city:'Marrakech', country:'MARRUECOS · ÁFRICA', name:'Marrakesh Menara Airport', code:'RAK', level:3 },
  { city:'Adís Abeba', country:'ETIOPÍA · ÁFRICA', name:'Bole International Airport', code:'ADD', level:3 },
  { city:'Estambul (Sabiha Gökçen)', country:'TURQUÍA · EUROPA/ASIA', name:'Sabiha Gökçen International', code:'SAW', level:3 },
  { city:'San Diego', country:'ESTADOS UNIDOS · AMÉRICA', name:'San Diego International Airport', code:'SAN', level:3 },
  { city:'Filadelfia', country:'ESTADOS UNIDOS · AMÉRICA', name:'Philadelphia International Airport', code:'PHL', level:3 }
];

const screens = {
  start: document.querySelector('#screen-start'),
  quiz: document.querySelector('#screen-quiz'),
  results: document.querySelector('#screen-results')
};
const $ = (selector) => document.querySelector(selector);
let difficulty = 'easy';
let questions = [];
let current = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let correct = 0;
let history = [];
let answered = false;

const levelNames = { easy:'FÁCIL', medium:'MEDIO', hard:'DIFÍCIL' };

function showScreen(name) {
  Object.entries(screens).forEach(([key, element]) => { element.hidden = key !== name; });
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function startGame() {
  const level = { easy:1, medium:2, hard:3 }[difficulty];
  const pool = airports.filter((airport) => airport.level <= level);
  questions = shuffle(pool).slice(0, 10);
  current = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  correct = 0;
  history = [];
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const airport = questions[current];
  answered = false;
  $('#round-label').textContent = `PREGUNTA ${String(current + 1).padStart(2, '0')} / 10`;
  $('#level-label').textContent = levelNames[difficulty];
  $('#progress-bar').style.width = `${(current / questions.length) * 100}%`;
  $('#score').textContent = score;
  $('#streak').textContent = streak;
  $('#airport-country').textContent = airport.country;
  $('#airport-city').textContent = airport.city;
  $('#airport-name').textContent = airport.name;
  $('#answer').value = '';
  $('#answer').disabled = false;
  $('#feedback').textContent = 'Introduce las tres letras del código.';
  $('#feedback').className = 'feedback';
  $('#next-button').hidden = true;
  $('#skip-button').hidden = false;
  $('#answer-form').querySelector('button').disabled = false;
  $('#answer').focus();
}

function submitAnswer(value, skipped = false) {
  if (answered) return;
  const airport = questions[current];
  const guess = value.trim().toUpperCase();
  if (!skipped && !/^[A-Z]{3}$/.test(guess)) {
    $('#feedback').textContent = 'Escribe exactamente tres letras (A–Z).';
    $('#feedback').className = 'feedback error';
    return;
  }

  answered = true;
  const isCorrect = !skipped && guess === airport.code;
  const points = isCorrect ? 100 + (streak > 0 ? 25 : 0) : 0;
  if (isCorrect) {
    correct += 1;
    streak += 1;
    bestStreak = Math.max(bestStreak, streak);
    score += points;
    $('#feedback').textContent = streak > 1 ? `¡Exacto! +${points} puntos · Racha de ${streak}.` : `¡Correcto! +${points} puntos.`;
    $('#feedback').className = 'feedback success';
  } else {
    streak = 0;
    $('#feedback').textContent = skipped ? `El código era ${airport.code}. ¡A por la siguiente!` : `No exactamente: ${airport.code} era la respuesta correcta.`;
    $('#feedback').className = 'feedback error';
  }

  history.push({ airport, guess: skipped ? '—' : guess, isCorrect, skipped });
  $('#score').textContent = score;
  $('#streak').textContent = streak;
  $('#answer').disabled = true;
  $('#answer-form').querySelector('button').disabled = true;
  $('#skip-button').hidden = true;
  $('#next-button').hidden = false;
  $('#next-button').textContent = current === questions.length - 1 ? 'Ver resultados ↗' : 'Siguiente →';
}

function finishGame() {
  const accuracy = Math.round((correct / questions.length) * 100);
  $('#progress-bar').style.width = '100%';
  $('#final-score').textContent = score;
  $('#correct-count').textContent = `${correct}/${questions.length}`;
  $('#accuracy').textContent = `${accuracy}%`;
  $('#best-streak').textContent = bestStreak;
  const recordKey = `playground-airport-record-${difficulty}`;
  let previousRecord = 0;
  try { previousRecord = Number(localStorage.getItem(recordKey)) || 0; } catch (error) { console.warn('No se pudo leer el récord local.', error); }
  const isNewRecord = score > previousRecord;
  if (isNewRecord) {
    try { localStorage.setItem(recordKey, String(score)); } catch (error) { console.warn('No se pudo guardar el récord local.', error); }
  }
  $('#personal-record').textContent = Math.max(previousRecord, score);
  $('#result-subtitle').textContent = isNewRecord ? '¡Nuevo récord personal en este nivel!' : `Has completado el nivel ${levelNames[difficulty].toLowerCase()}.`;
  $('#result-title').textContent = accuracy === 100 ? '¡Vuelo perfecto!' : accuracy >= 70 ? '¡Buen viaje!' : accuracy >= 40 ? 'Vas despegando.' : 'Toca preparar otra ruta.';
  $('#review-list').innerHTML = history.map(({ airport, guess, isCorrect, skipped }) => `
    <div class="review-item">
      <span class="review-status ${isCorrect ? '' : 'missed'}">${isCorrect ? '✓' : '×'}</span>
      <span class="review-city"><strong>${airport.city}</strong><small>${airport.name}</small></span>
      <span class="review-code" title="${skipped ? 'No respondida' : `Tu respuesta: ${guess}`} ">${airport.code}</span>
    </div>`).join('');
  showScreen('results');
}

$('.difficulty-list').addEventListener('click', (event) => {
  const button = event.target.closest('.difficulty');
  if (!button) return;
  difficulty = button.dataset.level;
  document.querySelectorAll('.difficulty').forEach((item) => item.classList.toggle('selected', item === button));
});

$('#start-button').addEventListener('click', startGame);
$('#answer-form').addEventListener('submit', (event) => {
  event.preventDefault();
  submitAnswer($('#answer').value);
});
$('#skip-button').addEventListener('click', () => submitAnswer('', true));
$('#next-button').addEventListener('click', () => {
  if (current === questions.length - 1) finishGame();
  else { current += 1; renderQuestion(); }
});
$('#play-again').addEventListener('click', () => { showScreen('start'); });
$('#answer').addEventListener('input', (event) => { event.target.value = event.target.value.replace(/[^a-z]/gi, '').slice(0, 3).toUpperCase(); });
