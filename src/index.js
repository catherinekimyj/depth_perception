import "./styles/index.scss";
import "./styles/modal.scss";
import "./styles/navbar.scss";
import "./styles/canvas.scss";
import Modal from "./modal";
import ModalInfo from "./modal_info";
import Form from "./form";
import Animation from './animation';
import anime from "animejs/lib/anime.es.js";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  const modal = new Modal(canvas);
  const modalInfo = new ModalInfo(canvas);
  const form = new Form();
  const animation = new Animation();

  let textAnimation;

  const anim = function () {
    let userGreet = document.getElementById("user-output-greet");
    let userText = document.getElementById("user-output-words");
    let userEncourage = document.getElementById('user-output-encourage');
    let selection = document.getElementById("selection");
    let userGreetTime = userGreet.innerText.length;
    let userTextTime = userText.innerText.length;
    let userEncourageTime = userEncourage.innerText.length;
    let delayTime;
    let combinedChars;
      if (userTextTime === 0) {
    debugger
        combinedChars = userEncourageTime + userGreetTime;
      } else {
    debugger
        combinedChars = userTextTime + userGreetTime + userEncourageTime;
      }
      

    if (selection.value === "./src/public/music/brainwaves.mp3") {
  debugger
  delayTime = 600000 / combinedChars;
} else if (selection.value === "./src/public/music/ocean_waves.mp3") {
  debugger
  delayTime = 489000 / combinedChars;
} else if (selection.value === "./src/public/music/relaxing.mp3") {
  debugger
  delayTime = 304000 / combinedChars;
} else if (selection.value === "./src/public/music/30_sec.mp3") {
  debugger
      delayTime = 30000 / combinedChars;
    }

    textAnimation = anime.timeline({ loop: false })
    .add({
      targets: ".letters",
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 4000,
      autoplay: false,
      direction: "normal",
      // delay: (el, i) => delayTime * (i * 1),
      delay: (el, i) => (i * 1.025) * delayTime,
    });
  };

  const player = document.getElementById("player");
  player.addEventListener("play", () => {
    if (player.currentTime === 0) {
      anim();
      textAnimation.play();
      animation.animate();
    } else {
      textAnimation.play();
    }
  });

  player.addEventListener("pause", () => {
    textAnimation.pause();
  });

  player.addEventListener("ended", () => {
    animation.endAnimate();
  })
});
