import createPattern from './createPattern';

export default (state) => {
  const newState = {};

  const timeSinceStart = (state.frame * 16) - 210;
  newState.rotation = Math.sin(timeSinceStart / 48123) * Math.PI;
  newState.scale = 1 + (Math.sin(timeSinceStart / 32345) * 0.5);

  if (state.frame % 600 === 0) {
    newState.pattern = createPattern(state);
  }

  newState.frame = state.frame + 1;

  return Object.assign({}, state, newState);
};
