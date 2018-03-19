import TerminatorVision from './TerminatorVision.js'
import T800Interface from './T800Interface.js'

const video = document.createElement('video');
const canvas = document.getElementById("canvas");
const terminatorVision = new TerminatorVision(canvas, video);

const t800Interface = new T800Interface()

const audioContext = new AudioContext();
const analyser = audioContext.createAnalyser();

let requestID, source, dataArray, bufferLength;

const sinewave = document.getElementById("sinewave")
const sinewaveCtx = sinewave.getContext("2d");

function render(time) {
  terminatorVision.drawFrame();
  drawSoundAnalyzer();
  requestID = requestAnimationFrame(render);
}

navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true
}).then(successCallback).catch(errorCallback);

function successCallback (stream) {
    video.srcObject = stream;
    video.muted = true;

    conntectSoundAnalyzerTo(stream)

    video.onloadedmetadata = function(e) {
      createTerminatorInterface()
      video.play();
    };

    video.onplaying = function() {
      requestID = requestAnimationFrame(render);
      changeTitleText('play');
    }

    video.onpause = function() {
      cancelAnimationFrame(requestID);
      changeTitleText('pause');
    }
}

function changeTitleText (status) {
  document.title = `Multimedia: ${status.toUpperCase()}`
}

function conntectSoundAnalyzerTo(stream) {
  source = audioContext.createMediaStreamSource(stream);
  source.connect(analyser);
  analyser.fftSize = 2048;

  bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);
}

function drawSoundAnalyzer() {
  const width = sinewave.width;
  const height = sinewave.height;

  analyser.getByteTimeDomainData(dataArray);

  sinewaveCtx.clearRect(0, 0, width, height);

  sinewaveCtx.lineWidth = 2;
  sinewaveCtx.strokeStyle = 'rgb(255, 255, 255)';

  sinewaveCtx.beginPath();

  const sliceWidth = width * 1.0 / bufferLength;
  let x = 0;

  for(let i = 0; i < bufferLength; ++i) {
      const v = dataArray[i] / 128.0;
      const y = v * height / 2;

      if (i === 0) {
        sinewaveCtx.moveTo(x, y);
      } else {
        sinewaveCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

  sinewaveCtx.lineTo(canvas.width, canvas.height / 2);
  sinewaveCtx.stroke();
}

function errorCallback (error) {
   console.error('Ошибка во при попытке запуска getUserMedia' + error.name);
}

document.addEventListener('visibilitychange', () => {
  document.hidden ? video.pause() : video.play();
});

canvas.addEventListener('click', () => {
  video.paused ? video.play() : video.pause();
});

function createTerminatorInterface () {
  const analyserElem = document.querySelector('.analyser');
  const scannerElem = document.querySelector('.scanner');
  const scannerTextElem = document.querySelector('.scanner-text');
  const navigatorElem = document.querySelector('.navigator');
  const navigatorTextElem = document.querySelector('.navigator-text');

  t800Interface.createAnalyser(analyserElem)
  analyserElem.classList.add('analyser_animate')

  t800Interface.createScanner(scannerElem)
  t800Interface.createScannerText(scannerTextElem)

  t800Interface.createNavigator(navigatorElem)
  t800Interface.createNavigatorText(navigatorTextElem)
};
