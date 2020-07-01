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

            // variables for name and thought inputs //
            let name = nameInput.value;
            let thought = thoughtInput.value;
            obj["name"] = name;
            obj["thought"] = thought;
            let nameSplit = obj["name"].split(" ");
            let capitalizedArr = nameSplit.map((namePart) => 
                namePart.charAt(0).toUpperCase() + namePart.slice(1));
            let capitalized = capitalizedArr.join(" ");

            // meditation phrases and encouragements to be selected at random //
            // const encouragements = [] <<--- input phrases here, then uncomment
            // const encouragement = encouragements[Math.floor(Math.random() * items.length)];

            if (obj["name"] !== "") {
                document.getElementById("user-output-greet").innerHTML = "Welcome, " + capitalized;
                // this.animateInput();
            } else {
                document.getElementById("user-output-greet").innerHTML = "Hi, there.";
                // this.animateInput();
            }

            if (obj["thought"] !== "") {
                document.getElementById("user-output-words").innerHTML = obj["thought"];
            } else {
                document.getElementById("user-output-words").innerHTML = "Your goal is not to battle with the mind, but to witness the mind.";
                // document.getElementById("user-output-words").innerHTML = encouragement;

            }
            
            modal.style.display = "none";
            // console.log(obj);
        }
    }
    
    animateGreeting() {
        // debugger
        let textWrapper = document.querySelector('.ml16');
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