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

startBtn.onclick = async () => {
    stopBtn.disabled = false;
    startBtn.disabled = true;
videoElement.srcObject = userMedia;
videoElement.play();
}
stopBtn.onclick = async () => {
    stopBtn.disabled = true;
    startBtn.disabled = false;
}
