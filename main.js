import update from './src/update';
import init from './src/init';
import draw from './src/draw';

let state;

const tick = () => {
  requestAnimationFrame(tick);
  state = update(state);
  draw(state);
};

init().then((initializedState) => {
  state = initializedState;
  tick();
});
