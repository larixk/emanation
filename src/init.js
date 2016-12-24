import createAutoScalingCanvas from './createAutoScalingCanvas';
import createCenterDot from './createCenterDot';

const canvas = createAutoScalingCanvas();
createCenterDot();

export default () => Promise.resolve({
  canvas,
  ctx: canvas.getContext('2d'),
  start: new Date().getTime() - 6000,
  frame: 0,
  rotation: 0,
  scale: 1,
  hue: Math.floor(Math.random() * 360),
});
