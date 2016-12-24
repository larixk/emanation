import createPattern from './createPattern';

export default (state) => {
  const newState = state;
  const timeSinceStart = new Date().getTime() - state.start;

  newState.rotation = Math.sin(timeSinceStart / 48123) * Math.PI;
  newState.scale = 1 + (Math.sin(timeSinceStart / 32345) * 0.5);

  if (newState.frame % 30 === 0) {
    newState.hue += 1;
    newState.pattern = createPattern(newState);
  }

  newState.frame += 1;

  return newState;
};
