import anime from 'animejs/lib/anime.es.js';

class Animation {
  constructor() {
    let userGreet = document.getElementById("user-output-greet");
    let userText = document.getElementById("user-output-words");
    let userGreetTime = userGreet.innerText.length;
    let userTextTime = userText.innerText.length;
    let combinedChars = userTextTime + userGreetTime;

    userGreet.innerHTML = userGreet.innerText.replace(
      /\S/g,
      "<span class='letters'>$&</span>"
    );
    userText.innerHTML = userText.innerText.replace(
      /\S/g,
      "<span class='letters'>$&</span>"
    );

    let selection = document.getElementById("selection");
    let delayTime = 30;

    if (selection.value === "./src/public/music/brainwaves.mp3") {
      delayTime = 600000 / combinedChars;
    } else if (selection.value === "./src/public/music/ocean_waves.mp3") {
      delayTime = 489000 / combinedChars;
    } else if (selection.value === "./src/public/music/relaxing.mp3") {
      delayTime = 304000 / combinedChars;
    } else if (selection.value === "./src/public/music/30_sec.mp3") {
      delayTime = 30000 / combinedChars;
    }
  }

  animate() {


    // let animation = anime({
    //   targets: ".letters",
    //   opacity: [1, 0],
    //   loop: false,
    //   // translateX: [50, 0],
    //   easing: "easeInExpo",
    //   duration: 2500,
    //   // autoplay: false,
    //   delay: (el, i) => delayTime * (i * 1.23),
    // });

    let textAnimation = anime.timeline({loop: false})
    .add({
        targets: '.letters',
        opacity: [1,0],
        // translateX: 250,
        easing: "easeInExpo",
        duration: delayTime,
        autoplay: true,
        delay: (el, i) => delayTime * (i * 1.23)
});

    console.log("textAnimation");
    textAnimation.play();
    
    // const player = document.getElementById("player");
    // player.addEventListener("play", () => {
    //   debugger;
    //   console.log("playing");
    //   textAnimation.play();
    // });
    
    // player.addEventListener("pause", () => {
    //   debugger;
    //   console.log("paused");
    // //   animation.pause();
    // });
}
}

export default Animation;
