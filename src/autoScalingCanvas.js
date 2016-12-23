export default () => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);

  canvas.style.display = 'block';
  canvas.style.margin = '0 auto';
  canvas.style.borderRadius = '50%';
  canvas.style.position = 'absolute';
  canvas.style.top = '50%';
  canvas.style.left = '50%';

  document.body.style.overflow = 'hidden';
  document.body.style.margin = 0;

  const resize = () => {
    const size = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = size;
    canvas.height = size;
    canvas.style.marginLeft = `-${size / 2}px`;
    canvas.style.marginTop = `-${size / 2}px`;
  };

  window.addEventListener('resize', resize);
  resize();

  return canvas;
};
