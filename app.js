const grid = document.querySelector('#games-grid');
const count = document.querySelector('#game-count');
const emptyState = document.querySelector('#empty-state');

function createGameCard(game, index) {
  const link = document.createElement('a');
  link.className = 'game-card';
  link.href = game.path;
  link.setAttribute('aria-label', `Jugar a ${game.name}`);

  const top = document.createElement('div');
  top.className = 'card-top';
  const icon = document.createElement('span');
  icon.className = 'game-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = game.icon || '✳';
  const number = document.createElement('span');
  number.className = 'card-number';
  number.textContent = String(index + 1).padStart(2, '0');
  top.append(icon, number);

  const title = document.createElement('h3');
  title.textContent = game.name;
  const description = document.createElement('p');
  description.textContent = game.description || 'Un pequeño juego para disfrutar.';

  const bottom = document.createElement('div');
  bottom.className = 'card-bottom';
  const label = document.createElement('span');
  label.textContent = 'JUGAR AHORA';
  const arrow = document.createElement('span');
  arrow.className = 'card-arrow';
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '↗';
  bottom.append(label, arrow);

  link.append(top, title, description, bottom);
  return link;
}

async function loadGames() {
  try {
    const response = await fetch('./games.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`No se pudo cargar el catálogo (${response.status})`);
    const games = await response.json();
    grid.replaceChildren();
    count.textContent = `${games.length} ${games.length === 1 ? 'juego disponible' : 'juegos disponibles'}`;
    emptyState.hidden = games.length !== 0;
    games.forEach((game, index) => grid.append(createGameCard(game, index)));
  } catch (error) {
    count.textContent = 'No se pudo cargar la colección';
    grid.innerHTML = '<p class="empty-state">No se ha podido cargar el catálogo. Comprueba que la web se ha publicado correctamente.</p>';
    console.error(error);
  }
}

loadGames();
