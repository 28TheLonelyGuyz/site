let stateCheck = setInterval(() => {
  if (document.readyState == 'complete') {
    clearInterval(stateCheck);
    window.location.href = 'timer.html';
  }
}, 100);
