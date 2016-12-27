window.a = document.createElement('canvas');
window.c = window.a.getContext('2d');
window.d = document;
document.body.appendChild(window.a);
document.body.style.padding = '0';
window.a.width = window.innerWidth;
window.a.height = window.innerHeight;
window.a.style.display = 'block';

// !function(){var t=function(){return Math.floor(360*Math.random())},e={frame:0,rotation:0,scale:1,hue:t()},r=d.createElement("canvas"),n=r.getContext("2d"),i=function(e,a,r){e.beginPath(),e.fillStyle="hsl("+t()+", 100%, 50%)",e.rect(a,r,1,1),e.fill()},l=function(){var t=2;return r.width=r.height=t,i(n,0,0),i(n,0,1),i(n,1,1),i(n,1,0),c.createPattern(r,"repeat")},o=function(t){var e=t.scale,r=t.rotation,n=t.pattern,i=.5*a.width;c.beginPath(),c.rect(i-3,i-3,6,6),c.fillStyle=n,c.fill(),c.save(),c.translate(i,i),c.scale(e,e),c.rotate(r),c.translate(-i,-i),c.drawImage(a,0,0),c.restore()},s=function(t){var e=16*t.frame-210;t.rotation=Math.sin(e/48123)*Math.PI,t.scale=1+.5*Math.sin(e/32345),t.frame%600===0&&(t.pattern=l(t)),t.frame=t.frame+1},h=function f(){requestAnimationFrame(f),s(e),o(e)};a.style.margin="0 auto",a.width=a.height=Math.min(a.width,a.height),c.imageSmoothingEnabled=!1,h()}();

(function () {

const randomDegree = () => Math.floor(Math.random() * 360);

let frame = 0;
let rotation = 0;
let pattern;

const tile = d.createElement('canvas');
const tileCtx = tile.getContext('2d');

const drawSquare = (tileCtx, x, y) => {
  tileCtx.beginPath();
  tileCtx.fillStyle = `hsl(${randomDegree()},100%,50%)`;
  tileCtx.rect(x, y, 1, 1);
  tileCtx.fill();
}

const createPattern = () => {
  tile.width = tile.height = 2;

  drawSquare(tileCtx, 0, 0);
  drawSquare(tileCtx, 0, 1);
  drawSquare(tileCtx, 1, 1);
  drawSquare(tileCtx, 1, 0);

  return c.createPattern(tile, 'repeat');
};

const draw = () => {
  const halfCanvasSize = a.width * 0.5;

  c.beginPath();
  c.rect(
    halfCanvasSize - 3,
    halfCanvasSize - 3,
    6,
    6
  );
  c.fillStyle = pattern; // eslint-disable-line no-param-reassign
  c.fill();

  c.save();

  c.translate(halfCanvasSize, halfCanvasSize);
  c.scale(scale, scale);
  c.rotate(rotation);
  c.translate(-halfCanvasSize, -halfCanvasSize);

  c.drawImage(a, 0, 0);

  c.restore();
};
const update = () => {
  const timeSinceStart = frame * 16 - 210;
  rotation = Math.sin(timeSinceStart / 48123) * Math.PI;
  scale = 1 + Math.sin(timeSinceStart / 32345) * 0.5;

  if (!(frame % 600)) {
    pattern = createPattern(state);
  }

  frame++;
};

const tick = () => {
  requestAnimationFrame(tick);
  update();
  draw();
};

a.style.margin = '0 auto';
a.width = a.height = Math.min(a.width, a.height);
c.imageSmoothingEnabled = false;
tick();

})();
