import SpriteSheet from "./SpriteSheet.js";
import { loadImage } from "./loaders.js";

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

loadImage("/images/tiles.png").then((image) => {
  const sprites = new SpriteSheet(image, 16, 16);
  sprites.define("sky", 1, 0);
  sprites.define("grass", 0, 0);
  sprites.define("ground", 0, 1);

  for (let x = 0; x < 25; ++x) {
    for (let y = 0; y < 14; ++y) {
      sprites.drawTile("sky", context, x, y);
    }
  }

  for (let x = 0; x < 25; ++x) {
    for (let y = 12; y < 13; ++y) {
      sprites.drawTile("grass", context, x, y);
    }
  }

  for (let x = 0; x < 25; ++x) {
    for (let y = 13; y < 14; ++y) {
      sprites.drawTile("ground", context, x, y);
    }
  }
});
