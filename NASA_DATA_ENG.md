# NASA data and sources used in the game

This document lists, in one place, all the real scientific data, NASA audio recordings and in-game information texts used in MARS: Colony Builder v1.46. The aim is transparency: every number you see in the game can be traced back here.

The game is made for education and entertainment; numbers are simplified or time-compressed for gameplay. The project is not affiliated with or endorsed by NASA. NASA's name, logo and insignia are not used.

Where this data lives in the code: the `NASA_SND`, `MSG`, `CROPS`, `soilAt`, `vit`/radiation and `DSN_SITES` definitions in `kaynak/game.js`.

---

## 1. Martian environment

| Data | Value in the game | Source |
| --- | --- | --- |
| Surface gravity | 3.71 m/s² (Earth 9.81) | NASA Mars Fact Sheet (NSSDC) |
| Mean temperature | About −59 °C; body temperature drops outdoors at night | NASA Mars Fact Sheet |
| Surface pressure | 6.36 mbar | NASA Mars Fact Sheet |
| Atmosphere | 95% CO₂ | NASA Mars Fact Sheet |
| Dust storms and dust devils | Reduce visibility and solar power | Spirit, Opportunity, Perseverance observations |
| Marsquakes | InSight recorded more than 1,300 quakes between 2018 and 2022 | NASA InSight mission |
| One Martian day (sol) | 24 h 39 min; compressed to 72 real minutes in the game | NASA |

## 2. Radiation

| Data | Value in the game | Source |
| --- | --- | --- |
| Daily dose on the Martian surface | ~0.64 mSv/day (galactic cosmic rays) | Curiosity RAD measurements (Hassler et al., Science 2014) |
| Daily dose during the Earth–Mars cruise | ~1.8 mSv/day | Curiosity RAD cruise measurement (Zeitlin et al., Science 2013) |
| Daily dose on Earth | ~0.007 mSv/day | Average natural background |
| Career dose limit | 600 mSv | NASA-STD-3001 (2022 update) |
| Solar particle events (SPE) | Advance warning, waiting in a shelter | NASA space weather and SRAG practice |
| Aurora | Seen in the Martian night sky during SPEs | MAVEN and Perseverance observations |
| Suit protection | Levels 1–6, 0–100% | Game mechanic (real suits do not give full protection) |

## 3. Communication: Deep Space Network (DSN)

| Data | In the game | Source |
| --- | --- | --- |
| Ground stations | Goldstone (USA), Madrid (Spain), Canberra (Australia), 70 m antennas | NASA DSN |
| Mars relay orbiters | MRO, MAVEN, Mars Odyssey, TGO (ESA); Electra UHF link | NASA JPL |
| Light delay | 3–22 minutes one way (depending on the Earth–Mars distance); shortened in the game | NASA |
| Communication in Earth orbit | TDRS satellites (Near Space Network), ~0.6 s delay | NASA SCaN |
| Quindar tones | 2525 Hz start, 2475 Hz end (since Apollo) | NASA Apollo communication system |
| "Seven minutes of terror" | Atmospheric entry, descent and touchdown | NASA JPL |

## 4. Martian soil (soil meter)

| Data | Range in the game | Source |
| --- | --- | --- |
| pH | 7.2–8.3 (slightly alkaline) | Phoenix WCL experiment, 2008: pH ~7.7 |
| Perchlorate | 0.4–0.9% | Phoenix, 2008: 0.4–0.6%; toxic, so soil must be washed |
| Nitrate | 70–1,100 ppm | Curiosity SAM, 2015 (Stern et al., PNAS) |
| Water (by weight) | 1.5–3%; higher near ice | Curiosity SAM: ~2% water in surface fines |
| Ancient lake beds | Crater floors are more fertile (clay, nitrate) | Lake deposits in Gale and Jezero craters |
| Regolith compaction | Hoeing aerates it | Agricultural studies with Mars simulants |

## 5. Mars farming (real sowing-to-harvest times)

In the game 1 real day = 15 seconds. Growth times are the approximate sowing-to-harvest days from the experiments.

