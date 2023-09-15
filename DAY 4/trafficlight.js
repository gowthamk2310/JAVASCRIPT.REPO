document.getElementsById('stopButton');
document.getElementsById('slowButton');
document.getElementsById('goButton');

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}
function illuminateYellow() {
  clearLights();
  document.getElementById('waitLight').style.backgroundColor = "yellow";
}
function illuminateGreen() {
    clearLights();
    document.getElementById('golight').style.backgroundColor = "green";
  }

function clearLights() {
  document.getElementsById('stopLight').style.backgroundColor = "black";
  document.getElementsById('slowLight').style.backgroundColor = "black";
  document.getElementsById('goLight').style.backgroundColor = "black";
}


document.getElementsBytag