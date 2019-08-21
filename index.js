// Tikeshwar Deep


var noOfSounds = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfSounds; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var ch = this.innerHTML;
    makeSound(ch);
    makeAnimation(ch);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  makeAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.wav");
      crash.play();
      break;

    case "a":
      var tom4 = new Audio("sounds/hiss.wav");
      tom4.play();
      break;
    case "s":
      var kick = new Audio("sounds/kick.wav");
      kick.play();
      break;
    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/who.wav");
      tom1.play();
      break;
    case "k":
      var tom2 = new Audio("sounds/timp.wav");
      tom2.play();
      break;
    case "l":
      var tom3 = new Audio("sounds/oh.wav");
      tom3.play();
      break;
    case "m":
      var orch = new Audio("sounds/orch.wav");
      orch.play();
      break;
    case "n":
      var gun = new Audio("sounds/gun-shot.wav");
      gun.play();
      break;
    case "b":
      var bell = new Audio("sounds/bell.wav");
      bell.play();
      break;
    default:
      console.log(this.innerHTML);

  }
}

function makeAnimation(eventKey) {
  var activeButton = document.querySelector("." + eventKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 110);
}