| Crop | Real time | Experiment / source |
| --- | --- | --- |
| Radish | 27 days | APH-02, ISS, 2020 |
| Mizuna mustard | 28 days | Veggie VEG-03, ISS, 2017 |
| Lettuce 'Outredgeous' | 33 days | Veggie VEG-01, ISS, 2015 (first vegetable eaten in space) |
| Chinese cabbage 'Tokyo Bekana' | 33 days | ISS 2017; Mir Svet greenhouse |
| Arugula | 35 days | Wageningen University, Mars regolith simulant, 2016 |
| Kale 'Red Russian' | 50 days | Veggie, ISS, 2019 |
| Pea | 60 days | Wageningen Mars regolith simulant experiments |
| Dwarf wheat 'Apogee' | 70 days | APH, ISS, 2018; Mir |
| Potato | 90 days | International Potato Center (CIP) + NASA, 2016 |
| Dwarf tomato 'Red Robin' | 104 days | Veg-05, ISS, 2023 |
| Hatch chile | 120 days | PH-04, ISS, 2021 |
| Pink-purple LED light | In the plant bed domes | NASA Veggie unit |

## 6. Vehicles, missions and hardware

| In the game | Real-world counterpart |
| --- | --- |
| Rover | Curiosity / Perseverance-type rover; MMRTG nuclear power source |
| Mini helicopter | Ingenuity (with Perseverance, 2021) |
| Panorama | Mastcam-Z cameras |
| Sample tubes and sites | Perseverance sample collection campaign (names such as Rochette used as inspiration) |
| Space suit | xEMU design (Artemis) |
| Launch tower and arms | Modern launch towers |
| Space station and shuttle | ISS; TDRS link |
| CML matrix | NASA JPL Concept Maturity Level scale |
| Engine wiring fault | Game mechanic (fiction) |

## 7. NASA audio recordings

The game streams these recordings directly from `https://www.nasa.gov/wp-content/uploads/` while running; the files are not included in the package. Without an internet connection the game synthesises similar sounds itself. Source page: NASA "Sounds from Beyond" and mission pages. Terms of use: https://www.nasa.gov/nasa-brand-center/images-and-media/

| Use in the game | File path | Description |
| --- | --- | --- |
| Wind loop on Mars | `2024/05/scam-mic-sol004-run001.wav` | Perseverance SuperCam · Martian wind (sol 4) |
| First landing on Mars | `2024/05/scam-mic-sol001-run001.wav` | First sound recorded on Mars (sol 1) |
| Scanner | `2024/05/scam-mic-sol012-run001.wav` | SuperCam laser zaps |
| Rover's helicopter | `2024/05/jpl-20210506-listen-to-nasas-ingenuity-helicopter-as-it-flies-on-mars.wav` | Ingenuity helicopter flying on Mars |
| Dust storm | `2024/05/pia25657.wav` | Martian dust devil |
| Rover driving | `2024/05/filtered-highlights-sol16roverdrivehighlights.wav` | Perseverance driving sound |
| Marsquake | `2015/01/Quake-Sol-235.wav` | InSight · magnitude 3.3 marsquake |
| Robot arm | `2015/01/20190819-Sol-98-SEIS-Spatialized-reflective.wav` | InSight robotic arm |
| Night sounds | `2015/01/Cropped-Dinks-and-Donks-sample.wav` | InSight night-time "dinks and donks" |
| Space travel ambience | `2024/05/e2-wave-ganymede-flyby-compressed.wav` | Juno · Ganymede flyby (space travel ambience) |
| Rocket launch | `2023/02/liftoff1.mp3` | Artemis I launch |
| Main menu music | `2023/02/we-rise-together1.mp3` | Artemis I · We Rise Together (menu) |

The game also produces its own sounds: Quindar tones (2525/2475 Hz), Geiger clicks, footsteps, alarms and interface sounds (synthesised with the Web Audio API).

---

## Appendix A. In-game DSN messages (information texts)

Full English text of the messages from Houston, JPL and the Mars relay. The information is based on NASA's and JPL's public mission pages.

