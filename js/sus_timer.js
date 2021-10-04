function setTimer(duration, display, stop) {
  var timer = duration, minutes, seconds;
  
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    display.textContent = minutes + ":" + seconds;
    
    if (--timer < stop) {
      timer += 1;
      window.location.href = "lol.html";
    }
  }, 1000);
}

window.onload = function() {
  setTimer(5, document.querySelector('#timer'), 0);
};
