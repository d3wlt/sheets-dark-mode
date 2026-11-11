# Sheets Dark Mode

Chrome/Brave extension that puts all of Google Sheets in dark mode: the cell grid, toolbar, menus, dialogs and sidebars.

## Install

1. Open `brave://extensions` (or `chrome://extensions`).
2. Turn on **Developer mode**.
3. Click **Load unpacked** and pick this folder.
4. Reload any open Sheets tabs.

Click the toolbar icon to turn it on or off (the badge shows `OFF` while it is off). The setting applies to every Sheets tab right away.

## How it works

Sheets draws the grid on a `<canvas>`, so normal dark-theme CSS can't reach the cells. The extension inverts the whole page (`invert(0.9) hue-rotate(180deg)`) and then flips back the things that must keep their real colors: photos, avatars, the Sheets logo and the color picker swatches.

## Known trade-offs

- Cell fill and text colors show as their dark-mode equivalents: a light yellow fill turns dark olive, red text stays red. The color picker shows the real colors.
- Images inside cells (`IMAGE()`) are part of the canvas, so they come out inverted. Charts are inverted too, which gives them a dark background (not yet checked on a real chart).
