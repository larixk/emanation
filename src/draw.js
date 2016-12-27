const centerSize = 6;
const halfCenterSize = centerSize / 2;

export default ({ ctx, canvas, scale, rotation, pattern }) => {
  const halfCanvasSize = canvas.width * 0.5;

  ctx.beginPath();
  ctx.rect(
    halfCanvasSize - halfCenterSize,
    halfCanvasSize - halfCenterSize,
    centerSize,
    centerSize
  );
  ctx.fillStyle = pattern; // eslint-disable-line no-param-reassign
  ctx.fill();

  ctx.save();

  ctx.translate(halfCanvasSize, halfCanvasSize);
  ctx.scale(scale, scale);
  ctx.rotate(rotation);
  ctx.translate(-halfCanvasSize, -halfCanvasSize);

  ctx.drawImage(canvas, 0, 0);

  ctx.restore();
};
