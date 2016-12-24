const tile = document.createElement('canvas');
const tileCtx = tile.getContext('2d');

export default ({ hue, ctx }) => {
  const patternSize = 2;
  tile.width = patternSize;
  tile.height = patternSize;

  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${hue}, 90%, 50%, 1)`;
  tileCtx.rect(0, 0, 1, 1);
  tileCtx.fill();

  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${hue}, 0%, 100%, 1)`;
  tileCtx.rect(0, 1, 1, 1);
  tileCtx.fill();

  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${hue}, 80%, 80%, 1)`;
  tileCtx.rect(1, 1, 1, 1);
  tileCtx.fill();

  tileCtx.beginPath();
  tileCtx.fillStyle = `hsla(${hue + 60}, 10%, 30%, 1)`;
  tileCtx.rect(1, 0, 1, 1);
  tileCtx.fill();

  return ctx.createPattern(tile, 'repeat');
};
