import SpriteSheet from "./SpriteSheet.js";
import { loadImage, loadLevel } from "./loaders.js";

function drawBackground(background, context, sprites) {
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; ++x) {
      for (let y = y1; y < y2; ++y) {
        sprites.drawTile(background.tile, context, x, y);
      }
    }
  });
}

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

loadImage("/images/tiles.png").then((image) => {
  const sprites = new SpriteSheet(image, 16, 16);
  sprites.define("sky", 1, 0);
  sprites.define("grass", 0, 0);
  sprites.define("ground", 0, 1);

  loadLevel("1-1").then((level) => {
    level.backgrounds.forEach((background) =>
      drawBackground(background, context, sprites)
    );
  });

  // for (let x = 0; x < 25; ++x) {
  //   for (let y = 12; y < 13; ++y) {
  //     sprites.drawTile("grass", context, x, y);
  //   }
  // }

  // for (let x = 0; x < 25; ++x) {
  //   for (let y = 13; y < 14; ++y) {
  //     sprites.drawTile("ground", context, x, y);
  //   }
  // }
});
