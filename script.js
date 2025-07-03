function changevid(buttonlink) {
    document.getElementById('change').src = buttonlink;
}

document.getElementById("startOrStopImg").onclick = function() {
    var audio = document.getElementById("audio");
    if (audio.paused) audio.play();
    else audio.pause();
};


$(function() {
   $("body").mousewheel(function(evt, chg) {
      this.scrollLeft -= (chg * 50); //need a value to speed up the change
      evt.preventDefault();
   });
});

