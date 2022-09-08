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

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  console.log("getUserMedia supported.");
  navigator.mediaDevices
    .getUserMedia(
      // constraints - only audio needed for this app
      {
        video: true,
        audio: true,
      }
    )

    // Success callback
    .then((stream) => {})

    // Error callback
    .catch((err) => {
      console.error(`The following getUserMedia error occurred: ${err}`);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}

if (navigator.mediaDevices.getUserMedia) {
  const constraints = { audio: true, video: true };
  const chunks = [];

  const onSuccess = (stream) => {
    const options = {
      audioBitsPerSecond : 128000,
      videoBitsPerSecond : 2500000,
      mimeType : 'video/mp4'
    }
    const mediaRecorder1 = new MediaRecorder1(stream, options);
    m = mediaRecorder;

    // …
  }
}

if (navigator.mediaDevices.getUserMedia) {
  const constraints = { audio: true, video: true };
  const chunks = [];

  const onSuccess = (stream) => {
    const options = {
      audioBitsPerSecond : 128000,
      videoBitsPerSecond : 2500000,
      mimeType : 'video/mp4'
    }
    const mediaRecorder = new MediaRecorder2(streamMedia, options);
    m = mediaRecorder;

    // …
  }
}

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

videoElement1.srcObject = userMedia;
videoElement2.srcObject = userMedia;
videoElement1.play();
videoElement2.play();

function start() {
  videoElement1.play();
  videoElement2.play();
  mediaRecorder1.start();
  mediaRecorder2.start();
}
function stop() {
  videoElement1.stop();
  videoElement2.stop();
  mediaRecorder1.stop();
  mediaRecorder2.stop();
}

mediaRecorder1.onstop = (e) => {
  console.log("recorder stopped");

  const video = document.getElementById("Preview2");

  const blob = new Blob(chunks, { type: "video/mp4; codecs=opus" });
  chunks = [];
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;

  };
};

mediaRecorder2.onstop = (e) => {
  console.log("recorder stopped");

  const video = document.getElementById("Preview1");

  const blob = new Blob(chunks, { type: "video/mp4; codecs=opus" });
  chunks = [];
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;

  };
