import createAutoScalingCanvas from './createAutoScalingCanvas';
import createCenterDot from './createCenterDot';

export default () => {
  const canvas = createAutoScalingCanvas();
  createCenterDot();

  return Promise.resolve({
    canvas,
    ctx: canvas.getContext('2d'),
    frame: 0,
    rotation: 0,
    scale: 1,
    hue: Math.floor(Math.random() * 360),
  });
};
