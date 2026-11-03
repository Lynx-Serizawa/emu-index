/* ============================================================
   EMU//INDEX — platform & emulator dataset
   A curated snapshot. Accuracy ratings are editorial, 1–5.
   ============================================================ */

const MAKERS = {
  nintendo:  { name: "Nintendo",  accent: "#ff4d5e" },
  sega:      { name: "Sega",      accent: "#4d8dff" },
  sony:      { name: "Sony",      accent: "#9b7bff" },
  microsoft: { name: "Microsoft", accent: "#3ddc84" },
  atari:     { name: "Atari",     accent: "#ffb02e" },
  snk:       { name: "SNK",       accent: "#ff6fa5" },
  nec:       { name: "NEC",       accent: "#ff8a4c" },
  other:     { name: "Other",     accent: "#9fb0c7" }
};

const GENERATIONS = {
  2: { label: "Cartridge Dawn",  span: "1977 — 1983" },
  3: { label: "8-bit Boom",      span: "1983 — 1989" },
  4: { label: "16-bit Wars",     span: "1987 — 1993" },
  5: { label: "The 3D Leap",     span: "1993 — 1999" },
  6: { label: "The Online Age",  span: "1998 — 2005" },
  7: { label: "The HD Era",      span: "2004 — 2012" },
  8: { label: "The Connected Gen", span: "2011 — 2017" }
};

