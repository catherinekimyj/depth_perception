import "./styles/index.scss";
import "./styles/modal.scss";
import "./styles/navbar.scss";
import "./styles/canvas.scss";
import Modal from "./modal";
import ModalInfo from "./modal_info";
import Form from "./form";
import Animation from "./animation";
import anime from "animejs/lib/anime.es.js";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();
  let currentBuffer = null;

  const modal = new Modal(canvas);
  const modalInfo = new ModalInfo(canvas);
  const form = new Form();
  const animation = new Animation();

  let textAnimation;

  const anim = function () {
    let userGreet = document.getElementById("user-output-greet");
    let userText = document.getElementById("user-output-words");
    let userEncourage = document.getElementById("user-output-encourage");
    let selection = document.getElementById("selection");
    let userGreetTime = userGreet.innerText.match(/\S/g).length;
    let userEncourageTime = userEncourage.innerText.match(/\S/g).length;
    let userTextTime = userText.innerText.length;
    let delayTime;
    let combinedChars;

    if (userTextTime === undefined || userTextTime === 0) {
      combinedChars = userEncourageTime + userGreetTime;
    } else {
      let userTextTime = userText.innerText.match(/\S/g).length;
      combinedChars = userTextTime + userGreetTime + userEncourageTime;
    }

    if (selection.value === "./src/public/music/brainwaves.mp3") {
      delayTime = 600000/(combinedChars + 4);
    } else if (selection.value === "./src/public/music/ocean_waves.mp3") {
      delayTime = 489000/(combinedChars + 4);
    } else if (selection.value === "./src/public/music/relaxing.mp3") {
      delayTime = 304000/(combinedChars + 4);
    } else if (selection.value === "./src/public/music/30_sec.mp3") {
      delayTime = 30000/(combinedChars + 4);
    }

    textAnimation = anime.timeline({ loop: false }).add({
      targets: ".letters",
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: delayTime * 3,
      autoplay: false,
      direction: "normal",
      delay: (el, i) => delayTime * i
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
  });
});
