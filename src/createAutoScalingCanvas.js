const margin = 20;
const bodyStyle = {
  overflow: 'hidden',
  margin: 0,
};
const canvasStyle = {
  display: 'block',
  margin: '0 auto',
  borderRadius: '50%',
  position: 'absolute',
  top: '50%',
  left: '50%',
};

export default () => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);

  Object.assign(document.body.style, bodyStyle);
  Object.assign(canvas.style, canvasStyle);

  const resize = () => {
    const size = Math.min(window.innerWidth, window.innerHeight) - margin;
    canvas.width = size;
    canvas.height = size;
    canvas.style.marginLeft = `-${size / 2}px`;
    canvas.style.marginTop = `-${size / 2}px`;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.globalAlpha = 0.8;
  };

  window.addEventListener('resize', resize);
  resize();

  return canvas;
};
