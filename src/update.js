import createPattern from './createPattern';
import wave from './wave';

export default (state) => {
  const newState = {};
  const timeSinceStart = new Date().getTime() - state.start;

  const rotationDuration = 48123;
  newState.rotation = wave(timeSinceStart, rotationDuration) * Math.PI;

  const scaleDuration = 32345;
  newState.scale = 1 + (wave(timeSinceStart, scaleDuration) * 0.5);

  if (state.frame % 30 === 0) {
    newState.hue = state.hue + 1;
    newState.pattern = createPattern(state);
  }

  newState.frame = state.frame + 1;

  return Object.assign({}, state, newState);
};
