import createPattern from './createPattern';

export default (state) => {
  const newState = {};
  const timeSinceStart = (state.frame * 16) - 210;

  const rotationDuration = 48123;
  newState.rotation = Math.sin(timeSinceStart / rotationDuration) * Math.PI;

  const scaleDuration = 32345;
  newState.scale = 1 + (Math.sin(timeSinceStart / scaleDuration) * 0.5);

  if (state.frame % 600 === 0) {
    newState.hue = Math.floor(Math.random() * 360);
    newState.pattern = createPattern(state);
  }

  newState.frame = state.frame + 1;

  return Object.assign({}, state, newState);
};
