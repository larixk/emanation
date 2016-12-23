const initialState = {
  rotation: 0,
  translate: 0,
  scale: 1,
  start: new Date().getTime() - 5000,
};


const cover = document.createElement('div');
cover.style.display = 'block';
cover.style.width = '16px';
cover.style.height = '16px';
cover.style.background = 'white';
cover.style.zIndex = 10;
cover.style.position = 'absolute';
cover.style.top = '50%';
cover.style.left = '50%';
cover.style.marginLeft = '-8px';
cover.style.marginTop = '-8px';
cover.style.borderRadius = '50%';

document.body.appendChild(cover);
export default () => Promise.resolve(initialState);
