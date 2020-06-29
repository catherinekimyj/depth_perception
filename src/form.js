class Form {
    constructor() {
        this.submitInput();

    }
    
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
}

export default Form;