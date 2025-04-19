const canvas = document.getElementById('matrixCanvas');
const cts = canvas.getContext('2d');

function resizeCanvas(){
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
resizeCanvas();

window.onresize = resizeCanvas;

const letter = '0123456789abcdefghijklmnopqrstuvwxyzㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅑㅓㅕㅗㅛㅜㅠㅡアァイィウヴエカガキギクグケゲコゴサザシジスズセソァァイィウヴエカガキギクグケゲコゴサザシジスズセソタダチヂッツヅテデトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン'.split('');
const fontSize = 14;

let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);


function draw(){
  cts.fillStyle = 'rgba(0, 0, 0, 0.1)';
  cts.fillRect(0,0, canvas.width, canvas.height);

  cts.fillStyle = '#0F0';
  cts.font = fontSize + 'px monospace';

  for(let i = 0 ; i < drops.length; i++){
    const text = letter[Math.floor(Math.random() * letter.length)];
    cts.fillText(text, i * fontSize, drops[i] * fontSize);

    if(drops[i] * fontSize > canvas.height && Math.random() > 0.95){
      drops[i] = 0;
    } 

    drops[i]++;
  }
} 

setInterval(draw, 33);


