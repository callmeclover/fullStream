window.onload = async () => {
const userMedia = await navigator.mediaDevices.getUserMedia({audio : true, video : true});

const videoElement2 = document.getElementById("localVideo1");
const videoElement1 = document.getElementById("localVideo2");


videoElement2.srcObject = userMedia;

const videoTrack = userMedia.getVideoTracks()[0];
const audioTrack = userMedia.getAudioTracks()[0];
const screenMedia = await navigator.mediaDevices.getDisplayMedia();

screenMedia.enabled = false;
 videoTrack.enabled = false;
  audioTrack.enabled = false;

const streamMedia = new MediaStream();
const stream = new MediaStream();
streamMedia.addTrack(screenMedia);
stream.addTrack(videoTrack);
stream.addTrack(audioTrack);
  
videoElement2.srcObject = userMedia;
videoElement1.srcObject = streamMedia;
  
const startBtn = document.getElementById('startbtn');
const stopBtn = document.getElementById('stopbtn');

  startBtn.addEventListener("click", start());
  stopBtn.addEventListener("click", stop());
  
}
function start() {
screenMedia.enabled = true;
 videoTrack.enabled = true;
  audioTrack.enabled = true;
videoElement2.srcObject = userMedia;
videoElement1.srcObject = streamMedia;
  videoElement1.play();
  videoElement2.play();
}
function stop() {
  screenMedia.enabled = false;
 videoTrack.enabled = false;
  audioTrack.enabled = false;
  videoElement1.stop();
  videoElement2.stop();
}
