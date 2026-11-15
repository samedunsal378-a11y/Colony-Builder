<div align="center">

# MARS: Colony Builder

**A browser-based Mars colony and survival game built on real NASA data**

Fly from your Earth base to Mars by rocket, gather resources, build a colony, grow real space crops,<br>
shelter from radiation storms and talk to Earth through NASA's Deep Space Network.

![Version](https://img.shields.io/badge/version-v1.46-orange)
![License](https://img.shields.io/badge/license-MIT-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-yellow)
![WebGL](https://img.shields.io/badge/WebGL-1.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933)
![Languages](https://img.shields.io/badge/languages-TR%20%C2%B7%20EN%20%C2%B7%20ES%20%C2%B7%20KO%20%C2%B7%20DE-lightgrey)

[Play now](#play-now) · [Features](#features) · [Controls](#controls) · [Multiplayer](#multiplayer-server) · [Documents](#documents)

<img src="ekran_goruntuleri/mars_tarim.jpg" width="820" alt="Plant beds and the soil analyzer on the Martian surface">

</div>

---

## Play now

No installation needed, and no internet connection required.

1. Download `MARS_Colony_Builder_v1.46.html`.
2. Open it in Chrome, Edge or Firefox.
3. Pick your language → **Play** → choose a difficulty.

Whenever you get stuck, press **K**: a guide opens at the bottom right, already on the topic that matches what you are doing.

**Play online:** https://samedunsal378-a11y.github.io/Colony-Builder/

### Publishing with GitHub Pages

1. Put a copy of `MARS_Colony_Builder_v1.46.html` named `index.html` in the root folder of the repo.
2. Go to **Settings → Pages → Deploy from a branch**, choose the `main` branch and the `/ (root)` folder.
3. After a few minutes the game opens at `https://<your-username>.github.io/<repo-name>/`.

## Screenshots

| | |
| :---: | :---: |
| <img src="ekran_goruntuleri/ana_menu.jpg" width="400" alt="Main menu"> | <img src="ekran_goruntuleri/zorluk.jpg" width="400" alt="Difficulty select"> |
| Main menu | Difficulty select |
| <img src="ekran_goruntuleri/hikaye.jpg" width="400" alt="Story intro"> | <img src="ekran_goruntuleri/motor_arizasi.jpg" width="400" alt="Engine failure wire panel"> |
| Story intro | Engine failure: wire matching |
| <img src="ekran_goruntuleri/mars_tarim.jpg" width="400" alt="Mars farming"> | <img src="ekran_goruntuleri/oyun_ici_kilavuz.jpg" width="400" alt="In-game guide"> |
| Mars farming and the soil analyzer | In-game guide (K) |

## Features

**Story and difficulty**
- A cinematic intro and subtitled narration throughout the game: the character speaks when landing on Mars, when you first find each ore, and when the engine fails.
- Three difficulty levels:

  | Level | Hazards | Hunger / thirst / stamina |
  | --- | --- | --- |
  | Easy | No radiation, dust storms or quakes | No hunger, slow thirst |
  | Medium | Moderate storms and radiation | Balanced |
  | Hard | Frequent, strong storms and severe radiation | As in real life |

**Earth and space**
- A three-room Earth base (laboratory, control, engineering), a supply shop, a launch tower, a space shuttle and a space station.
- A rocket that lands and launches vertically at the launch tower, with control panels, a wall-mounted sleep pod and a field kit that gives free tools.
- Engine failure: open the metal-plated maintenance deck on the rocket wall and match the yellow, green, purple and red wires.

**Colony on Mars**
- Workbench, habitat, solar panel, water and food capsules, greenhouse, laboratory, ice processor, storage, safe and antenna; 3 upgrade levels.
- A rover that searches for resources on its own, takes panoramas and flies a mini helicopter.
- Pickaxe, shovel, scanner, soil meter and hoe.

**Mars farming**
- 11 crops actually grown on the space station and in NASA's Mars soil experiments: radish, mizuna, lettuce, bok choy, arugula, kale, pea, dwarf wheat, potato, tomato and pepper.
- Growth times are based on real days from planting to harvest.
- The soil analyzer shows fertility, pH, perchlorate, nitrate and water content at every spot you walk on.
- Watering, hoeing and soil fertility change how fast plants grow.

**Survival and science**
- Solar particle events, dust storms and marsquakes.
- Radiation dose based on Curiosity data, NASA's 600 mSv career limit, a Geiger counter and a 6-level space suit.
- Light-delayed messages from Houston and JPL, Quindar tones and real NASA audio recordings.
- Four mission packs, then endless missions.

**Other**
- Multiplayer for up to 4 players with voice radio.
- 5 languages: Türkçe, English, Español, 한국어, Deutsch.
- Touch controls for phones and tablets.

## Controls

| Key | Action | Key | Action |
| --- | --- | --- | --- |
| W A S D | Walk | E | Interact · collect · enter |
| Shift | Run | X | Dig · scan · measure · hoe |
| Space | Jump · wake up | 1 · 2 · 3 | Pickaxe · shovel · scanner |
| 4 · 5 | Soil meter · hoe | **K** | **In-game guide** |
| U | Upgrade building | F | Dismantle building |
| G · H | Eat · drink | I | Inventory |
| C | 1st / 3rd person camera | Z | Shiftlock |
| M | Mission readiness table | Q | Health panel |
| V | Rover command | T | Radio |
| R · L | Save · load | Esc | Menu |

All keys can be changed under **Settings → Controls**.

## Multiplayer server

The `sunucu/` (server) folder holds a small Node.js server that needs no extra packages. The server only relays room and position data; voice radio flows directly between players over WebRTC.

```bash
cd sunucu
npm start        # http://localhost:3000
```

The microphone only works on `https://` or `localhost`. To play with friends over the internet, deploy the server to a service such as Render; the steps are in [sunucu/KURULUM.md](sunucu/KURULUM.md).

## Documents

| Document | Contents |
| --- | --- |
| [User manual](belgeler/USER_MANUAL_ENG.md) | Goal-based guide and details of every system in the game |
| [Game diagram (PDF)](belgeler/MARS_Colony_Builder_v1.46_Diagram_ENG.pdf) | Game loop, maps, floor plans and tables, 5 pages |
| [Project report (PDF)](belgeler/MARS_Colony_Builder_Project_Report_ENG.pdf) | Technologies used, architecture, testing and references |
| [NASA data](belgeler/NASA_DATA_ENG.md) | All scientific data, audio recordings and sources used in the game |
| [Character design](belgeler/Ares1_Astronaut_Character_Design_ENG.png) | Astronaut character design card |
| Turkish documents | [Kullanım kılavuzu](belgeler/KULLANIM_KILAVUZU.md) · [NASA verileri](belgeler/NASA_VERILERI.md) · [Proje raporu](belgeler/MARS_Colony_Builder_Proje_Raporu.pdf) · [Diyagram](belgeler/MARS_Colony_Builder_v1.46_Diyagram.pdf) |
| [Contents (TR)](ICINDEKILER.md) | What each file does, and the version history |

## Project structure

```
.
├── MARS_Colony_Builder_v1.46.html   # the whole game in a single file
├── kaynak/                          # source: the same game split into readable parts
│   ├── index.html                   #   interface
│   ├── style.css                    #   styling
│   └── game.js                      #   game code (JavaScript + WebGL)
├── sunucu/                          # multiplayer server
├── belgeler/                        # documents: manual, diagram, report, NASA data
├── ekran_goruntuleri/               # screenshots
├── ekstra/astronot_3d_model.js      # extra: astronaut 3D model
├── ICINDEKILER.md · LICENSE · NOTICE.md · README.md
```

## Technical details

- **Languages:** JavaScript (ES2020), HTML5, CSS3, GLSL; Node.js on the server side.
- **Graphics:** Raw WebGL 1.0. No game engine, framework or build step.
- **Audio:** Synthesized with the Web Audio API; recordings from NASA's public audio archive when online.
- **Network:** Server-Sent Events for room and position data, WebRTC for voice radio.
- **Saving:** The browser's `localStorage`, auto-saved every 150 seconds.
- **Size:** About 5,600 lines of code, no external dependencies.

## Version history

| Version | Highlights |
| --- | --- |
| v1.46 | In-game guide opened with the K key |
| v1.45 | Soil analyzer, hoe, 11 crops, real growth times |
| v1.44 | Difficulty levels, story and subtitles, engine failure, free field kit |
| v1.43 | Mars farming |
| v1.42 | 4-player multiplayer and radio |
| v1.41 | Sleep pod, Geiger counter, 6-level suit |
| v1.40 | DSN communication, rover, 5 languages, NASA audio, new graphics |

## Contributing

Use the **Issues** tab for bug reports and suggestions. To contribute code:

1. Fork the repo and create a new branch: `git checkout -b feature/new-feature`
2. Make your change and test the game in a browser.
3. Commit and open a pull request.

## License

The code is released under the [MIT License](LICENSE). NASA audio recordings are not included in the package; the game loads them from nasa.gov while running. Details are in [NOTICE.md](NOTICE.md). This project is not affiliated with or endorsed by NASA.
