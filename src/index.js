import './styles/index.scss';
import './styles/modal.scss';
import './styles/navbar.scss';
import './styles/user_content.scss';
import Modal from './modal';
import Form from './form';
// import Player from './player';
import * as Util from './util';

console.log("Webpack is working!");

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

debugger

    const modal = new Modal(canvas);
    // const space = new Space(canvas);
    const form = new Form();

    function animateInput() {
        let userGreet = document.getElementById('user-output-greet');
        let userText = document.getElementById('user-output-words');
        let userGreetTime = userGreet.innerText.length;
        let userTextTime = userText.innerText.length;
        let combinedChars = userTextTime + userGreetTime;

debugger
        userGreet.innerHTML = userGreet.innerText.replace(/\S/g, "<span class='letters'>$&</span>");
        userText.innerHTML = userText.innerText.replace(/\S/g, "<span class='letters'>$&</span>");
        
        let selection = document.getElementById('selection');
debugger
        let delayTime = 30;
        if (selection.value === "./src/public/music/brainwaves.mp3") {
            delayTime  = ((600000)/combinedChars);
        } else if (selection.value === "./src/public/music/ocean_waves.mp3") {
            delayTime = ((489000)/combinedChars);
        } else if (selection.value === "./src/public/music/relaxing.mp3") {
            delayTime = ((304000)/combinedChars)
        } else {
            delayTime = ((30000)/combinedChars)
        }

        anime.timeline({loop: false})
        .add({
            targets: '.letters',
            opacity: [1,0],
            easing: "easeInExpo",
            duration: delayTime,
            delay: (el, i) => delayTime * (i * 1.23)
        })
    }

    const player = document.getElementById('player');
    player.addEventListener("play", () => {
debugger
        console.log("play");
        animateInput(); 
    });
    // player.addEventListener("pause", animateInput() );
});