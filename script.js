function changevid(buttonlink) {
    document.getElementById('change').src = buttonlink;
}

document.getElementById("startOrStopImg").onclick = function() {
    var audio = document.getElementById("audio");
    if (audio.paused) audio.play();
    else audio.pause();
};
