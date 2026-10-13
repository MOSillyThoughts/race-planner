# Warm Race Planner

A self-contained, single-file web app for planning a hot-weather IRONMAN / IRONMAN 70.3 / T100 season. It includes a race finder, map, a season planner with gap warnings and trips, qualifying odds with reference times, save codes and a PDF export. It works offline. Map tiles need a connection, but there is a built-in offline outline.

- **Data version:** 2.1.1 · **data last updated:** 2026-10-12
- **Open:** the GitHub Pages URL of this repo, or download `index.html` and open it in any browser (works on iPhone Safari).

## Updating the data
- All race data lives inside `index.html` in two blocks: `<script id="race-data">` (`window.RACES`) and `<script id="ref-data">` (`window.REF`, `window.FACTORS`). Edit them following the **About & update guide** panel in the app. The full guide is embedded in the file.
- Or ask the bot that built it to refresh the data and regenerate the file. The bot uses `build_single.py`, which isn't in this repo; it's on the box that built it.
- Never invent values: use `null` and label estimates. Bump the data version and add a changelog entry.

Sources: ironman.com, t100triathlon.com, Open-Meteo (ERA5), triathlonatlas.com, ai-triathlon-result.teraren.com. Simulated cutoffs are model outputs, not official rolldown results.
