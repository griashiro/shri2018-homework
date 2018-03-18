import TerminatorVision from './TerminatorVision.js'
import T800Interface from './T800Interface.js'

const video = document.createElement('video');
const canvas = document.getElementById("canvas");

const terminatorVision = new TerminatorVision(canvas, video);

let requestID;

function render(time) {
  terminatorVision.drawFrame();
  requestID = requestAnimationFrame(render);
}

navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true
}).then(successCallback).catch(errorCallback);

function successCallback (stream) {
    video.srcObject = stream;
    video.muted = true;

    video.onloadedmetadata = function(e) {
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

    function changeTitleText (status) {
      document.title = `Multimedia: ${status.toUpperCase()}`
    }
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

function runTerminatorInterface () {
  setTimeout(() => {
      createScanner()
  }, 2000)
  setInterval(() => {
    createDigitsInfo()
  }, 3000)
}

function createDigitsInfo () {
  const container = document.querySelector('.digits-info');

  container.innerHTML = ''

  const t800Interface = new T800Interface()
  t800Interface.createDigitsInfo(container)

  const childElems = [...container.children];
  childElems.reverse();

  makeVisible(childElems.pop());
  makeVisible(childElems.pop());

  const showText = () => {
    if (childElems.length > 0) {
      setTimeout(() => {
        makeVisible(childElems.pop());
        showText();
      }, 100)
    }
  }

  showText();
}

function makeVisible (elem) {
  elem.style.visibility = 'visible'
}

function createScanner() {
  const container = document.querySelector('.scanner');

  const t800Interface = new T800Interface()
  t800Interface.createScanner(container)
}

runTerminatorInterface()
