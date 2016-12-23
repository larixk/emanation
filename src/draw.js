import autoScalingCanvas from './autoScalingCanvas';

const canvas = autoScalingCanvas();
const ctx = canvas.getContext('2d');

let hue = 0;
let pat;

const createPattern = () => {
  const tile = document.createElement('canvas');
  tile.width = 2;
  tile.height = 2;
  const tileCtx = tile.getContext('2d');
  tileCtx.beginPath();
  tileCtx.fillStyle = 'transparent';
  tileCtx.rect(0, 0, 2, 3);
  tileCtx.fill();

  const baseHue = Math.floor(Math.random() * 360);
  const otherHue = (baseHue + 180) % 360;

  // const baseHue = hue;
  // const otherHue = hue + 50;

  hue += 2;
  hue += 360;
  hue %= 360;

  // hue = Math.floor(Math.random() * 360);

  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${hue + 0}, 100%, 90%, 1)`;
  tileCtx.rect(0, 0, 1, 1);
  tileCtx.fill();

  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${hue + 15}, 100%, 50%, 1)`;
  tileCtx.rect(0, 1, 1, 1);
  tileCtx.fill();


  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${hue + 120}, 100%, 90%, 1)`;
  tileCtx.rect(1, 1, 1, 1);
  tileCtx.fill();

  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${hue + 135}, 100%, 50%, 1)`;
  tileCtx.rect(1, 0, 1, 1);
  tileCtx.fill();

  pat = ctx.createPattern(tile, 'repeat');
};

createPattern();
setInterval(createPattern, 500);

ctx.imageSmoothingEnabled = false;
ctx.globalAlpha = 0.75;

export default (state) => {
  ctx.beginPath();
  const centerSize = 8;
  ctx.rect(canvas.width / 2 - (centerSize / 2), canvas.height / 2 - (centerSize / 2), centerSize, centerSize);
  ctx.fillStyle = pat;
  ctx.fill();

  ctx.translate(canvas.width * 0.5, canvas.height * 0.5);
  const scale = state.scale;
  ctx.scale(scale, scale);
  ctx.rotate(state.rotation);
  ctx.translate(-canvas.width * 0.5, -canvas.height * 0.5);

  ctx.drawImage(canvas, 0, 0);

  ctx.translate(canvas.width * 0.5, canvas.height * 0.5);
  ctx.rotate(-state.rotation);
  ctx.scale(1 / scale,  1 / scale);
  ctx.translate(-canvas.width * 0.5, -canvas.height * 0.5);
};
