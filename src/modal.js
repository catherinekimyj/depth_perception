import Form from './form';

class Modal {
    constructor(canvas) {
debugger
        this.closeModal();
        this.openModal();
    }

    closeModal() {
        const modal = document.getElementById('myModal');
        const closeBttn = document.getElementById("close");

        closeBttn.onclick = function() {
debugger
            modal.classList.remove('showModal');
            modal.style.display = "none";
        }

        window.onclick = function(event) {
debugger
            if (event.target == modal) {
                modal.style.display = "none";
                // modal.classList.remove('showModal');
                // modal.classList.remove('showModal');
            }
        }
    };

    openModal() {
        const modal = document.getElementById('myModal');
        const btn = document.getElementById('myBtn');
        
        btn.onclick = function() {
    // debugger
            modal.style.display= "block";
            // modalContent.classList.add('showModal');
            // modal.classList.remove('showModal');
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