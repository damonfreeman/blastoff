function redButton() {
  var yourCountDown = prompt("Type in seconds to countdown",);
  
  for(var i = yourCountDown; i >= 0; i--) {
    document.getElementById("countDown1").innerHTML += i + "seconds ";
    }
    document.getElementById("countDown2").innerHTML = "BLAST OFF";
};