let createInput = () => {
    let divLang = document.getElementById('divLang');
    let input = document.createElement('input');
    input.setAttribute('class', 'language');
    input.setAttribute('placeholder', 'One more language');
    divLang.appendChild(input);
}

class User {
    constructor(FirstName, LastName) {
        this.firstname = FirstName;
        this.lastname = LastName;
    }
  
    confirm () {
        let langValue = document.getElementById('firstname').value;
        let createP = document.createElement('p');
        createP.innerHTML = langValue;
        CVstyle.appendChild(createP);
    }

}
let user = new User('Diego', 'Costa');