| Key | Message |
| --- | --- |
| `hello` | This is Houston, do you copy? Pre-launch checks complete. Head to the rocket capsule and fly to Mars. |
| `mine_metal` | The piece you picked up is iron-nickel metal. In 2023 Curiosity found a similar iron-nickel meteorite nicknamed 'Cacao' – great for structures and tools. |
| `mine_copper` | That's copper ore. Curiosity's ChemCam detected copper-rich rocks in the Kimberley area of Gale Crater. Keep it for circuit parts. |
| `mine_iron` | This is iron oxide – hematite. It's what makes Mars red. Opportunity found hematite 'blueberries' on Meridiani Planum. |
| `mine_rare` | Rare metal crystal! Gold has not yet been directly detected on Mars, so this sample is very valuable to science. Pack it carefully. |
| `mine_ice` | Water ice! The Phoenix lander found ice just a few centimeters below the surface in 2008. Melt it for drinking water and oxygen. |
| `dig` | Dig successful – you brought a buried resource to the surface. Perseverance's RIMFAX radar maps the subsurface the same way. |
| `sleep` | Sleep well. A Mars day (sol) lasts 24 h 39 min 35 s. NASA schedules about 8 hours of sleep for crews; we're keeping an eye on you. |
| `sleep_bp` | Your blood pressure is low after the radiation; sleep is mandatory. Our flight surgeon is monitoring your vitals. |
| `wake` | Good morning! In NASA tradition, mission control wakes the crew with a wake-up song. Today's plan is ready. |
| `launch_mars` | We confirm Mars Ascent Vehicle liftoff. The trip home really takes about 7 months; here it's shortened. Safe travels! |
| `arrive_earth` | Welcome back to Earth! The recovery team is on the pad. Your rehab for bone and muscle loss after the long mission starts now. |
| `launch_earth` | The launch tower swung its arms clear – clean liftoff! Entering the Mars transfer orbit. DSN Goldstone is tracking you. |
| `arrive_mars` | Touchdown confirmed! Entry, descent and landing is known as the 'seven minutes of terror'. Your rover is down too and switching to autonomous mode. |
| `arrive_mars2` | Touchdown confirmed. Welcome back; your rover kept exploring while you were away. |
| `build_bench` | Workbench and tent are up. Inflatable habitats are among the designs NASA tests for long surface missions. |
| `build_solar` | Solar panel online. Mars receives about 43% of the sunlight Earth gets; dust buildup lowers output. |
| `build_hab` | Habitat ready. The pressurized module protects you from an atmosphere of about 6 millibars that is 95% CO₂. |
| `build_green` | Greenhouse built. Lettuce and radishes were grown in the Veggie and APH experiments on the ISS; plants also make oxygen. |
| `build_lab` | Research lab active. Findings will be relayed via Mars orbiters and the DSN to JPL. |
| `build_ice` | Ice processor active. Electrolysis splits water into hydrogen and oxygen. Perseverance's MOXIE made 122 g of oxygen from CO₂ in total. |
| `build_storage` | Storage built. Every kilogram shipped to Mars is very expensive – that's why in-situ resource utilization (ISRU) is critical. |
| `build_antenna` | Antenna on air! Your signal goes over Electra UHF to orbiting relays like MRO and MAVEN, then to the DSN's 70 m dishes. |
| `build_watercap` | Water capsule online. The ISS recovers about 98% of the water from urine and sweat – every drop counts here too. |
| `build_foodcap` | Food capsule online. Most NASA space food is freeze-dried and vacuum-sealed. |
| `build_gen` | {n} built. Telemetry received, colony map updated. |
| `craft_tool` | New tool crafted: {n}. Martian regolith is fine and abrasive – even Curiosity's wheels got holes, so look after it. |
| `craft_scanner` | Scanner ready. Like Perseverance's RIMFAX ground-penetrating radar, it detects buried resources. |
| `craft_part` | Rocket part crafted: {n}. Spares and repairs are the backbone of mission assurance. |
| `upgrade` | Upgrade complete: {n}. Mission control logged the new values. |
| `signal` | Your signal was received! Even at light speed it took {n} minutes to get from Mars to Earth. |
| `rad_warn` | WARNING: strong solar flare! NASA's Moon to Mars Space Weather Analysis Office expects a solar particle event (SPE). Get to shelter within about 30 s. |
| `rad_start` | SPE has begun! Per Curiosity's RAD data the normal surface dose is ~0.64 mSv/day; right now it's far higher. Stay sheltered. |
| `rad_end` | Particle event over. Your dose record is updated: career dose {n} mSv (NASA limit 600 mSv). |
| `aurora` | FYI: during an SPE in 2024, Perseverance saw visible green aurora from the Martian surface for the first time. Look up! |
| `career` | Flight surgeon: your career radiation dose has passed NASA's 600 mSv limit. Cut down your time outdoors. |
| `rover_deploy` | Your rover is down and driving autonomously. It's powered by an MMRTG radioisotope generator, so it works at night too. Command it with V. |
| `rover_find` | Rover report: found {n} and uncovered it. Location: {c}. |
| `rover_sci` | Rover report: Mastcam panorama and rock analysis complete. +2 science. |
| `rover_heli` | The rover launched its mini helicopter. Ingenuity made 72 flights on Mars between 2021 and 2024. Aerial scouting: +3 science. |
| `storm` | Dust storm approaching. In 2018 a global storm covered Opportunity's panels and ended its nearly 15-year mission. Watch your panels. |
| `quake` | Marsquake detected! InSight recorded more than 1,300 marsquakes between 2018 and 2022. Check your structures. |
| `mission_new` | Mission control: new mission package uploaded – {n}. See the list at the top left. |
| `station` | You're on the space station; comms here go through TDRS satellites (Near Space Network), not the DSN. |
| `sample` | Sample tube sealed. Under planetary protection rules, Mars samples are opened in a special facility on Earth. |
| `geiger` | Your Geiger counter is online. Curiosity's RAD detector has measured surface radiation on Mars like this since 2012. If the clicking speeds up, take shelter. |
| `suitUp` | Suit level {n} confirmed. Radiation protection is {c}%. Real suits use hydrogen-rich layers such as polyethylene for shielding. |
| `suit6` | Congratulations, your suit is level 6: radiation-proof and your bag holds 20 more. You can now keep working outside during an SPE. |
| `plot` | Plant bed ready. Martian soil contains toxic perchlorates, found by Phoenix in 2008; the soil was washed, compost added, and a pressurized mini dome placed on top. |
| `water` | Watering done. The water came from Martian ice; in moist soil crops grow 2.5× faster. The pink-purple LEDs match the light in NASA's Veggie unit. |

