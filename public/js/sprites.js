import SpriteSheet from "./SpriteSheet.js";
import { loadImage } from "./loaders.js";

export const loadBackgroundSprites = () => {
  return loadImage("/images/tiles.png").then((image) => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.defineTile("sky", 1, 0);
    sprites.defineTile("grass", 0, 0);
    sprites.defineTile("ground", 0, 1);
    return sprites;
  });
};

export const loadIanSprites = () => {
  return loadImage("/images/characters.png").then((image) => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define("idleIan", 0, 0, 16, 16);
    return sprites;
  });
};
