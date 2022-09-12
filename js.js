const startBtn = document.getElementById('startbtn');
const stopBtn = document.getElementById('stopbtn');
 
const userMedia = await navigator.mediaDevices.getUserMedia({audio : true, video : true});

const videoElement2 = document.getElementById("localVideo1");
const videoElement1 = document.getElementById("localVideo2");

const videoTrack = userMedia.getVideoTracks()[0];
const audioTrack = userMedia.getAudioTracks()[0];
const screenMedia = await navigator.mediaDevices.getDisplayMedia();

screenMedia.enabled = false;
 videoTrack.enabled = false;
  audioTrack.enabled = false;

const stream = new MediaStream();
stream.addTrack(videoTrack);
stream.addTrack(audioTrack);
  
videoElement2.srcObject = userMedia;
videoElement1.srcObject = screenMedia;
  

function start() {
screenMedia.enabled = true;
videoTrack.enabled = true;
audioTrack.enabled = true;
videoElement2.srcObject = userMedia;
videoElement1.srcObject = screenMedia;
  videoElement1.play();
  videoElement2.play();
}
startBtn.addEventListener('click', () => {
videoTrack.enabled = true;
audioTrack.enabled = true;
videoElement2.srcObject = userMedia;
videoElement1.srcObject = screenMedia;
  videoElement1.play();
  videoElement2.play();
});
stopBtn.addEventListener('click', () => {
 videoTrack.enabled = false;
  audioTrack.enabled = false;
  videoElement1.stop();
  videoElement2.stop();
});
