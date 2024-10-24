const videoPlayer = document.getElementById('background-video');
const videoInput = document.getElementById('video-input');

window.onload = function() {
    videoInput.focus();
};
          
videoInput.addEventListener('change', (event) => {
    const newVideoNumber = videoInput.value;
    videoPlayer.src = `videos/${newVideoNumber}.mp4`; 
    videoPlayer.load(); // Load the new video source
    videoPlayer.play(); // Start playing the new video
});