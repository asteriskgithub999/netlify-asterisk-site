var i = 1; 
window.addEventListener("gamepadconnected", function(e) {
  var gp = navigator.getGamepads()[e.gamepad.index];
  document.getElementById("gpInfo").innerHTML = ("A " + gp.id + " was successfully detected! There are a total of " + gp.buttons.length + " buttons.")
  //alert("A " + gp.id + " was successfully detected!")

  setInterval(function(){
    isPressed = gp.buttons[0].pressed;
    document.getElementById("button").innerHTML = isPressed;
  }, 100)
});