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
    const modal = new Modal(canvas);
    // const space = new Space(canvas);
    const form = new Form();

    function animateInput() {
        let userGreet = document.getElementById('user-output-greet');
        let userText = document.getElementById('user-output-words');
debugger
        userGreet.innerHTML = userGreet.innerText.replace(/\S/g, "<span class='letter'>$&</span>");
        userText.innerHTML = userText.innerText.replace(/\S/g, "<span class='letter'>$&</span>");
            
        anime.timeline({loop: false})
        .add({
          targets: '#user-output-greet .letter',
          translateY: [100,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 300 + 30 * i
        })
        // .add({
        //     targets: '#user-output-greet .letter',
        //     translateY: [0,-100],
        //     opacity: [1,0],
        //     easing: "easeInExpo",
        //     duration: 1200,
        //     delay: (el, i) => 100 + 30 * i
        // })
        .add({
            targets: '#user-output-words .letter',
            translateY: [100,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 300 + 30 * i
          })
        //   .add({
        //       targets: '#user-output-words .letter',
        //       translateY: [0,-100],
        //       opacity: [1,0],
        //       easing: "easeInExpo",
        //       duration: 1200,
        //       delay: (el, i) => 100 + 30 * i
        //   });
    }

    const player = document.getElementById('player');
    player.addEventListener("play", () => {
debugger
        console.log("play");
        animateInput(); 
    });
    // player.addEventListener("pause", animateInput() );
});