## Appendix B. Crop information texts

| Crop | Text |
| --- | --- |
| Lettuce | Red romaine 'Outredgeous', grown in the ISS Veggie unit in 2015, became the first vegetable astronauts ate in space. |
| Radish | Radishes were grown in the ISS Advanced Plant Habitat (APH-02) in 2020 and harvested after 27 days – the fastest crop here. |
| Potato | In 2016 the International Potato Center (CIP), with NASA support, tested growing potatoes in Mars-like conditions. One tuber is kept for replanting. |
| Dwarf tomato | 'Red Robin' dwarf tomatoes were grown in the Veg-05 experiment on the ISS in 2023; fresh produce also lifts crew morale. |
| Hatch chile | Hatch chiles were grown on the ISS in 2021 (PH-04) and the crew made space tacos with them. This crop takes the longest. |
| Mizuna mustard | Mizuna mustard was grown in the ISS Veggie unit (VEG-03) in 2017; its leaves grow back after cutting. |
| Chinese cabbage | 'Tokyo Bekana' Chinese cabbage was grown and eaten on the ISS in 2017; it had also been tried in Mir's Svet greenhouse. |
| Arugula | Arugula grew successfully and set seed in Wageningen University's 2016 experiment (Wieger Wamelink) using Mars-like regolith. |
| Red Russian kale | 'Red Russian' kale was grown in Veggie experiments on the ISS in 2019; it is rich in vitamin K and antioxidants. |
| Pea | Pea is a legume that fixes nitrogen from the air; it grew and set seed in Wamelink's Mars regolith experiments, enriching the soil. |
| Dwarf wheat | 'Apogee' dwarf wheat was grown in the first test of the ISS Advanced Plant Habitat (APH) in 2018; it had also been grown seed-to-seed on Mir. |

## Main sources

- NASA Mars Fact Sheet (NSSDC): https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html
- Hassler, D. M. et al. (2014). Mars' Surface Radiation Environment Measured with the Mars Science Laboratory's Curiosity Rover. *Science* 343. https://doi.org/10.1126/science.1244797
- Zeitlin, C. et al. (2013). Measurements of Energetic Particle Radiation in Transit to Mars on the Mars Science Laboratory. *Science* 340. https://doi.org/10.1126/science.1235989
- NASA-STD-3001, Space Flight Human-System Standard (career dose limit 600 mSv): https://www.nasa.gov/offices/ochmo/human_spaceflight/standards101/
- Hecht, M. H. et al. (2009). Detection of Perchlorate and the Soluble Chemistry of Martian Soil at the Phoenix Lander Site. *Science* 325. https://doi.org/10.1126/science.1172466
- Stern, J. C. et al. (2015). Evidence for indigenous nitrogen in sedimentary and aeolian deposits from the Curiosity rover investigations at Gale crater, Mars. *PNAS* 112. https://doi.org/10.1073/pnas.1420932112
- Wamelink, G. W. W. et al. (2014). Can plants grow on Mars and the Moon. *PLOS ONE* 9(8). https://doi.org/10.1371/journal.pone.0103138
- NASA Veggie fact sheet: https://www.nasa.gov/wp-content/uploads/2019/04/veggie_fact_sheet_508.pdf
- NASA InSight mission: https://science.nasa.gov/mission/insight/
- NASA Deep Space Network: https://www.nasa.gov/communicating-with-missions/dsn/