const CONSOLES = [
  /* ---------------- GENERATION 2 ---------------- */
  {
    id: "atari-2600",
    name: "Atari 2600",
    alt: "Atari VCS",
    maker: "atari",
    year: 1977,
    gen: 2,
    form: "Home console",
    media: "Cartridge",
    tagline: "The wood-panelled origin story.",
    blurb: "The machine that turned the cartridge into a household object. Its TIA chip is primitive, idiosyncratic, and still capable of surprises in the right hands.",
    games: ["Pitfall!", "Yars' Revenge", "Adventure"],
    emulators: [
      { name: "Stella", blurb: "The reference 2600 emulator, with a debugger, phosphor persistence and meticulous TIA timing.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://stella-emu.github.io/", best: true },
      { name: "Gopher2600", blurb: "A preservationist's dream: superb video modes, cartridge bankswitch analysis and an exceptional debugger.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/JetSetIlly/Gopher2600" },
      { name: "MAME", blurb: "Arcade-grade emulation of the 2600 inside a museum of thousands of other machines.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.mamedev.org/" },
      { name: "Javatari", blurb: "Zero-install emulation in a browser tab. Perfect for a quick round of Combat.", platforms: ["Browser"], license: "Open source", status: "Maintained", accuracy: 4, url: "https://javatari.org/" }
    ]
  },
  {
    id: "intellivision",
    name: "Intellivision",
    alt: "Mattel Intellivision",
    maker: "other",
    year: 1979,
    gen: 2,
    form: "Home console",
    media: "Cartridge",
    tagline: "Mattel's smarter, stranger 16-bit challenger.",
    blurb: "It promised better sports games and a bizarre disc-and-keypad controller. The Intellivision's quirks make accurate emulation of its STIC video chip a genuinely interesting problem.",
    games: ["Astrosmash", "Utopia", "Advanced Dungeons & Dragons"],
    emulators: [
      { name: "jzIntv", blurb: "The long-running gold standard, with cycle-level timing and a keyboard-mapped disc controller.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "http://spatula-city.org/~im14u2c/intv/", best: true },
      { name: "MAME", blurb: "Broad, well-documented Intellivision support. A dependable second opinion.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.mamedev.org/" },
      { name: "FreeIntv", blurb: "A focused libretro core that slots straight into RetroArch with controller mapping included.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Maintained", accuracy: 4, url: "https://github.com/libretro/FreeIntv", note: "RetroArch core" }
    ]
  },
  {
    id: "colecovision",
    name: "ColecoVision",
    alt: "Coleco Vision",
    maker: "other",
    year: 1982,
    gen: 2,
    form: "Home console",
    media: "Cartridge",
    tagline: "Arcade fidelity, living-room scale.",
    blurb: "Coleco sold the dream of quarter-perfect arcade ports at home — and for a moment, it absolutely delivered. Its hardware is close enough to the Z80 arcade boards it imitated.",
    games: ["Donkey Kong", "Zaxxon", "Lady Bug"],
    emulators: [
      { name: "ColEM", blurb: "Marat Fayzullin's compact, precise emulator with a built-in debugger and snapshot support.", platforms: ["Windows", "macOS", "Linux"], license: "Freeware", status: "Active", accuracy: 5, url: "https://fms.komkon.org/ColEm/", best: true },
      { name: "Gearcoleco", blurb: "Clean, accurate emulation from the Gearboy author, with a modern UI and controller support.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/drhelius/Gearcoleco" },
      { name: "MAME", blurb: "Comprehensive ColecoVision coverage, including obscure expansion hardware.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.mamedev.org/" }
    ]
  },
  {
    id: "atari-5200",
    name: "Atari 5200",
    alt: "Atari SuperSystem",
    maker: "atari",
    year: 1982,
    gen: 2,
    form: "Home console",
    media: "Cartridge",
    tagline: "The Atari 8-bit, in a much bigger box.",
    blurb: "An Atari 400 in disguise, with great graphics and one of the most notorious controllers ever shipped. Emulation lets you skip the joystick and keep the software.",
    games: ["Star Raiders", "Centipede", "Rescue on Fractalus!"],
    emulators: [
      { name: "Altirra", blurb: "Astonishingly deep Atari 8-bit emulation, with 5200 mode, profiling and hardware-level debugging.", platforms: ["Windows"], license: "Freeware", status: "Active", accuracy: 5, url: "https://www.virtualdub.org/altirra.html", best: true },
      { name: "Atari800", blurb: "The portable, long-lived workhorse for Atari 8-bit and 5200 software.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://atari800.github.io/" },
      { name: "MAME", blurb: "Accurate hardware emulation with the usual exhaustive documentation.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://www.mamedev.org/" }
    ]
  },
  {
    id: "vectrex",
    name: "Vectrex",
    alt: "GCE Vectrex",
    maker: "other",
    year: 1982,
    gen: 2,
    form: "Tabletop",
    media: "Cartridge",
    tagline: "A vector monitor with a controller attached.",
    blurb: "No TV required: the Vectrex drew luminous wireframes on its own CRT. Emulators have to recreate the glow, the flicker, and the strange intimacy of vector graphics.",
    games: ["Minestorm", "Scramble", "Star Castle"],
    emulators: [
      { name: "ParaJVE", blurb: "Java-based, beautifully presented, and still the most atmospheric way to play Vectrex software.", platforms: ["Windows", "macOS", "Linux"], license: "Freeware", status: "Dormant", accuracy: 5, url: "http://www.vectrex.fr/ParaJVE/", best: true },
      { name: "MAME", blurb: "Accurate vector rendering with configurable beam and phosphor behaviour.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.mamedev.org/" },
      { name: "Vecx", blurb: "A lightweight libretro core for quick, low-friction Vectrex sessions.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Dormant", accuracy: 4, url: "https://github.com/libretro/libretro-vecx", note: "RetroArch core" }
    ]
  },

  /* ---------------- GENERATION 3 ---------------- */
  {
    id: "nes",
    name: "Nintendo Entertainment System",
    alt: "Famicom / NES",
    maker: "nintendo",
    year: 1983,
    gen: 3,
    form: "Home console",
    media: "Cartridge",
    tagline: "The console that rebuilt the industry.",
    blurb: "A modest 6502 and a custom picture unit became the foundation of modern console design. The NES library is vast, weird, and emulated with near-perfect fidelity today.",
    games: ["Super Mario Bros. 3", "Mega Man 2", "Castlevania III"],
    emulators: [
      { name: "Mesen", blurb: "Cycle-accurate emulation, a full debugger, HD packs and a genuinely lovely UI. The benchmark.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.mesen.ca/", best: true },
      { name: "Nestopia UE", blurb: "Rock-solid accuracy, a huge mapper database and a lightweight footprint.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Maintained", accuracy: 5, url: "https://github.com/0ldsk00l/nestopia" },
      { name: "FCEUX", blurb: "The tinkerer's choice: Lua scripting, memory tools, netplay and decades of community tooling.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://fceux.com/" },
      { name: "puNES", blurb: "A quiet overachiever with excellent timing accuracy and a minimal interface.", platforms: ["Windows", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/punesemu/puNES" }
    ]
  },
  {
    id: "master-system",
    name: "Sega Master System",
    alt: "Sega Mark III / SMS",
    maker: "sega",
    year: 1985,
    gen: 3,
    form: "Home console",
    media: "Cartridge",
    tagline: "Sega's 8-bit answer, louder than it looks.",
    blurb: "Outgunned in Japan and North America, beloved in Europe and Brazil. The Master System's clean sprite hardware still produces some of the sharpest 8-bit visuals around.",
    games: ["Wonder Boy III", "Phantasy Star", "Sonic the Hedgehog"],
    emulators: [
      { name: "Emulicious", blurb: "Java-based, ridiculously accurate, with a debugger and tools that make homebrew developers swoon.", platforms: ["Windows", "macOS", "Linux"], license: "Freeware", status: "Active", accuracy: 5, url: "https://emulicious.net/", best: true },
      { name: "Genesis Plus GX", blurb: "The definitive Sega 8/16-bit libretro core. Fast, flexible and extremely compatible.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/ekeeke/Genesis-Plus-GX", note: "RetroArch core" },
      { name: "Kega Fusion", blurb: "The old king of Sega emulation. Still convenient, still surprisingly capable.", platforms: ["Windows", "macOS", "Linux"], license: "Freeware", status: "Dormant", accuracy: 4, url: "https://www.carpeludum.com/kega-fusion/" },
      { name: "MEKA", blurb: "A historically important, no-frills emulator with excellent SMS and Game Gear coverage.", platforms: ["Windows", "Linux"], license: "Open source", status: "Dormant", accuracy: 4, url: "https://github.com/ocornut/meka" }
    ]
  },
  {
    id: "atari-7800",
    name: "Atari 7800",
    alt: "Atari 7800 ProSystem",
    maker: "atari",
    year: 1986,
    gen: 3,
    form: "Home console",
    media: "Cartridge",
    tagline: "Atari's late, great arcade machine.",
    blurb: "Backwards compatible with the 2600 and capable of striking arcade ports, the 7800 arrived after the market had already moved on. Its MARIA chip deserves a closer look.",
    games: ["Food Fight", "Ninja Golf", "Commando"],
    emulators: [
      { name: "A7800", blurb: "A dedicated, accuracy-focused 7800 emulator with full MARIA and POKEY handling.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/7800-devtools/a7800", best: true },
      { name: "MAME", blurb: "Comprehensive support, including the console's less-documented peripherals.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.mamedev.org/" },
      { name: "Ares", blurb: "A modern multi-system emulator with a clean interface and solid 7800 compatibility.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://ares-emu.net/" }
    ]
  },

  /* ---------------- GENERATION 4 ---------------- */
  {
    id: "pc-engine",
    name: "PC Engine",
    alt: "TurboGrafx-16",
    maker: "nec",
    year: 1987,
    gen: 4,
    form: "Home console",
    media: "HuCard / CD-ROM",
    tagline: "Small box, enormous personality.",
    blurb: "NEC's compact powerhouse brought arcade-quality shooters and CD audio to the living room. The HuCard library is a treasure trove of genres the West barely saw.",
    games: ["Bonk's Revenge", "Ys Book I & II", "R-Type"],
    emulators: [
      { name: "Mednafen", blurb: "The accuracy benchmark for PC Engine and CD-ROM² titles, wrapped in a fussy but powerful CLI/UI.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://mednafen.github.io/", best: true },
      { name: "Ares", blurb: "A polished, modern front end with excellent PC Engine and CD support.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://ares-emu.net/" },
      { name: "Beetle PCE", blurb: "Mednafen's PC Engine core, packaged for RetroArch with shaders and netplay ready to go.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/libretro/beetle-pce-fast-libretro", note: "RetroArch core" },
      { name: "Ootake", blurb: "A Windows classic with broad CD-ROM support and a distinctly Japanese utility feel.", platforms: ["Windows"], license: "Freeware", status: "Dormant", accuracy: 4, url: "https://www.ouma.jp/ootake/" }
    ]
  },
  {
    id: "genesis",
    name: "Sega Genesis",
    alt: "Mega Drive",
    maker: "sega",
    year: 1988,
    gen: 4,
    form: "Home console",
    media: "Cartridge / CD / 32X",
    tagline: "Blast processing, and then some.",
    blurb: "The Mega Drive's 68000 and Yamaha FM chip defined a generation of arcade-like action. Add-ons expanded it into a CD player and a 32-bit hybrid — all of which modern emulators handle.",
    games: ["Sonic the Hedgehog 2", "Streets of Rage 2", "Gunstar Heroes"],
    emulators: [
      { name: "BlastEm", blurb: "A precision-focused emulator with superb timing accuracy and a small, elegant footprint.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.retrodev.com/blastem/", best: true },
      { name: "Genesis Plus GX", blurb: "The Swiss Army knife of Sega emulation: cartridge, Sega CD, 32X, Master System and Game Gear.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/ekeeke/Genesis-Plus-GX", note: "RetroArch core" },
      { name: "Ares", blurb: "Modern multi-system accuracy with a focus on clean, low-latency presentation.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://ares-emu.net/" },
      { name: "Kega Fusion", blurb: "The plug-and-play veteran. Handy for Sega CD and 32X, if a little long in the tooth.", platforms: ["Windows", "macOS", "Linux"], license: "Freeware", status: "Dormant", accuracy: 4, url: "https://www.carpeludum.com/kega-fusion/" },
      { name: "PicoDrive", blurb: "A fast, portable Sega core with excellent Sega CD and 32X support, popular in RetroArch setups.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://github.com/irixxxx/picodrive", note: "RetroArch core" }
    ]
  },
  {
    id: "game-boy",
    name: "Game Boy",
    alt: "Nintendo Game Boy / DMG-01",
    maker: "nintendo",
    year: 1989,
    gen: 4,
    form: "Handheld",
    media: "Cartridge",
    tagline: "Thirty hours on four AA batteries.",
    blurb: "A monochrome screen, a sharp d-pad, and a library that refuses to age. The Game Boy's simplicity hides subtle timing behaviour that the best emulators now reproduce exactly.",
    games: ["Tetris", "Link's Awakening", "Pokémon Red / Blue"],
    emulators: [
      { name: "SameBoy", blurb: "Cycle-accurate, open source, and loaded with tools. The definitive Game Boy emulator.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://sameboy.github.io/", best: true },
      { name: "BGB", blurb: "The beloved Windows emulator with link cable support, palettes, and a legendary debugger.", platforms: ["Windows"], license: "Freeware", status: "Active", accuracy: 5, url: "https://bgb.bircd.org/" },
      { name: "Gambatte", blurb: "A lean, remarkably accurate core that became the backbone of many retro handheld setups.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Maintained", accuracy: 5, url: "https://github.com/libretro/gambatte-libretro" },
      { name: "mGBA", blurb: "A modern all-rounder with Game Boy support bolted onto its excellent GBA core.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://mgba.io/" }
    ]
  },
  {
    id: "atari-lynx",
    name: "Atari Lynx",
    alt: "Atari Lynx I / II",
    maker: "atari",
    year: 1989,
    gen: 4,
    form: "Handheld",
    media: "Cartridge",
    tagline: "The first colour handheld, and a beautiful misfire.",
    blurb: "Hardware sprite scaling, backlit colour, and a battery habit that could drain a small town. The Lynx library is small but full of genuinely ambitious handheld experiments.",
    games: ["California Games", "Chip's Challenge", "Zarlor Mercenary"],
    emulators: [
      { name: "Mednafen", blurb: "The most accurate Lynx emulation available, including its tricky collision and refresh behaviour.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://mednafen.github.io/", best: true },
      { name: "Handy", blurb: "The original Lynx emulator — simple, portable and still part of the libretro ecosystem.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Dormant", accuracy: 4, url: "https://github.com/libretro/libretro-handy", note: "RetroArch core" },
      { name: "MAME", blurb: "Thorough hardware documentation and support for Lynx prototypes and oddities.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.mamedev.org/" }
    ]
  },
  {
    id: "neo-geo",
    name: "Neo Geo AES",
    alt: "Neo Geo MVS / AES",
    maker: "snk",
    year: 1990,
    gen: 4,
    form: "Home console",
    media: "Cartridge",
    tagline: "Arcade hardware in your living room.",
    blurb: "SNK's console was literally the arcade board, sold at an eye-watering price. Today it is the most romantic way to play Metal Slug on a PC.",
    games: ["Metal Slug 3", "The King of Fighters '98", "Samurai Shodown II"],
    emulators: [
      { name: "FinalBurn Neo", blurb: "Fast, accurate and built for fighting-game fluency. The community standard for Neo Geo.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/finalburnneo/FBNeo", best: true },
      { name: "MAME", blurb: "The archival option, with exact MVS/AES hardware emulation and comprehensive documentation.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.mamedev.org/" },
      { name: "Geolith", blurb: "A newer, accuracy-first Neo Geo core that is rapidly becoming a favourite.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/libretro/geolith-libretro", note: "RetroArch core" }
    ]
  },
  {
    id: "snes",
    name: "Super Nintendo",
    alt: "SNES / Super Famicom",
    maker: "nintendo",
    year: 1990,
    gen: 4,
    form: "Home console",
    media: "Cartridge",
    tagline: "16 bits of pure, polished magic.",
    blurb: "Mode 7, the SPC700, and a library that reads like a greatest-of-all-time list. SNES emulation is a mature craft, from cycle-accurate labs to everyday convenience.",
    games: ["Super Metroid", "Chrono Trigger", "Super Mario World"],
    emulators: [
      { name: "bsnes", blurb: "Accuracy as a design principle. The reference point for SNES hardware behaviour.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Maintained", accuracy: 5, url: "https://github.com/bsnes-emu/bsnes", best: true },
      { name: "Snes9x", blurb: "The dependable classic: fast, compatible, and comfortable on almost any machine.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://www.snes9x.com/" },
      { name: "Ares", blurb: "A clean modern front end with a high-accuracy SNES core and beautiful presentation.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://ares-emu.net/" },
      { name: "Mesen", blurb: "Mesen's multi-system evolution brings its excellent SNES core and debugger into one app.", platforms: ["Windows", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.mesen.ca/" }
    ]
  },
  {
    id: "game-gear",
    name: "Game Gear",
    alt: "Sega Game Gear",
    maker: "sega",
    year: 1990,
    gen: 4,
    form: "Handheld",
    media: "Cartridge",
    tagline: "A Master System you could hold.",
    blurb: "Six AA batteries, a backlit colour screen, and a library of Master System ports plus original gems. Emulation is mature, and the screen can finally be tuned to something legible.",
    games: ["Shinobi II", "Sonic Triple Trouble", "Columns"],
    emulators: [
      { name: "Emulicious", blurb: "The accuracy champion for Sega's 8-bit handheld, with a full debugger and colour tools.", platforms: ["Windows", "macOS", "Linux"], license: "Freeware", status: "Active", accuracy: 5, url: "https://emulicious.net/", best: true },
      { name: "Genesis Plus GX", blurb: "The same excellent Sega 8/16-bit core, Game Gear mode included.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/ekeeke/Genesis-Plus-GX", note: "RetroArch core" },
      { name: "Kega Fusion", blurb: "Still a convenient all-in-one for Sega hardware, with Game Gear screen options.", platforms: ["Windows", "macOS", "Linux"], license: "Freeware", status: "Dormant", accuracy: 4, url: "https://www.carpeludum.com/kega-fusion/" },
      { name: "Ares", blurb: "Modern, accurate and pleasant to use, with a properly stretched handheld display.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://ares-emu.net/" }
    ]
  },

  /* ---------------- GENERATION 5 ---------------- */
  {
    id: "3do",
    name: "3DO Interactive Multiplayer",
    alt: "Panasonic 3DO",
    maker: "other",
    year: 1993,
    gen: 5,
    form: "Home console",
    media: "CD-ROM",
    tagline: "The console that wanted to be a standard.",
    blurb: "A bold, licensed hardware platform with full-motion video ambitions and a handful of genuinely great games. Its emulation scene is small but quietly dedicated.",
    games: ["Road Rash", "Star Control II", "The Need for Speed"],
    emulators: [
      { name: "Phoenix", blurb: "The most complete 3DO emulator, with a focus on accuracy and a straightforward Windows UI.", platforms: ["Windows"], license: "Freeware", status: "Active", accuracy: 4, url: "https://www.arts-union.ru/node/23", best: true },
      { name: "4DO", blurb: "An open-source 3DO emulator built on the original FreeDO codebase.", platforms: ["Windows"], license: "Open source", status: "Dormant", accuracy: 4, url: "https://www.4do.org/" },
      { name: "MAME", blurb: "Hardware-level documentation and a slowly maturing 3DO driver.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 3, url: "https://www.mamedev.org/" }
    ]
  },
  {
    id: "jaguar",
    name: "Atari Jaguar",
    alt: "Atari Jaguar",
    maker: "atari",
    year: 1993,
    gen: 5,
    form: "Home console",
    media: "Cartridge",
    tagline: "Do the math. Then play Tempest 2000.",
    blurb: "Five processors, two 32-bit buses, and a marketing department running at full tilt. The Jaguar is difficult hardware — which makes BigPEmu's near-perfect results all the more impressive.",
    games: ["Tempest 2000", "Alien vs Predator", "Rayman"],
    emulators: [
      { name: "BigPEmu", blurb: "A genuinely remarkable Jaguar emulator: fast, accurate, feature-rich and still being developed.", platforms: ["Windows", "macOS", "Linux"], license: "Freeware", status: "Active", accuracy: 5, url: "https://www.richwhitehouse.com/jaguar/", best: true },
      { name: "Virtual Jaguar", blurb: "The long-standing open-source option, including a libretro core for RetroArch users.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Dormant", accuracy: 3, url: "https://www.icculus.org/virtualjaguar/" },
      { name: "MAME", blurb: "A useful archival implementation, though compatibility trails BigPEmu.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 3, url: "https://www.mamedev.org/" }
    ]
  },
  {
    id: "playstation",
    name: "PlayStation",
    alt: "PS1 / PSone",
    maker: "sony",
    year: 1994,
    gen: 5,
    form: "Home console",
    media: "CD-ROM",
    tagline: "The polygon revolution, on CD.",
    blurb: "Sony's debut rewrote the rules of the industry. Its wobbling polygons and CD audio are now preservation territory — and the emulation is arguably better than the original hardware.",
    games: ["Metal Gear Solid", "Final Fantasy VII", "Castlevania: Symphony of the Night"],
    emulators: [
      { name: "DuckStation", blurb: "A modern marvel: widescreen hacks, PGXP geometry correction, upscaling and a stellar UI.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.duckstation.org/", best: true },
      { name: "Mednafen", blurb: "The accuracy purist's choice, with a superb CD image and timing model.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://mednafen.github.io/" },
      { name: "PCSX-Redux", blurb: "A research-grade emulator with a built-in debugger, Lua scripting and reverse-engineering tools.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://pcsx-redux.consoledev.net/" },
      { name: "ePSXe", blurb: "The emulator that taught a generation about plugins. Still competent, now a comfortable legacy pick.", platforms: ["Windows", "macOS", "Linux"], license: "Freeware", status: "Dormant", accuracy: 4, url: "https://www.epsxe.com/" }
    ]
  },
  {
    id: "saturn",
    name: "Sega Saturn",
    alt: "Sega Saturn",
    maker: "sega",
    year: 1994,
    gen: 5,
    form: "Home console",
    media: "CD-ROM",
    tagline: "Dual SH-2s and a beautiful, difficult legacy.",
    blurb: "A famously complex machine with two CPUs, two video processors and a library full of arcade perfection. Saturn emulation used to be a graveyard; today it is thriving.",
    games: ["Panzer Dragoon Saga", "Radiant Silvergun", "NiGHTS into Dreams"],
    emulators: [
      { name: "Mednafen", blurb: "The Saturn core that changed everything: high accuracy, CD support, and serious compatibility.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://mednafen.github.io/", best: true },
      { name: "Kronos", blurb: "An actively developed Saturn emulator with performance options and RetroArch integration.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://github.com/FCare/Kronos" },
      { name: "SSF", blurb: "The Japanese veteran that kept Saturn emulation alive for years. Windows-focused.", platforms: ["Windows"], license: "Freeware", status: "Maintained", accuracy: 4, url: "https://github.com/shimazzz/SEGASaturnEmulator-SSF/releases" },
      { name: "Ymir", blurb: "An ambitious accuracy-focused Saturn emulator with a modern architecture.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Dormant", accuracy: 4, url: "https://github.com/StrikerX3/Ymir" },
      { name: "Yabause", blurb: "The pioneering open-source Saturn emulator. Historically important, now mostly superseded.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Dormant", accuracy: 3, url: "https://github.com/Yabause/yabause" }
    ]
  },
  {
    id: "virtual-boy",
    name: "Virtual Boy",
    alt: "Nintendo Virtual Boy",
    maker: "nintendo",
    year: 1995,
    gen: 5,
    form: "Tabletop",
    media: "Cartridge",
    tagline: "Red LEDs, headaches, and a cult following.",
    blurb: "Nintendo's infamous stereoscopic experiment lasted barely a year. Emulators can finally render its two red displays comfortably — no neck strap required.",
    games: ["Virtual Boy Wario Land", "Red Alarm", "Jack Bros."],
    emulators: [
      { name: "Mednafen", blurb: "The most accurate Virtual Boy emulation, with adjustable anaglyph and stereo output.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://mednafen.github.io/", best: true },
      { name: "MAME", blurb: "A dependable alternative with good timing accuracy and video options.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://www.mamedev.org/" }
    ]
  },
  {
    id: "n64",
    name: "Nintendo 64",
    alt: "N64",
    maker: "nintendo",
    year: 1996,
    gen: 5,
    form: "Home console",
    media: "Cartridge",
    tagline: "Analog sticks, four ports, and a new dimension.",
    blurb: "The N64 traded textures for latency and cartridges for load times. Its custom Reality Coprocessor is tricky, but modern emulators can render its library with startling clarity.",
    games: ["Super Mario 64", "The Legend of Zelda: Ocarina of Time", "GoldenEye 007"],
    emulators: [
      { name: "Project64", blurb: "The most familiar N64 emulator, with a big plugin ecosystem and years of community knowledge.", platforms: ["Windows"], license: "Open source", status: "Active", accuracy: 4, url: "https://www.pj64-emu.com/", best: true },
      { name: "RMG", blurb: "Rosalie's Mupen GUI: a clean, modern front end around an accurate Mupen64Plus core.", platforms: ["Windows", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://github.com/Rosalie241/RMG" },
      { name: "Ares", blurb: "A low-level, accuracy-first N64 core with impressive hardware behaviour reproduction.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://ares-emu.net/" },
      { name: "Mupen64Plus", blurb: "The portable core that powers countless front ends, with solid compatibility and plugin choice.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Maintained", accuracy: 4, url: "https://mupen64plus.org/" }
    ]
  },
  {
    id: "game-boy-color",
    name: "Game Boy Color",
    alt: "GBC",
    maker: "nintendo",
    year: 1998,
    gen: 5,
    form: "Handheld",
    media: "Cartridge",
    tagline: "The world, in eight glorious palettes.",
    blurb: "A modest upgrade that gave the Game Boy a colour screen and a second life. Its backwards compatibility makes it the ideal single handheld to emulate.",
    games: ["Pokémon Crystal", "Zelda: Oracle of Seasons", "Metal Gear Solid"],
    emulators: [
      { name: "SameBoy", blurb: "Cycle-accurate GBC emulation with palettes, link support and an excellent debugger.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://sameboy.github.io/", best: true },
      { name: "BGB", blurb: "A Windows institution, with colour correction, link cable emulation and debugging tools.", platforms: ["Windows"], license: "Freeware", status: "Active", accuracy: 5, url: "https://bgb.bircd.org/" },
      { name: "Gambatte", blurb: "Lean, accurate and perfect for RetroArch setups with shader-driven LCD effects.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Maintained", accuracy: 5, url: "https://github.com/libretro/gambatte-libretro" },
      { name: "mGBA", blurb: "A comfortable all-in-one with GBC support and a friendly interface.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://mgba.io/" }
    ]
  },

  /* ---------------- GENERATION 6 ---------------- */
  {
    id: "dreamcast",
    name: "Dreamcast",
    alt: "Sega Dreamcast",
    maker: "sega",
    year: 1998,
    gen: 6,
    form: "Home console",
    media: "GD-ROM",
    tagline: "It's thinking. It's still thinking.",
    blurb: "Sega's swan song was ahead of its time: online play, VMUs, and an absurdly strong arcade library. Modern Dreamcast emulation is fast, accurate and thriving.",
    games: ["Sonic Adventure", "Shenmue", "Jet Set Radio"],
    emulators: [
      { name: "Flycast", blurb: "The definitive Dreamcast emulator: Naomi arcade support, network play and superb compatibility.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/flyinghead/flycast", best: true },
      { name: "Redream", blurb: "Beautifully simple, with automatic configuration and a polished interface. Premium features are paid.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Freeware", status: "Active", accuracy: 4, url: "https://redream.io/" },
      { name: "DEmul", blurb: "The Windows veteran with broad Naomi and Atomiswave coverage. Development has slowed.", platforms: ["Windows"], license: "Freeware", status: "Dormant", accuracy: 3, url: "http://demul.emulation64.com/" }
    ]
  },
  {
    id: "ps2",
    name: "PlayStation 2",
    alt: "PS2",
    maker: "sony",
    year: 2000,
    gen: 6,
    form: "Home console",
    media: "DVD-ROM / CD-ROM",
    tagline: "The best-selling console of all time.",
    blurb: "A DVD player that happened to play host to one of the deepest libraries ever assembled. PCSX2's long road from plugin chaos to a unified emulator is one of emulation's great stories.",
    games: ["Shadow of the Colossus", "Metal Gear Solid 3", "Okami"],
    emulators: [
      { name: "PCSX2", blurb: "The definitive PS2 emulator, now with a unified UI, widescreen patches and impressive upscaling.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://pcsx2.net/", best: true },
      { name: "LRPS2", blurb: "PCSX2's core repackaged for RetroArch, for couch-friendly front-end setups.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://docs.libretro.com/library/lrps2/", note: "RetroArch core" },
      { name: "Play!", blurb: "An independent, from-scratch PS2 emulator with a clean cross-platform interface.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Maintained", accuracy: 3, url: "https://github.com/jpd002/Play-" }
    ]
  },
  {
    id: "game-boy-advance",
    name: "Game Boy Advance",
    alt: "GBA / GBA SP",
    maker: "nintendo",
    year: 2001,
    gen: 6,
    form: "Handheld",
    media: "Cartridge",
    tagline: "32 bits in your pocket.",
    blurb: "A handheld with a 32-bit ARM CPU and a library that punched far above its weight. Link cables and a famously dark screen are both fixed by emulation.",
    games: ["Metroid Fusion", "Golden Sun", "Pokémon Emerald"],
    emulators: [
      { name: "mGBA", blurb: "Fast, accurate, feature-complete: the default answer for GBA emulation and a superb all-rounder.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Active", accuracy: 5, url: "https://mgba.io/", best: true },
      { name: "NanoBoyAdvance", blurb: "A cycle-accurate laboratory-grade GBA emulator with a focus on hardware precision.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 5, url: "https://github.com/nba-emu/NanoBoyAdvance" },
      { name: "VisualBoyAdvance-M", blurb: "The maintained successor to the classic VBA, comfortable and widely supported.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://vba-m.com/" },
      { name: "SkyEmu", blurb: "A newer, modern emulator with a clean interface and growing accuracy credentials.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Active", accuracy: 4, url: "https://skyemu.app/" }
    ]
  },
  {
    id: "gamecube",
    name: "Nintendo GameCube",
    alt: "GameCube / NGC",
    maker: "nintendo",
    year: 2001,
    gen: 6,
    form: "Home console",
    media: "MiniDVD",
    tagline: "A purple box with a legendary library.",
    blurb: "Compact, cheap and home to some of Nintendo's most ambitious games. Dolphin has spent two decades turning it into one of the most polished emulators in existence.",
    games: ["Metroid Prime", "Resident Evil 4", "Super Smash Bros. Melee"],
    emulators: [
      { name: "Dolphin", blurb: "The gold standard for GameCube and Wii emulation: HD rendering, netplay, and constant refinement.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Active", accuracy: 5, url: "https://dolphin-emu.org/", best: true }
    ]
  },
  {
    id: "xbox",
    name: "Xbox",
    alt: "Original Xbox",
    maker: "microsoft",
    year: 2001,
    gen: 6,
    form: "Home console",
    media: "DVD-ROM",
    tagline: "Microsoft's big, green, PC-shaped debut.",
    blurb: "An Intel Pentium III and an NVIDIA GPU in a black tower. Original Xbox emulation is still young, but xemu has turned Halo nights into a reality.",
    games: ["Halo: Combat Evolved", "Jet Set Radio Future", "Ninja Gaiden"],
    emulators: [
      { name: "xemu", blurb: "The leading original-Xbox emulator, with a focus on accuracy and steady compatibility gains.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://xemu.app/", best: true },
      { name: "Cxbx-Reloaded", blurb: "A high-level emulator with a strong focus on getting popular titles running quickly.", platforms: ["Windows"], license: "Open source", status: "Dormant", accuracy: 3, url: "https://cxbx-reloaded.co.uk/" }
    ]
  },

  /* ---------------- GENERATION 7 ---------------- */
  {
    id: "nds",
    name: "Nintendo DS",
    alt: "DS / DS Lite / DSi",
    maker: "nintendo",
    year: 2004,
    gen: 7,
    form: "Handheld",
    media: "Cartridge",
    tagline: "Two screens, one stylus, endless ideas.",
    blurb: "The DS turned the handheld into a toy box of touch, voice and dual-screen gimmicks. Emulators need to juggle two displays, a stylus and local wireless — and the best ones do it beautifully.",
    games: ["Mario Kart DS", "Chrono Trigger DS", "The World Ends with You"],
    emulators: [
      { name: "melonDS", blurb: "The modern reference: accurate, fast, with Wi-Fi emulation and a clean dual-screen UI.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Active", accuracy: 5, url: "https://melonds.kuribo64.net/", best: true },
      { name: "DeSmuME", blurb: "The long-serving veteran, still maintained and available in almost every front end.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Maintained", accuracy: 4, url: "https://desmume.org/" },
      { name: "No$GBA", blurb: "A remarkably fast and compatible emulator from the no$ series, with useful debugging tools.", platforms: ["Windows"], license: "Freeware", status: "Dormant", accuracy: 4, url: "https://www.nogba.com/" }
    ]
  },
  {
    id: "psp",
    name: "PlayStation Portable",
    alt: "PSP-1000 / 2000 / 3000",
    maker: "sony",
    year: 2004,
    gen: 7,
    form: "Handheld",
    media: "UMD",
    tagline: "Console-scale games, pocket-scale disc.",
    blurb: "Sony's UMD handheld brought near-PS2 visuals to the commute. PPSSPP has become one of the most impressive emulators ever made, running everywhere from phones to desktops.",
    games: ["Crisis Core: Final Fantasy VII", "Patapon", "God of War: Chains of Olympus"],
    emulators: [
      { name: "PPSSPP", blurb: "Fast, accurate, constantly updated, and available on practically every platform with a screen.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Active", accuracy: 5, url: "https://www.ppsspp.org/", best: true },
      { name: "JPCSP", blurb: "The original Java-based PSP emulator. Slow and dated, but historically significant.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Dormant", accuracy: 2, url: "https://github.com/jpcsp/jpcsp" }
    ]
  },
  {
    id: "xbox-360",
    name: "Xbox 360",
    alt: "Xbox 360 / S / E",
    maker: "microsoft",
    year: 2005,
    gen: 7,
    form: "Home console",
    media: "DVD-ROM / Digital",
    tagline: "The HD generation, warts and red rings.",
    blurb: "A PowerPC-based powerhouse that defined online console gaming. Xenia's high-level approach gets a lot of the library running, though compatibility remains title-dependent.",
    games: ["Halo 3", "Gears of War 2", "Red Dead Redemption"],
    emulators: [
      { name: "Xenia", blurb: "The most capable 360 emulator, with a modern canary branch delivering steady compatibility gains.", platforms: ["Windows"], license: "Open source", status: "Active", accuracy: 3, url: "https://xenia.jp/", best: true }
    ]
  },
  {
    id: "ps3",
    name: "PlayStation 3",
    alt: "PS3 / Slim / Super Slim",
    maker: "sony",
    year: 2006,
    gen: 7,
    form: "Home console",
    media: "Blu-ray / Digital",
    tagline: "The Cell processor meets its match.",
    blurb: "A fearsome, asymmetric architecture that took years to understand. RPCS3's progress is one of the great engineering stories in emulation — from curiosity to a genuinely usable library.",
    games: ["Demon's Souls", "The Last of Us", "Uncharted 2"],
    emulators: [
      { name: "RPCS3", blurb: "The only serious PS3 emulator, and a remarkable one: Vulkan rendering, patches and a huge compatibility list.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 4, url: "https://rpcs3.net/", best: true }
    ]
  },
  {
    id: "wii",
    name: "Nintendo Wii",
    alt: "Wii / Wii Family Edition",
    maker: "nintendo",
    year: 2006,
    gen: 7,
    form: "Home console",
    media: "DVD-ROM / Digital",
    tagline: "Motion control, for better and worse.",
    blurb: "Two GameCubes taped together with a motion controller and a killer Virtual Console. Dolphin handles the hardware beautifully; a real Wiimote makes the experience complete.",
    games: ["Super Mario Galaxy 2", "Zelda: Skyward Sword", "Xenoblade Chronicles"],
    emulators: [
      { name: "Dolphin", blurb: "The same superb GameCube emulator, with Wii motion controls, WiiConnect24 and HD output.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Active", accuracy: 5, url: "https://dolphin-emu.org/", best: true }
    ]
  },

  /* ---------------- GENERATION 8 ---------------- */
  {
    id: "3ds",
    name: "Nintendo 3DS",
    alt: "3DS / New 3DS",
    maker: "nintendo",
    year: 2011,
    gen: 8,
    form: "Handheld",
    media: "Cartridge / Digital",
    tagline: "Stereoscopic 3D, no glasses required.",
    blurb: "A dual-screen handheld with a parallax barrier and a surprisingly strong library. Citra's 2024 shutdown reshaped the scene; its community forks carry the work forward.",
    games: ["Zelda: A Link Between Worlds", "Fire Emblem Awakening", "Kid Icarus: Uprising"],
    emulators: [
      { name: "Azahar", blurb: "The community continuation of Citra and Lime3DS, with active development and multi-platform builds.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Active", accuracy: 4, url: "https://azahar-emu.org/", best: true },
      { name: "Lime3DS", blurb: "A Citra fork that merged improvements before joining forces with Azahar. Now archived.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Discontinued", accuracy: 4, url: "https://lime3ds.github.io/" },
      { name: "Citra", blurb: "The original 3DS emulator. Source code remains available; official development ended in 2024.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Archived", accuracy: 4, url: "https://citra-emu.org/" },
      { name: "Panda3DS", blurb: "A from-scratch 3DS emulator focused on clean architecture and improving compatibility.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 3, url: "https://github.com/wheremyfoodat/Panda3DS" }
    ]
  },
  {
    id: "vita",
    name: "PlayStation Vita",
    alt: "PS Vita / PSTV",
    maker: "sony",
    year: 2011,
    gen: 8,
    form: "Handheld",
    media: "Proprietary card / Digital",
    tagline: "A beautiful handheld that deserved more.",
    blurb: "OLED colour, dual sticks and a library full of cult classics. Vita emulation is still early — think of it as a promising research project rather than a finished product.",
    games: ["Persona 4 Golden", "Gravity Rush", "Uncharted: Golden Abyss"],
    emulators: [
      { name: "Vita3K", blurb: "The leading Vita emulator: an ambitious, open-source effort with steady compatibility improvements.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 3, url: "https://vita3k.org/", best: true }
    ]
  },
  {
    id: "wii-u",
    name: "Nintendo Wii U",
    alt: "Wii U",
    maker: "nintendo",
    year: 2012,
    gen: 8,
    form: "Home console",
    media: "Proprietary disc / Digital",
    tagline: "The brave, baffling bridge to Switch.",
    blurb: "A second screen, a slow start, and a catalogue that has been lovingly ported ever since. Cemu went open source in 2024 and is now the definitive way to preserve it.",
    games: ["Mario Kart 8", "Zelda: Breath of the Wild", "Splatoon"],
    emulators: [
      { name: "Cemu", blurb: "The Wii U emulator that cracked the console wide open. Now open source, with a polished UI.", platforms: ["Windows", "Linux", "macOS"], license: "Open source", status: "Active", accuracy: 5, url: "https://cemu.info/", best: true }
    ]
  },
  {
    id: "ps4",
    name: "PlayStation 4",
    alt: "PS4 / PS4 Pro",
    maker: "sony",
    year: 2013,
    gen: 8,
    form: "Home console",
    media: "Blu-ray / Digital",
    tagline: "The emulation frontier, still warm.",
    blurb: "x86 architecture made the PS4 more approachable than its predecessors, but the software stack is immense. shadPS4 is an exciting, very early work in progress.",
    games: ["Bloodborne", "God of War", "Ghost of Tsushima"],
    emulators: [
      { name: "shadPS4", blurb: "A rapidly evolving PS4 emulator making headlines for its early Bloodborne progress.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Active", accuracy: 3, url: "https://shadps4.net/", best: true },
      { name: "fpPS4", blurb: "An experimental high-level PS4 emulator. Early, limited and sometimes surprisingly effective.", platforms: ["Windows"], license: "Open source", status: "Dormant", accuracy: 2, url: "https://github.com/red-prig/fpPS4" }
    ]
  },
  {
    id: "switch",
    name: "Nintendo Switch",
    alt: "Switch / OLED / Lite",
    maker: "nintendo",
    year: 2017,
    gen: 8,
    form: "Hybrid",
    media: "Cartridge / Digital",
    tagline: "Console, handheld, legal grey area.",
    blurb: "The hybrid that unified Nintendo's two worlds. Its emulation scene was rocked by legal action in 2024; the surviving projects are community forks. Bring your own keys and your own conscience.",
    games: ["Zelda: Breath of the Wild", "Super Mario Odyssey", "Metroid Dread"],
    emulators: [
      { name: "Ryujinx", blurb: "A polished, accuracy-leaning Switch emulator. Development stopped in 2024; builds remain online.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Discontinued", accuracy: 4, url: "https://ryujinx.app/" },
      { name: "Yuzu", blurb: "The highest-profile Switch emulator, shut down in 2024 after legal pressure. Source archived.", platforms: ["Windows", "macOS", "Linux"], license: "Open source", status: "Discontinued", accuracy: 4, url: "https://en.wikipedia.org/wiki/Yuzu_(emulator)" },
      { name: "Eden", blurb: "A community fork of Yuzu continuing development with performance and stability fixes.", platforms: ["Windows", "macOS", "Linux", "Android"], license: "Open source", status: "Active", accuracy: 3, url: "https://eden-emu.dev/", best: true }
    ]
  }
];
