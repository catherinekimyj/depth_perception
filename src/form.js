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

        // span.onclick = (e) => {
        //     e.preventDefault();

        //     modal.style.opacity(0);
        // }
        
        nameBtn.onclick = (e) => {
            e.preventDefault();
            let userGreet = document.getElementById('user-output-greet');
            let userText = document.getElementById('user-output-words');
            userGreet.style.display === "none";
            userText.style.display === "none";

            // variables for name and thought inputs //
            let name = nameInput.value;
            let thought = thoughtInput.value;
            obj["name"] = name;
            obj["thought"] = thought;
            let nameSplit = obj["name"].split(" ");
            let capitalizedArr = nameSplit.map((namePart) => 
                namePart.charAt(0).toUpperCase() + namePart.slice(1));
            let capitalized = capitalizedArr.join(" ");

            function animateInputIn() {
                let userGreet = document.getElementById('user-output-greet');
                let userText = document.getElementById('user-output-words');
                // not using below anymore
                // let userGreetTime = userGreet.innerText.length;
                // let userTextTime = userText.innerText.length;
                // let combinedChars = userTextTime + userGreetTime;
                // let timed = 5000/combinedChars;
                userGreet.style.display === "inline-block";
                userText.style.display === "inline-block";
        debugger
                userGreet.innerHTML = userGreet.innerText.replace(/\S/g, "<span class='letters'>$&</span>");
                userText.innerHTML = userText.innerText.replace(/\S/g, "<span class='letters'>$&</span>");

                anime.timeline({ loop: false })
                .add({
                  targets: '.letters',
                  translateY: [100,0],
                  translateZ: 0,
                  opacity: [0,1],
                  easing: "easeOutExpo",
                  duration: 20000,
                  delay: (el, i) => 30
                })
            };

            let e1 = '"Your goal is not to battle with the mind, but to witness the mind." - Swami Muktananda';

            const encouragements = [
                '"Your goal is not to battle with the mind, but to witness the mind." - Swami Muktananda',
                '"To understand the immeasurable, the mind must be extraordinarily quiet, still. - Jiddu Krishnamurti"',
                '"We\'re all just walking each other home" - Ram Dass',
                '"The quieter you become, the more you can hear." - Ram Dass',
                '"You\'re problem is that you\'re too busy holding onto your unworthiness." - Ram Dass',
                '"Mindfulness practice means that we commit fully in each moment to be present; inviting ourselves to interface with this moment in full awareness, with the intention to embody as best we can an orientation of calmness, mindfulness, and equanimity right here and right now." - Jon Kabat-Zinn',
                '"Brilliant things happen in calm minds. Be calm. You\'re brilliant." - Headspace',
                '"Remember the blue sky. It may at times be obscured by clouds, but it is always there." - Andy Puddicombe',
                '"Distractions are everywhere. Notice what takes your attention, acknowledge it, then let it go." - Headspace',
                '"In the midst of movement and chaos, keep stillness inside of you." - Anonymous',
                '"Life is short. We can live it lost in thought or we can choose to be present as life unfolds around us." - Headspace',
            ];
            const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)];

            if (obj["name"] !== "") {
                document.getElementById("user-output-greet").innerHTML = "Welcome, " + capitalized;
                animateInputIn();
            } else {
                document.getElementById("user-output-greet").innerHTML = "Hi, there.";
                animateInputIn();
            }

            if (obj["thought"] !== "") {
                document.getElementById("user-output-words").innerHTML = obj["thought"];
                animateInputIn();
            } else {
                // document.getElementById("user-output-words").innerHTML = "Your goal is not to battle with the mind, but to witness the mind.";
                document.getElementById("user-output-words").innerHTML = encouragement;
                animateInputIn();

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