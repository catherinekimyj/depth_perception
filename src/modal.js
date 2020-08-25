import Form from './form';
import anime from 'animejs/lib/anime.es.js';

class Modal {
    constructor(canvas) {
        this.closeModal();
        this.openModal();
    }

    closeModal() {
        const modal = document.getElementById('myModal');
        const closeBttn = document.getElementById("close");

        closeBttn.onclick = function() {
            modal.classList.remove('showModal');
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    };

    openModal() {
        const modal = document.getElementById('myModal');
        const btn = document.getElementById('myBtn');
        
        btn.onclick = function() {
            modal.style.display= "block";
        }
    }
}

export default Modal;