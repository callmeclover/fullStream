window.onload = async () => {
const userMedia = await navigator.mediaDevices.getUserMedia({audio : true, video : true});

const videoElement2 = document.getElementById("localVideo1");
const videoElement1 = document.getElementById("localVideo2");


videoElement2.srcObject = userMedia;
videoElement1.srcObject = streamMedia;

const videoTrack = userMedia.getVideoTracks()[0];
const audioTrack = userMedia.getAudioTracks()[0];
const screenMedia = await navigator.mediaDevices.getDisplayMedia();

const streamMedia = new MediaStream();
const stream = new MediaStream();
streamMedia.addTrack(screenMedia);
stream.addTrack(videoTrack);
stream.addTrack(audioTrack);

const startBtn = document.getElementById('startbtn');
const stopBtn = document.getElementById('stopbtn');

  startBtn.addEventListener("click", start());
  stopBtn.addEventListener("click", stop());
  
}
function start() {
  videoElement1.play();
  videoElement2.play();
}
function stop() {
  videoElement1.stop();
  videoElement2.stop();
}
