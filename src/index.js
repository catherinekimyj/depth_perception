import './styles/index.scss';
import './styles/modal.scss';
import './styles/navbar.scss';
import Modal from './modal';
import Form from './form';
import Timer from './timer';
import * as Util from './util';

console.log("Webpack is working!");

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    const modal = new Modal(canvas);
    // const space = new Space(canvas);
    const form = new Form();
});