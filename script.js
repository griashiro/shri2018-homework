import WebGLVideo from './WebGLVideo.js'
navigator.getUserMedia = getCrossBrowserUserMedia();

const video = document.createElement('video');
const canvas = document.getElementById("canvas");

const webglVideo = new WebGLVideo(canvas, video);

let requestID;

function render(time) {
  webglVideo.drawFrame();
  requestID = requestAnimationFrame(render);
}

navigator.getUserMedia({
  audio: true,
  video: true
}, successCallback, errorCallback);

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
   console.error('Ошибка во при попытке запуска getUserMedia' + err.name);
}

document.addEventListener('visibilitychange', () => {
  document.hidden ? video.pause() : video.play();
});

canvas.addEventListener('click', () => {
  video.paused ? video.play() : video.pause();
});

function getCrossBrowserUserMedia () {
  return navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
}
