// --- Config ---
const IMG_BASE = ''; // e.g., 'images/' if your assets live in /images/
const BLACK_IMG  = IMG_BASE + 'black-leaf.png';
const GOLDEN_IMG = IMG_BASE + 'golden-leaf.png';
const SNOW_IMG   = IMG_BASE + 'snowflake.png';

// --- Cached DOM refs ---
const container = document.getElementById('leaf-container');
const soloLeaf  = document.getElementById('solo-leaf');

// --- Guards for special triggers ---
let lastHourBlackTriggered = null;
let lastHourGoldenTriggered = null;
const appStart = Date.now();
const STARTUP_COOLDOWN_MS = 3000; // 3s

/* --- Background drift leaves --- */
function spawnLeaf() {
  if (!container) return;
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  leaf.style.left = Math.random() * 100 + 'vw';

  const duration = 5 + Math.random() * 5; // 5–10s
  leaf.style.animationName = 'fall';
  leaf.style.animationDuration = duration + 's';

  const size = 20 + Math.random() * 40; // 20–60px
  leaf.style.width = size + 'px';
  leaf.style.height = size + 'px';

  container.appendChild(leaf);
  setTimeout(() => leaf.remove(), duration * 1000);
}
setInterval(spawnLeaf, 2500);

/* --- Special black leaf omen (hourly) --- */
function maybeSpawnBlackHourly() {
  const now = new Date();
  const inWindow = now.getMinutes() === 0 && now.getSeconds() < 3;
  const cooledDown = Date.now() - appStart > STARTUP_COOLDOWN_MS;

  if (inWindow && cooledDown) {
    if (lastHourBlackTriggered !== now.getHours()) {
      spawnSpecialLeaf(BLACK_IMG, 'blackFall', 60);
      lastHourBlackTriggered = now.getHours();
    }
  }
}

/* --- Golden blessing (hourly at half past) --- */
function maybeSpawnGoldenHourly() {
  const now = new Date();
  const inWindow = now.getMinutes() === 30 && now.getSeconds() < 3;
  const cooledDown = Date.now() - appStart > STARTUP_COOLDOWN_MS;

  if (inWindow && cooledDown) {
    if (lastHourGoldenTriggered !== now.getHours()) {
      spawnSpecialLeaf(GOLDEN_IMG, 'goldenFall', 56);
      lastHourGoldenTriggered = now.getHours();
    }
  }
}
setInterval(maybeSpawnBlackHourly, 1000);
setInterval(maybeSpawnGoldenHourly, 1000);

/* --- Ritual solo leaf --- */
function dropSingleLeaf() {
  if (!soloLeaf) return;
  soloLeaf.style.left = Math.random() * 100 + 'vw';
  soloLeaf.style.animation = 'none';
  void soloLeaf.offsetWidth; // force reflow
  soloLeaf.style.animation = 'soloFall 7s linear forwards';
}
setInterval(dropSingleLeaf, 8000);

/* --- Helper for special leaves --- */
function spawnSpecialLeaf(imgUrl, animationName, pxSize) {
  if (!container) return;
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  leaf.style.backgroundImage = `url(${imgUrl})`;
  leaf.style.animationName = animationName;
  leaf.style.left = Math.random() * 100 + 'vw';

  const duration = 7 + Math.random() * 3; // 7–10s
  leaf.style.animationDuration = duration + 's';
  leaf.style.width = pxSize + 'px';
  leaf.style.height = pxSize + 'px';

  container.appendChild(leaf);
  setTimeout(() => leaf.remove(), duration * 1000);
}

/* --- Random golden blessing --- */
function maybeSpawnGoldenRandom() {
  const cooledDown = Date.now() - appStart > STARTUP_COOLDOWN_MS;
  if (!cooledDown) return;
  if (Math.random() < 0.01) {
    spawnSpecialLeaf(GOLDEN_IMG, 'goldenFall', 56);
  }
}
setInterval(maybeSpawnGoldenRandom, 10000);

// Helper: pick one random 4-hour window per day
let cachedDay = null;
let cachedWindow = null;

function dailySnowWindow() {
  const today = new Date().getDate();
  if (cachedDay !== today) {
    cachedDay = today;

    // Pick a random start hour between 8 and 18
    const start = 8 + Math.floor(Math.random() * 10);
    const end = start + 4; // 4-hour block

    cachedWindow = { start, end };
    console.log("Snow active window today:", start, "→", end);
  }
  return cachedWindow;
}







function spawnFlake() {
  const now   = new Date();
  const month = now.getMonth();
  const day   = now.getDate();
  const hour  = now.getHours();
  const min   = now.getMinutes();

  // ❄️ Stop completely after Feb 1
  if (month > 1 || (month === 1 && day >= 1)) return;

  // ❄️ Daily window
  const { start, end } = dailySnowWindow();
  if (hour < start || hour >= end) return;

  // ❄️ Only snow during these hours
  const SNOW_HOURS = [6, 7, 8, 15, 16, 17, 22, 23];
  if (!SNOW_HOURS.includes(hour)) return;

  // ❄️ Only snow during the first 15 minutes
  if (min > 15) return;

  // ❄️ Weather randomness
  const weatherSeed = (day * 17 + hour * 3) % 10;
  if (weatherSeed > 4) return;

  // ❄️ January taper
  let spawnChance = 1;
  if (month === 0) {
    spawnChance = Math.max(0, 1 - (day / 31));
  }
  if (Math.random() > spawnChance) return;

  // ❄️ Create a flake
  const flake = document.createElement("div");
  flake.className = "flake";

  const size = 6 + Math.random() * 18;
  flake.style.width = size + "px";
  flake.style.height = size + "px";
  flake.style.backgroundSize = "contain";

  flake.style.left = Math.random() * window.innerWidth + "px";

  const drift = (Math.random() - 0.5) * 100;
  flake.style.setProperty("--drift", drift + "px");

  const depth = Math.random();
  flake.style.opacity = 0.3 + depth * 0.7;
  flake.style.zIndex = depth > 0.5 ? 9999 : 1;

  flake.classList.add(Math.random() > 0.5 ? "spin1" : "spin2");

  const duration = 18 + Math.random() * 4;
  flake.style.setProperty("--fall", duration + "s");
  flake.style.animationDuration = duration + "s";

  flake.style.backgroundImage = `url('${SNOW_IMG}')`;

  container.appendChild(flake);
  setTimeout(() => flake.remove(), duration * 1000);
}



/* --- Seasonal mix --- */
function spawnSeasonal() {
  const el = document.createElement("div");
  el.className = "leaf";
  el.style.left = Math.random() * window.innerWidth + "px";

  const choice = Math.random();
  if (choice < 0.6) {
    el.style.backgroundImage = `url('${BLACK_IMG}')`;
  } else if (choice < 0.85) {
    el.style.backgroundImage = `url('${GOLDEN_IMG}')`;
  } else {
    el.style.backgroundImage = `url('${SNOW_IMG}')`;
  }

  const duration = 6 + Math.random() * 6;
  el.style.animationDuration = duration + "s";

  container.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

/* --- Leaf control API --- */
let leafInterval;
function startLeaves(rate = 800) {
  leafInterval = setInterval(spawnLeaf, rate);
}
function stopLeaves() {
  clearInterval(leafInterval);
}
