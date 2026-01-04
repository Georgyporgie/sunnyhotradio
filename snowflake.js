// --- Config ---
const IMG_BASE = ''; // e.g., 'images/' if your assets live in /images/


const SNOW_IMG   = IMG_BASE + 'snowflake.png';

// --- Cached DOM refs ---
const container = document.getElementById('leaf-container');


// --- Guards for special triggers ---
let lastHourBlackTriggered = null;
let lastHourGoldenTriggered = null;
const appStart = Date.now();
const STARTUP_COOLDOWN_MS = 3000; // 3s


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



