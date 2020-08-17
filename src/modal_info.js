class ModalInfo {
    constructor(canvas) {
        this.closeModal();
        this.openModal();
    }

    closeModal() {
        const infoModal = document.getElementById('myInfoModal');
        const infoCloseBttn = document.getElementById("close-info");

        infoCloseBttn.onclick = function() {
            infoModal.classList.remove('showModal');
            infoModal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == infoModal) {
                infoModal.style.display = "none";
            }
        }
    };

    openModal() {
        const infoModal = document.getElementById('myInfoModal');
        const infoBtn = document.getElementById('info-button');
        const infoButton = document.getElementById('myInformation');

        infoButton.onclick = function() {
            infoModal.style.display = "block";
        }
        
        infoBtn.onclick = function() {
            infoModal.style.display= "block";
    }
  }
}

export default ModalInfo;