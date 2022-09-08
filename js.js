window.onload = async () => {
const userMedia = await navigator.mediaDevices.getUserMedia({audio : true, video : true});

videoElement.srcObject = userMedia;

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

stopBtn.disabled = true;
};
startBtn.onclick = async () => {
  try {
stopBtn.disabled = false;
videoElement.srcObject = userMedia;
videoElement.play();
    startBtn.disabled = true;
    const constraints = {
      audio: true,
      video: true
    };    stopBtn.disabled = false;
videoElement.srcObject = userMedia;
videoElement.play();

stopBtn.onclick = async () => {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    screenMedia.enabled = false;
    audioTrack.enabled = false;
    videoTrack.enabled = false;
}
startBtn.onclick = async () => {
  try {
 stopBtn.disabled = false;
    startBtn.disabled = true;
    screenMedia.enabled = true;
    audioTrack.enabled = true;
    videoTrack.enabled = true;
    const constraints = {
      audio: true,
      video: true
    };
videoElement.srcObject = userMedia;
videoElement.play();
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    for (const track of stream.getTracks()) {
      track.onended = () => {
        startBtn.disabled = stream.getTracks().some((t) => t.readyState == 'live');
      };
    }
  } catch (err) {
    console.error(err);
  }
};
