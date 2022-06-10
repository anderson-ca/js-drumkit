window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`li[data-key='${e.keyCode}']`);
  console.log(audio);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

window.addEventListener("keyup", (e) => {
  const key = document.querySelector(`li[data-key='${e.keyCode}']`);
  key.classList.remove("playing");
});
