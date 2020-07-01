
let canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;

let audio = new Audio() ;
audio.src = "tsuruda-peanut-butter.mp3"
audio.controls = false;
audio.volume = 1
audio.loop = false;
audio.autoplay = false;



const initMp3Player = () => {
  document.getElementById("audio-box").appendChild(audio);
  context = new AudioContext();
  analyser = context.createAnalyser();
  canvas = document.getElementById('analyser-render')
  ctx = canvas.getContext('2d')

  source = context.createMediaElementSource(audio)
  source.connect(analyser);
  analyser.connect(context.destination);
  frameLooper();
}
const frameLooper = () => {
  requestAnimationFrame(frameLooper)
  fbc_array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbc_array);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bars = 100;
  for (let i = 0; i < bars; i++) {
    bar_x = i * 4;
    bar_width = 3.8;
    bar_height = -(fbc_array[i] / 2);
    ctx.fillStyle = `rgb(${Math.floor(200 - (0.5*i))}, ${Math.floor((0.05*i) * i)}, ${Math.floor((0.525*i) * i)})`
    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
  }
}
  
window.addEventListener("load", initMp3Player, false)