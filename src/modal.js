import Form from './form';

class Modal {
    constructor(canvas) {
        this.closeModal();
        this.openModal();
    }

    closeModal() {
        const modal = document.getElementById('myModal');
        const modalContent = document.getElementsByClassName('modal-content');
        const closeBttn = document.getElementById("close");

        closeBttn.onclick = function() {
    debugger
            modal.style.display = "none";
            // modalContent.classList.remove('hideModal');
            // modalContent.classList.add('hideModal');
        }

        window.onclick = function(event) {
debugger
            if (event.target == modal) {
            modal.style.display = "none";
//             modalContent.classList.remove('hideModal');
// debugger
//             modalContent.classList.add('hideModal');
            }
        }
    };

    openModal() {
        const modal = document.getElementById('myModal');
        const modalContent = document.getElementsByClassName('modal-content');
        const btn = document.getElementById('myBtn');
        
        btn.onclick = function() {
    // debugger
            modal.style.display= "block";
            // modalContent.classList.add('showModal');
            // modalContent.classList.remove('hideModal');
        }
        
    //     closeBttn.onclick = function() {
    //  debugger
    //         modalContent.classList.add('hideModal');
    //     }
        
    //     window.onclick = function(event) {
    // debugger
    //         if (event.target == modal) {
    //         modalContent.classList.add('hideModal');
    //         }
    //     }
    }


}

export default Modal;