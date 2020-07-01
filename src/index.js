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

    const player = document.getElementById('player');
    player.addEventListener("play", function() { Form.animateInput() });
    player.addEventListener("pause", function() { Form.animateInput() });
});