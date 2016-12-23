export default (state) => {
  const newState = state;
  newState.rotation = Math.sin((new Date().getTime() - state.start) / 13000) * 0.5;
  newState.scale = 1 + Math.sin((new Date().getTime() - state.start) / 10000) * 0.5;
  return newState;
};
