class Timer {
    constructor() {
        this.timer = new Timer();
        this.startTimer(duration, canvas);
        this.setTime();
    }

    startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            canvas.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    };

    setTime() {
        let fiveMin = 60 * 5;
        display = document.getDocumentById('time');
        startTimer(fiveMin, display);
    }
}