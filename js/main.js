const START_MUSIC_AT = 0.68;
const MUSIC_VALUME = 1;
const TIME_TO_REMOVE_STYLE = 500;

function buttonPress(e) {

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; 

  audio.volume = MUSIC_VALUME;
  audio.currentTime = START_MUSIC_AT;
  audio.play();
  key.classList.add("playing");

  setTimeout(function () {
    key.classList.remove("playing");
  }, TIME_TO_REMOVE_STYLE);
}

addEventListener("keydown", buttonPress);
