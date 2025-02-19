const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const degree2Radian = (degrees) => degrees * (Math.PI / 180);

let width, height, mouseX, mouseY, centerX, centerY;

const circleSize = 50;
const thickness = 10;
const draggingCircleSize = 5;


window.addEventListener('load', _ => {
  canvas.width = 100;
  canvas.height = 100; 

  width = canvas.width;
  height = canvas.height;
  centerX = width / 2 / 2;
  centerY = height / 2 / 2;

  window.requestAnimationFrame(render);
})

let mouseDown;

canvas.addEventListener('mousedown', e => {
    mouseDown = true;
});

canvas.addEventListener('mouseup', e => {
    mouseDown = false;
});

canvas.addEventListener('mousemove', e => {
    if(mouseDown) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
});

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const step = 360 / 24;
  
  ctx.fillStyle = 'black';
    
  const theta = Math.atan2( mouseY - centerY, mouseX - centerX);
  
  for (let i = 0; i < 360; i+=step) {
    const x = Math.cos(degree2Radian(i)) * circleSize;
    const y = Math.sin(degree2Radian(i)) * circleSize;
    
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, circleSize, degree2Radian(-90), degree2Radian(270));
    ctx.strokeStyle = '#00000003';
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(width / 2, height / 2, circleSize, degree2Radian(-90), theta);
    ctx.strokeStyle = '#27cd41';
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';
    ctx.stroke();

    const cx = Math.cos(theta) * circleSize;
    const cy = Math.sin(theta) * circleSize;
    ctx.beginPath();
    ctx.arc(width / 2 + cx, height / 2 + cy, draggingCircleSize, 0, 2 * Math.PI);
    ctx.fillStyle = '#27cd41';
    ctx.fill();

  } 

  window.requestAnimationFrame(render);
}