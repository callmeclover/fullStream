const userMedia = await navigator.mediaDevices.getUserMedia({audio : true, video : true});
const videoElement = document.getElementById("localVideo");

videoElement.srcObject = userMedia;

const videoTrack = userMedia.getVideoTracks()[0];
const audioTrack = userMedia.getAudioTracks()[0];
const screenMedia = await navigator.mediaDevices.getDisplayMedia();

const stream = new MediaStream();
stream.addTrack(screenMedia);
stream.addTrack(videoTrack);
stream.addTrack(audioTrack);

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

startBtn.onclick = async () => {
    stopBtn.disabled = false;
    startBtn.disabled = true;
videoElement.play();
}
stopBtn.onclick = async () => {
    stopBtn.disabled = true;
    startBtn.disabled = false;
}
