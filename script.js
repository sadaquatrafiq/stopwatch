var hr = 0;
var min = 0;
var sec = 0;
var count1 = 0;

var timer = false;

function start() {
  timer = true;
  stopwatch();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count1 = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count1").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count1 = count1 + 1;

    if (count1 == 100) {
      sec = sec + 1;
      count1 = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
   
    document.getElementById("min").innerHTML = min;
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count1").innerHTML = count1;
    setTimeout("stopwatch()", 10);
  }
}