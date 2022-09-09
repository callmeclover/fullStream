
window.onload = async () => {
const userMedia = await navigator.mediaDevices.getUserMedia({audio : true, video : true});

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

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

]  
startBtn.onclick = function start() {
  videoElement1.play();
  videoElement2.play();
}
stopBtn.onclick = function stop() {
  videoElement1.stop();
  videoElement2.stop();
}
