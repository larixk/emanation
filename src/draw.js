const centerSize = 6;
const halfCenterSize = centerSize / 2;

export default ({ ctx, canvas, scale, rotation, pattern }) => {
  const halfCanvasWidth = canvas.width * 0.5;
  const halfCanvasHeight = canvas.height * 0.5;
  const oneOverScale = 1 / scale;

  ctx.beginPath();
  ctx.rect(
    halfCanvasWidth - halfCenterSize,
    halfCanvasHeight - halfCenterSize,
    centerSize,
    centerSize
  );
  ctx.fillStyle = pattern; // eslint-disable-line no-param-reassign
  ctx.fill();

  ctx.translate(halfCanvasWidth, halfCanvasHeight);
  ctx.scale(scale, scale);
  ctx.rotate(rotation);
  ctx.translate(-halfCanvasWidth, -halfCanvasHeight);

  ctx.drawImage(canvas, 0, 0);

  ctx.translate(halfCanvasWidth, halfCanvasHeight);
  ctx.rotate(-rotation);
  ctx.scale(oneOverScale, oneOverScale);
  ctx.translate(-halfCanvasWidth, -halfCanvasHeight);
};
