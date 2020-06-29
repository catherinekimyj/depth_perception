import Form from './form';

class Modal {
    constructor(canvas) {
        this.closeModal();
        this.openModal();
    }

    closeModal() {
        const modal = document.getElementById('myModal');
        const span = document.getElementsByClassName("close")[0];

        span.onclick = function() {
            console.log(span);
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            console.log(event);
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    };

    openModal() {
        const modal = document.getElementById('myModal');
        const btn = document.getElementById('myBtn');
        const span = document.getElementsByClassName("close")[0];
        
        btn.onclick = function() {
            modal.style.display= "block";
        }
        
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    }


}

export default Modal;