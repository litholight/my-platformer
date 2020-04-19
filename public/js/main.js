import { loadLevel } from "./loaders.js";
import { loadBackgroundSprites, loadIanSprites } from "./sprites.js";

const drawBackground = (background, context, sprites) => {
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; ++x) {
      for (let y = y1; y < y2; ++y) {
        sprites.drawTile(background.tile, context, x, y);
      }
    }
  });
};

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

Promise.all([loadIanSprites(), loadBackgroundSprites(), loadLevel("1-1")]).then(
  ([ianSprite, sprites, level]) => {
    level.backgrounds.forEach((background) =>
      drawBackground(background, context, sprites)
    );
    ianSprite.draw("idleIan", context, 64, 179);
  }
);
