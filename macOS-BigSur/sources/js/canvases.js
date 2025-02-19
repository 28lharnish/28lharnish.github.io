//! Battery Label Canvas

const canvas = document.getElementById('batteryLabelCanvas');
const ctx = canvas.getContext('2d');
const deg2FDeg = (degrees) => (degrees - 90) * (Math.PI / 180);

const circleSize = 50;
const thickness = 10;

window.addEventListener('load', _ => {
  canvas.width = 110;
  canvas.height = 110; 
  window.requestAnimationFrame(render);
});

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const step = 360 / 24;
  
  ctx.fillStyle = 'black';

  for (let i = 0; i < 360; i+=step) {
    const x = Math.cos(i * (Math.PI / 180)) * circleSize;
    const y = Math.sin(i * (Math.PI / 180)) * circleSize;
    
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, circleSize, deg2FDeg(0), deg2FDeg(360));
    ctx.strokeStyle = '#00000003';
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, circleSize, deg2FDeg(0), deg2FDeg(320));
    ctx.strokeStyle = '#27cd41';
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';
    ctx.stroke();
  } 

  window.requestAnimationFrame(render);
}