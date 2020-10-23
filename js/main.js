function buttonPress(e) {
  // обработчик листнера нажатия клавиш
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // если нажата нетак клавиша
  //audio.playbackRate = 3.0; // ускоряет музыку
  audio.volume = 1;
  const time = 500;
  audio.currentTime = 0.68;
  audio.play();
  key.classList.add("playing");
  setTimeout(function () {
    key.classList.remove("playing");
  }, time);
}

addEventListener("keydown", buttonPress);
