const tile = document.createElement('canvas');
const tileCtx = tile.getContext('2d');

export default ({ ctx }) => {
  const hue = Math.floor(Math.random() * 360);
  const otherHue = Math.floor(Math.random() * 360);
  const patternSize = 2;
  tile.width = patternSize;
  tile.height = patternSize;

  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${hue}, 100%, 60%, 1)`;
  tileCtx.rect(0, 0, 1, 1);
  tileCtx.fill();

  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${hue}, 100%, 80%, 1)`;
  tileCtx.rect(0, 1, 1, 1);
  tileCtx.fill();

  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${otherHue}, 100%, 40%, 1)`;
  tileCtx.rect(1, 1, 1, 1);
  tileCtx.fill();

  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${otherHue}, 100%, 30%, 1)`;
  tileCtx.rect(1, 0, 1, 1);
  tileCtx.fill();

  return ctx.createPattern(tile, 'repeat');
};
