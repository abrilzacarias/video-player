const video = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");

play.addEventListener('click', played);
pause.addEventListener('click', paused);

function played() {
    video.play();
    play.hidden = true;
    pause.hidden = false;
}

function paused() {
    video.pause();
    pause.hidden = true;
    play.hidden = false;
}

backward.addEventListener('click', goBackwards);
forward.addEventListener('click', goForward);

function goBackwards() {
    video.currentTime -= 10;
    video.currentTime;
}

function goForward() {
    video.currentTime += 10;
    video.currentTime;
}

const progress = document.querySelector("#progress");
video.addEventListener('loadedmetadata', loaded);
video.addEventListener('timeupdate', timeUpdate);

function loaded() {
    progress.max = video.duration;
}

function timeUpdate() {
    progress.value = video.currentTime;
}

progress.addEventListener('input', input);

function input() {
    video.currentTime = progress.value;
}