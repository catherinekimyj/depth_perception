class Form {
    constructor() {
        this.submitInput();
        this.greeting();
        this.animateGreeting();
    }

    greeting() {
        const date = new Date();
        const hour = date.getHours();
        const greetingEle = document.getElementById('user-greeting');

        if(hour > 4 && hour < 12) {
            return greetingEle.innerHTML = "Good morning";
        } else if (hour > 11 && hour < 18) {
            return greetingEle.innerHTML = "Good afternoon";
        } else {
            return greetingEle.innerHTML = "Good evening";
        }
    };
    
    submitInput() {
        const nameBtn = document.getElementById('user-button');
        const nameInput = document.getElementById('name-input');
        const thoughtInput = document.getElementById('thought-input');
        const modal = document.getElementById('myModal');
        const span = document.getElementsByClassName("close")[0];
        const obj = {};
        
        nameBtn.onclick = (e) => {
            e.preventDefault();
            let name = nameInput.value;
            let thought = thoughtInput.value;
            obj["name"] = name;
            obj["thought"] = thought;
            debugger
            console.log(obj);
            document.getElementById("user-output").innerHTML = obj["name"] + " " + obj["thought"];
            modal.style.display = "none";
            // console.log(obj);
        }
    }
    
    animateGreeting() {
// debugger
        var textWrapper = document.querySelector('.ml16');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
        .add({
            targets: '.ml16 .letter',
            translateY: [-100,0],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 250 * i
        }).add({
            targets: '.ml16',
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    }
}

export default Form;