/* ============================================================
   EMU//INDEX — front-end logic
   ============================================================ */

(() => {
  "use strict";

  const SHORT_NAMES = {
    "atari-2600": "Atari 2600",
    "intellivision": "Intellivision",
    "colecovision": "ColecoVision",
    "atari-5200": "Atari 5200",
    "vectrex": "Vectrex",
    "nes": "NES",
    "master-system": "Master System",
    "atari-7800": "Atari 7800",
    "pc-engine": "PC Engine",
    "genesis": "Sega Genesis",
    "game-boy": "Game Boy",
    "atari-lynx": "Atari Lynx",
    "neo-geo": "Neo Geo AES",
    "snes": "Super Nintendo",
    "game-gear": "Game Gear",
    "3do": "3DO",
    "jaguar": "Atari Jaguar",
    "playstation": "PlayStation",
    "saturn": "Sega Saturn",
    "virtual-boy": "Virtual Boy",
    "n64": "Nintendo 64",
    "game-boy-color": "Game Boy Color",
    "dreamcast": "Dreamcast",
    "ps2": "PlayStation 2",
    "game-boy-advance": "Game Boy Advance",
    "gamecube": "GameCube",
    "xbox": "Xbox",
    "nds": "Nintendo DS",
    "psp": "PlayStation Portable",
    "xbox-360": "Xbox 360",
    "ps3": "PlayStation 3",
    "wii": "Nintendo Wii",
    "3ds": "Nintendo 3DS",
    "vita": "PlayStation Vita",
    "wii-u": "Wii U",
    "ps4": "PlayStation 4",
    "switch": "Nintendo Switch"
  };

  const PLATFORM_ABBR = {
    "Windows": "WIN",
    "macOS": "MAC",
    "Linux": "LNX",
    "Android": "AND",
    "Browser": "WEB"
  };

  const state = {
    maker: "all",
    gen: "all",
    sort: "chrono",
    oss: false,
    q: ""
  };

  /* ---------------- helpers ---------------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const make = (html) => {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };
  const esc = (str) => String(str).replace(/[&<>"']/g, (s) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[s]));
  const pad = (n) => String(n).padStart(3, "0");
  const pad2 = (n) => String(n).padStart(2, "0");
  const accentOf = (c) => MAKERS[c.maker]?.accent || "#9fb0c7";
  const shortName = (c) => SHORT_NAMES[c.id] || c.name;

  const TOTAL_EMUS = CONSOLES.reduce((n, c) => n + c.emulators.length, 0);
  const OSS_EMUS = CONSOLES.reduce(
    (n, c) => n + c.emulators.filter((e) => e.license === "Open source").length, 0
  );

  /* ---------------- hardware illustrations ---------------- */
  function artCart() {
    return `
      <svg viewBox="0 0 260 190" aria-hidden="true" focusable="false">
        <ellipse class="hw-shadow" cx="130" cy="161" rx="84" ry="8" opacity=".55"/>
        <rect x="106" y="34" width="48" height="64" rx="3" class="hw-dark-2"/>
        <rect x="112" y="43" width="36" height="28" rx="2" fill="var(--accent)" opacity=".28"/>
        <path d="M112 78h36M112 83h36M112 88h36" class="hw-line-soft"/>
        <path d="M124 98h12" class="hw-line"/>
        <rect x="50" y="97" width="160" height="55" rx="9" class="hw-main"/>
        <rect x="62" y="89" width="136" height="15" rx="5" class="hw-top"/>
        <rect x="100" y="91" width="60" height="6" rx="3" class="hw-dark"/>
        <path d="M62 110h136" class="hw-line-soft"/>
        <path d="M62 135h136" class="hw-line-soft"/>
        <circle cx="193" cy="126" r="2.6" class="hw-accent"/>
        <rect x="174" y="122" width="11" height="5" rx="2.5" class="hw-dark"/>
        <rect x="159" y="122" width="8" height="5" rx="2.5" class="hw-dark"/>
        <g class="hw-line-soft"><path d="M68 121h16M68 125h16M68 129h16"/></g>
        <rect x="72" y="141" width="24" height="7" rx="2" class="hw-dark"/>
        <rect x="102" y="141" width="24" height="7" rx="2" class="hw-dark"/>
        <text x="148" y="147" class="hw-text">SYSTEM</text>
      </svg>`;
  }

  function artDisc() {
    return `
      <svg viewBox="0 0 260 190" aria-hidden="true" focusable="false">
        <ellipse class="hw-shadow" cx="130" cy="158" rx="88" ry="8" opacity=".55"/>
        <g transform="rotate(-14 178 62)">
          <circle cx="178" cy="62" r="33" fill="#0d0d15" stroke="var(--edge)" stroke-width="1.1"/>
          <circle cx="178" cy="62" r="25" fill="none" stroke="var(--accent)" stroke-width="1" opacity=".32" stroke-dasharray="2 5"/>
          <circle cx="178" cy="62" r="7" fill="#05050a" stroke="rgba(255,255,255,.2)"/>
          <path d="M156 79a30 30 0 0 1-4-24" fill="none" stroke="rgba(255,255,255,.32)" stroke-width="1.2" stroke-linecap="round"/>
        </g>
        <rect x="42" y="99" width="176" height="50" rx="10" class="hw-main"/>
        <rect x="50" y="91" width="160" height="13" rx="6" class="hw-top"/>
        <rect x="58" y="108" width="148" height="4" rx="2" class="hw-dark"/>
        <circle cx="201" cy="128" r="2.6" class="hw-accent"/>
        <path d="m185 124 4 4-4 4M173 124l4 4-4 4" class="hw-line"/>
        <g class="hw-line-soft"><path d="M60 133h18M60 137h18"/></g>
        <rect x="64" y="142" width="20" height="5" rx="2" class="hw-dark-2"/>
        <rect x="89" y="142" width="20" height="5" rx="2" class="hw-dark-2"/>
        <text x="148" y="137" class="hw-text">DISC</text>
      </svg>`;
  }

  function artHandheld() {
    return `
      <svg viewBox="0 0 260 190" aria-hidden="true" focusable="false">
        <ellipse class="hw-shadow" cx="130" cy="176" rx="56" ry="6" opacity=".55"/>
        <rect x="90" y="18" width="80" height="154" rx="15" class="hw-main"/>
        <rect x="99" y="31" width="62" height="59" rx="6" class="hw-dark"/>
        <rect x="104" y="36" width="52" height="49" rx="2" fill="#07070c"/>
        <rect x="104" y="36" width="52" height="49" rx="2" class="hw-screen-glow"/>
        <path d="M110 76l8-11 7 6 9-15 9 20" fill="none" stroke="var(--accent)" stroke-width="1.2" opacity=".85" stroke-linejoin="round"/>
        <circle cx="146" cy="45" r="3" fill="var(--accent)" opacity=".45"/>
        <path d="M104 56h52M104 62h52M104 68h52" stroke="rgba(255,255,255,.055)" stroke-width="1"/>
        <text x="112" y="98" class="hw-text">DOT MATRIX</text>
        <rect x="101" y="108" width="24" height="8" rx="2" class="hw-top"/>
        <rect x="109" y="100" width="8" height="24" rx="2" class="hw-top"/>
        <circle cx="154" cy="111" r="5.5" fill="var(--accent)" opacity=".55" stroke="var(--edge)"/>
        <circle cx="162" cy="103" r="5.5" fill="var(--accent)" opacity=".28" stroke="var(--edge)"/>
        <rect x="109" y="143" width="14" height="4" rx="2" class="hw-dark-2"/>
        <rect x="129" y="143" width="14" height="4" rx="2" class="hw-dark-2"/>
        <g class="hw-line-soft"><path d="M140 136l8-8M144 138l8-8M148 140l8-8M152 142l8-8"/></g>
        <rect x="90" y="164" width="80" height="8" rx="4" fill="rgba(255,255,255,.03)"/>
      </svg>`;
  }

  function artHybrid() {
    return `
      <svg viewBox="0 0 260 190" aria-hidden="true" focusable="false">
        <ellipse class="hw-shadow" cx="130" cy="160" rx="90" ry="8" opacity=".55"/>
        <g>
          <rect x="44" y="54" width="30" height="88" rx="12" class="hw-top"/>
          <rect x="48" y="47" width="22" height="9" rx="4" class="hw-dark-2"/>
          <circle cx="59" cy="76" r="7.5" class="hw-dark"/>
          <circle cx="59" cy="76" r="3.5" class="hw-top"/>
          <path d="M52 100h14M59 93v14" class="hw-line-soft"/>
          <circle cx="59" cy="122" r="2.4" class="hw-accent-soft"/>
        </g>
        <g>
          <rect x="186" y="54" width="30" height="88" rx="12" class="hw-top"/>
          <rect x="190" y="47" width="22" height="9" rx="4" class="hw-dark-2"/>
          <circle cx="201" cy="103" r="7.5" class="hw-dark"/>
          <circle cx="201" cy="103" r="3.5" class="hw-top"/>
          <circle cx="201" cy="71" r="3" fill="var(--accent)" opacity=".7"/>
          <circle cx="194" cy="78" r="3" fill="var(--accent)" opacity=".5"/>
          <circle cx="208" cy="78" r="3" fill="var(--accent)" opacity=".5"/>
          <circle cx="201" cy="85" r="3" fill="var(--accent)" opacity=".7"/>
          <rect x="195" y="125" width="12" height="4" rx="2" class="hw-dark-2"/>
        </g>
        <rect x="73" y="42" width="114" height="102" rx="8" class="hw-main"/>
        <rect x="80" y="48" width="100" height="90" rx="4" fill="#07070c" stroke="rgba(255,255,255,.12)"/>
        <rect x="80" y="48" width="100" height="90" rx="4" class="hw-screen-glow"/>
        <circle cx="151" cy="69" r="11" fill="var(--accent)" opacity=".2"/>
        <path d="M86 116l15-21 11 13 17-26 23 34z" fill="var(--accent)" opacity=".12"/>
        <path d="M86 116h88" stroke="var(--accent)" stroke-width="1" opacity=".38"/>
        <path d="M86 122h74M86 127h58" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
        <rect x="70" y="50" width="4" height="86" rx="2" class="hw-dark"/>
        <rect x="186" y="50" width="4" height="86" rx="2" class="hw-dark"/>
      </svg>`;
  }

  function artTabletop() {
    return `
      <svg viewBox="0 0 260 190" aria-hidden="true" focusable="false">
        <ellipse class="hw-shadow" cx="130" cy="171" rx="62" ry="6" opacity=".55"/>
        <path d="M96 159h68l-9-17h-50z" class="hw-main"/>
        <rect x="122" y="124" width="16" height="22" class="hw-top"/>
        <rect x="62" y="44" width="136" height="86" rx="13" class="hw-main"/>
        <rect x="74" y="56" width="112" height="58" rx="7" class="hw-dark"/>
        <rect x="78" y="60" width="104" height="50" rx="5" class="hw-screen-glow"/>
        <path d="M90 98l13-26 21 9 9-15 19 27-22 14-12-8-15 10z" fill="none" stroke="var(--accent)" stroke-width="1.2" opacity=".7" stroke-linejoin="round"/>
        <circle cx="127" cy="82" r="2" fill="var(--accent)"/>
        <text x="78" y="126" class="hw-text">VECTOR DISPLAY</text>
        <g class="hw-line-soft"><path d="M190 66v6M190 78v6M190 90v6M190 102v6"/></g>
        <g>
          <rect x="22" y="137" width="36" height="20" rx="9" class="hw-top"/>
          <circle cx="32" cy="147" r="4" class="hw-dark"/>
          <circle cx="47" cy="147" r="2.5" class="hw-accent" opacity=".7"/>
          <circle cx="53" cy="144" r="2" class="hw-accent" opacity=".4"/>
          <path d="M58 147c14 0 20-10 28-12" class="hw-line"/>
        </g>
      </svg>`;
  }

  function artFor(c) {
    if (c.form === "Handheld") return artHandheld();
    if (c.form === "Hybrid") return artHybrid();
    if (c.form === "Tabletop") return artTabletop();
    const media = c.media.toLowerCase();
    if (media.includes("cd") || media.includes("disc") || media.includes("dvd") || media.includes("blu-ray")) {
      return artDisc();
    }
    return artCart();
  }

  /* ---------------- hero ---------------- */
  function renderHero() {
    const ids = ["snes", "playstation", "switch"];
    const stack = $("#hero-stack");
    stack.innerHTML = ids.map((id, i) => {
      const c = CONSOLES.find((x) => x.id === id);
      if (!c) return "";
      return `
        <div class="stack-card sc${i + 1}" style="--accent:${accentOf(c)}">
          <div class="stack-art">${artFor(c)}</div>
          <div class="stack-foot">
            <span class="stack-name">${esc(shortName(c))}</span>
            <span class="stack-gen">GEN ${pad2(c.gen)}</span>
          </div>
        </div>`;
    }).join("");
  }

  /* ---------------- ticker ---------------- */
  const TICKER_NAMES = [
    "Mesen", "Dolphin", "DuckStation", "PCSX2", "RPCS3", "PPSSPP", "Flycast",
    "SameBoy", "mGBA", "melonDS", "Cemu", "xemu", "Xenia", "Stella", "Mednafen",
    "Ares", "bsnes", "Snes9x", "BlastEm", "BigPEmu", "Azahar", "Vita3K",
    "shadPS4", "PUAE", "FinalBurn Neo"
  ];

  function renderTicker() {
    const items = TICKER_NAMES.map((n) => `<span class="ticker-item">${esc(n)}</span>`).join("");
    $("#ticker-track").innerHTML =
      `<div class="ticker-half">${items}</div><div class="ticker-half" aria-hidden="true">${items}</div>`;
  }

  /* ---------------- stats ---------------- */
  function prepareStats() {
    const values = [
      { n: CONSOLES.length, suffix: "" },
      { n: TOTAL_EMUS, suffix: "" },
      { n: OSS_EMUS, suffix: "" },
      { n: new Date().getFullYear() - 1977, suffix: "yrs" }
    ];
    $$(".stat-num").forEach((el, i) => {
      const v = values[i];
      if (!v) return;
      el.dataset.count = v.n;
      el.dataset.suffix = v.suffix;
      el.textContent = "0";
    });

    $("#meta-platforms").textContent = CONSOLES.length;
    $("#meta-emulators").textContent = TOTAL_EMUS;

    const foot = $(".foot-bottom span");
    if (foot) foot.textContent = `Compiled with care · ${CONSOLES.length} platforms · ${TOTAL_EMUS} emulator options`;
  }

  function animateStats() {
    const els = $$(".stat-num");
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    els.forEach((el, i) => {
      const target = Number(el.dataset.count || 0);
      const start = performance.now() + i * 90;
      const dur = 1200;
      const tick = (now) => {
        const t = Math.min(1, Math.max(0, (now - start) / dur));
        el.textContent = String(Math.round(target * ease(t)));
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = String(target);
      };
      requestAnimationFrame(tick);
    });
  }

  /* ---------------- filtering ---------------- */
  function visibleConsoles() {
    const tokens = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    const list = CONSOLES.filter((c) => {
      if (state.maker !== "all" && c.maker !== state.maker) return false;
      if (state.gen !== "all" && c.gen !== Number(state.gen)) return false;
      if (state.oss && !c.emulators.some((e) => e.license === "Open source")) return false;
      if (tokens.length) {
        const hay = [
          c.name, c.alt, shortName(c), MAKERS[c.maker].name, c.form, c.media,
          ...c.games,
          ...c.emulators.flatMap((e) => [e.name, e.blurb, e.status, e.license])
        ].join(" ").toLowerCase();
        if (!tokens.every((t) => hay.includes(t))) return false;
      }
      return true;
    });

    const collator = new Intl.Collator("en");
    list.sort((a, b) => {
      switch (state.sort) {
        case "newest": return b.year - a.year || collator.compare(a.name, b.name);
        case "alpha": return collator.compare(shortName(a), shortName(b));
        case "emulators": return b.emulators.length - a.emulators.length || a.year - b.year;
        default: return a.year - b.year || collator.compare(a.name, b.name);
      }
    });
    return list;
  }

  function cardHTML(c, i) {
    const accent = accentOf(c);
    const pool = state.oss ? c.emulators.filter((e) => e.license === "Open source") : c.emulators;
    const total = pool.length;
    const oss = pool.filter((e) => e.license === "Open source").length;
    const dots = Math.min(5, Math.max(1, Math.round((oss / total) * 5)));
    const best = pool.find((e) => e.best) || pool[0];
    const formShort = c.form.replace(" console", "");
    return `
      <article class="card" style="--accent:${accent}; animation-delay:${Math.min(i, 24) * 22}ms"
               tabindex="0" role="button" data-id="${c.id}"
               aria-label="Open the ${esc(c.name)} dossier">
        <div class="card-art">
          <span class="card-year" aria-hidden="true">${c.year}</span>
          ${artFor(c)}
          <div class="card-top">
            <span class="card-index">NO. ${pad(CONSOLES.indexOf(c) + 1)}</span>
            <div class="card-chips">
              <span class="mini-tag gen">GEN ${pad2(c.gen)}</span>
              <span class="mini-tag">${esc(formShort)}</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <span class="card-maker">${esc(MAKERS[c.maker].name)} · ${c.year}</span>
          <h3 class="card-title">${esc(shortName(c))}</h3>
          <p class="card-tagline">${esc(c.tagline)}</p>
          <div class="card-pick">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.5 12.6 7l6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.8l6-.8z"/></svg>
            <span class="pick-label">Top pick</span>
            <strong>${esc(best.name)}</strong>
            <span class="pick-arrow">↗</span>
          </div>
        </div>
        <div class="card-foot">
          <span class="dot-meter" title="${oss} of ${total} open source" aria-hidden="true">
            ${[0,1,2,3,4].map((d) => `<i class="${d < dots ? "on" : ""}"></i>`).join("")}
          </span>
          <span class="emu-count">${total} emu${total > 1 ? "s" : ""}</span>
          <span class="card-open">Dossier
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg>
          </span>
        </div>
      </article>`;
  }

  function render() {
    const list = visibleConsoles();
    const grid = $("#grid");
    grid.innerHTML = list.map(cardHTML).join("");

    const emuCount = list.reduce((n, c) => n + c.emulators.filter(
      (e) => !state.oss || e.license === "Open source"
    ).length, 0);

    $("#result-count").textContent = list.length;
    $("#result-emus").textContent = emuCount;
    $("#empty").hidden = list.length > 0;

    const filtered = state.maker !== "all" || state.gen !== "all" || state.oss || state.q.trim() !== "";
    $("#reset-filters").hidden = !filtered;
    $$(".era").forEach((el) => {
      el.classList.toggle("is-active", state.gen !== "all" && Number(el.dataset.gen) === Number(state.gen));
    });
  }

  /* ---------------- timeline ---------------- */
  function renderTimeline() {
    const rail = $("#timeline-rail");
    rail.innerHTML = Object.entries(GENERATIONS).map(([gen, info]) => {
      const list = CONSOLES.filter((c) => c.gen === Number(gen));
      const names = list.map(shortName).join(" · ");
      return `
        <button class="era" type="button" data-gen="${gen}" aria-label="Filter catalog by generation ${gen}: ${esc(info.label)}">
          <span class="era-gen">GEN ${pad2(gen)}</span>
          <span class="era-num">${pad2(gen)}</span>
          <span class="era-label">${esc(info.label)}</span>
          <span class="era-span">${esc(info.span)}</span>
          <span class="era-count">${list.length} platform${list.length > 1 ? "s" : ""}</span>
          <span class="era-list">${esc(names)}</span>
        </button>`;
    }).join("");
  }

  /* ---------------- modal ---------------- */
  let lastFocus = null;

  function emulatorHTML(e, i, accent) {
    const licenseClass = e.license === "Open source" ? "open"
      : e.license === "Freeware" ? "free" : "commercial";
    const statusClass = e.status.toLowerCase();
    return `
      <div class="emu">
        <span class="emu-rank">${pad2(i + 1)}</span>
        <div>
          <div class="emu-name-row">
            <span class="emu-name">${esc(e.name)}</span>
            ${e.best ? `<span class="emu-best"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.5 12.6 7l6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.8l6-.8z"/></svg> Editor's pick</span>` : ""}
            <span class="badge license-${licenseClass}">${esc(e.license)}</span>
            <span class="status ${statusClass}">${esc(e.status)}</span>
            ${e.note ? `<span class="emu-note">${esc(e.note)}</span>` : ""}
          </div>
          <p class="emu-blurb">${esc(e.blurb)}</p>
          <div class="emu-tags platforms">
            ${e.platforms.map((p) => `<span class="pf" title="${esc(p)}">${PLATFORM_ABBR[p] || p.slice(0, 3).toUpperCase()}</span>`).join("")}
          </div>
        </div>
        <div class="emu-side">
          <div class="accuracy" title="Editorial accuracy rating: ${e.accuracy} of 5">
            <span class="accuracy-label">Accuracy</span>
            <span class="meter">${[1,2,3,4,5].map((n) => `<i class="${n <= e.accuracy ? "on" : ""}"></i>`).join("")}</span>
          </div>
          <a class="visit" href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">
            Project page
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 14 14 6M7 6h7v7"/></svg>
          </a>
        </div>
      </div>`;
  }

  function openConsole(id, updateHash = true) {
    const c = CONSOLES.find((x) => x.id === id);
    if (!c) return;
    const accent = accentOf(c);
    const info = GENERATIONS[c.gen];
    const pool = state.oss ? c.emulators.filter((e) => e.license === "Open source") : c.emulators;
    const oss = pool.filter((e) => e.license === "Open source").length;

    const scroll = $("#modal-scroll");
    scroll.innerHTML = `
      <div class="m-dossier" style="--accent:${accent}">
        <div class="m-visual">
          <span class="m-visual-label">Dossier / ${pad(CONSOLES.indexOf(c) + 1)}</span>
          <span class="m-visual-year" aria-hidden="true">${c.year}</span>
          ${artFor(c)}
        </div>
        <div class="m-info">
          <p class="m-maker">${esc(MAKERS[c.maker].name)} · ${c.year}</p>
          <h2 class="m-title" id="modal-title">${esc(c.name)}</h2>
          <p class="m-alt">${esc(c.alt)}</p>
          <p class="m-blurb">${esc(c.blurb)}</p>
          <dl class="m-meta">
            <div><dt>Generation</dt><dd>${pad2(c.gen)} / ${esc(info.label)}</dd></div>
            <div><dt>Form</dt><dd>${esc(c.form)}</dd></div>
            <div><dt>Media</dt><dd>${esc(c.media)}</dd></div>
            <div><dt>Emulators</dt><dd>${pool.length} · ${oss} open source</dd></div>
          </dl>
          <p class="m-games-label">Signature software</p>
          <div class="m-games">${c.games.map((g) => `<span class="m-game">${esc(g)}</span>`).join("")}</div>
        </div>
      </div>
      <div class="m-emus" style="--accent:${accent}">
        <div class="m-emus-head">
          <h3>The emulator shortlist</h3>
          <span>Editorial order · ${pool.length} entries</span>
        </div>
        ${pool.map((e, i) => emulatorHTML(e, i, accent)).join("")}
        <p class="m-legal">
          <strong>Preservation note.</strong> Some systems need a BIOS, firmware or decryption keys to boot.
          Extract those from hardware you own — emulator projects cannot supply them. This archive links only
          to official project pages and does not host software.
        </p>
      </div>`;

    scroll.scrollTop = 0;
    lastFocus = document.activeElement;
    $("#modal").hidden = false;
    document.body.classList.add("no-scroll");
    if (updateHash) history.replaceState(null, "", "#" + c.id);
    requestAnimationFrame(() => $("#modal-close").focus());
  }

  function closeModal() {
    if ($("#modal").hidden) return;
    $("#modal").hidden = true;
    document.body.classList.remove("no-scroll");
    if (location.hash.length > 1) {
      history.replaceState(null, "", location.pathname + location.search);
    }
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function trapFocus(e) {
    if ($("#modal").hidden || e.key !== "Tab") return;
    const focusables = $$(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      $("#modal .modal-panel")
    ).filter((el) => el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  /* ---------------- filters UI ---------------- */
  function bindFilters() {
    const makerGroup = $("#maker-filter");
    makerGroup.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-maker]");
      if (!btn) return;
      state.maker = btn.dataset.maker;
      $$("[data-maker]", makerGroup).forEach((b) => {
        const on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", String(on));
      });
      render();
    });

    $("#gen-filter").addEventListener("change", (e) => {
      state.gen = e.target.value;
      render();
    });

    $("#sort-filter").addEventListener("change", (e) => {
      state.sort = e.target.value;
      render();
    });

    const ossBtn = $("#oss-toggle");
    ossBtn.addEventListener("click", () => {
      state.oss = !state.oss;
      ossBtn.setAttribute("aria-pressed", String(state.oss));
      render();
    });

    const search = $("#search");
    const clear = $("#search-clear");
    search.addEventListener("input", () => {
      state.q = search.value;
      clear.hidden = search.value.length === 0;
      render();
    });
    clear.addEventListener("click", () => {
      search.value = "";
      state.q = "";
      clear.hidden = true;
      search.focus();
      render();
    });

    const doReset = () => {
      state.maker = "all";
      state.gen = "all";
      state.sort = "chrono";
      state.oss = false;
      state.q = "";
      search.value = "";
      clear.hidden = true;
      $("#gen-filter").value = "all";
      $("#sort-filter").value = "chrono";
      ossBtn.setAttribute("aria-pressed", "false");
      $$("[data-maker]", makerGroup).forEach((b) => {
        const on = b.dataset.maker === "all";
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", String(on));
      });
      render();
    };
    $("#reset-filters").addEventListener("click", doReset);
    $("#empty-reset").addEventListener("click", doReset);

    $("#search-jump").addEventListener("click", () => {
      $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => search.focus({ preventScroll: true }), 550);
    });

    $("#hero-random").addEventListener("click", () => {
      const c = CONSOLES[Math.floor(Math.random() * CONSOLES.length)];
      openConsole(c.id);
    });

    $("#timeline-rail").addEventListener("click", (e) => {
      const era = e.target.closest("[data-gen]");
      if (!era) return;
      const gen = era.dataset.gen;
      const next = state.gen === gen ? "all" : gen;
      state.gen = next;
      $("#gen-filter").value = next;
      render();
      $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------------- card interactions ---------------- */
  function bindCards() {
    const grid = $("#grid");
    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      if (card) openConsole(card.dataset.id);
    });
    grid.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".card");
      if (!card) return;
      e.preventDefault();
      openConsole(card.dataset.id);
    });
  }

  /* ---------------- modal events ---------------- */
  function bindModal() {
    $("#modal-close").addEventListener("click", closeModal);
    $("#modal").addEventListener("click", (e) => {
      if (e.target.closest("[data-close]")) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
      trapFocus(e);
      if (e.key === "/" && $("#modal").hidden) {
        const tag = (document.activeElement?.tagName || "").toLowerCase();
        if (tag !== "input" && tag !== "textarea" && tag !== "select") {
          e.preventDefault();
          $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => $("#search").focus({ preventScroll: true }), 550);
        }
      }
    });
  }

  /* ---------------- reveal & misc ---------------- */
  function setupReveal() {
    $$(".hero [data-reveal]").forEach((el, i) => {
      setTimeout(() => el.classList.add("is-in"), 120 + i * 95);
    });

    const targets = [
      ...$$(".section-head"),
      ...$$(".note-card"),
      ...$$(".retro-callout"),
      $("#timeline-rail")
    ].filter(Boolean);
    targets.forEach((el) => el.setAttribute("data-reveal", ""));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      targets.forEach((el) => io.observe(el));
    } else {
      targets.forEach((el) => el.classList.add("is-in"));
    }

    const header = $(".site-head");
    const progress = $("#scroll-progress");
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 16);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }

  function setupStatsObserver() {
    const band = $(".stats-band");
    if (!("IntersectionObserver" in window)) { animateStats(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
          io.disconnect();
        }
      });
    }, { threshold: 0.35 });
    io.observe(band);
  }

  function init() {
    renderHero();
    renderTicker();
    renderTimeline();
    prepareStats();
    bindFilters();
    bindCards();
    bindModal();
    render();
    setupReveal();
    setupStatsObserver();

    if (location.hash.length > 1) {
      const id = location.hash.slice(1);
      if (CONSOLES.some((c) => c.id === id)) openConsole(id, false);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
