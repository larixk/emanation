const centerDotSize = 8;
const centerDotStyle = {
  display: 'block',
  background: 'white',
  zIndex: 1,
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: `${centerDotSize}px`,
  height: `${centerDotSize}px`,
  marginLeft: `${-centerDotSize * 0.5}px`,
  marginTop: `${-centerDotSize * 0.5}px`,
  borderRadius: '50%',
};

export default () => {
  const centerDot = document.createElement('div');
  Object.assign(centerDot.style, centerDotStyle);
  document.body.appendChild(centerDot);
  return centerDot;
};
