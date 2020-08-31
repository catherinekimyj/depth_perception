class Animation {
    constructor() {
        this.animate();

        let clock = document.getElementById('audio-current-time');
        let player = document.getElementById('player');
    }

    animate() {
        anime({
            targets: '.audio-current-time',
            translateY: [
                { value: -300, duration: 200 },
                { value: 0, duration: 2000 }
            ],
        })
    }

    endAnimate() {
        anime({
            targets: '.audio-current-time',
            translateY: [
                { value: 0, duration: 2000 },
                { value: -300, duration: 200 }
            ],
        })
    }
}

export default Animation;