const byIdValue = (id) => {
    return document.getElementById(id).value;
}

class User {
    constructor (firstname, lastname, phone) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.arr = [this.firstname, this.lastname, this.phone];
    } 

    // Создает tag и вписывает в него значения 
    createTag () {
        let firstname = document.getElementById('firstname');
        let lastname = document.getElementById('lastname');
        let phone = document.getElementById('phone');
        let email = document.getElementById('email');
        let facebook = document.getElementById('facebook');
        let license = document.getElementById('license');

        let phoneIcon = document.getElementById('phoneIcon');
        let emailIcon = document.getElementById('emailIcon');
        let facebookIcon = document.getElementById('facebookIcon');
        let licenseIcon = document.getElementById('licenseIcon');
        let header = document.getElementById('header');

        let create = document.createElement('p');
        create.innerHTML = phone.value;
        phoneIcon.appendChild(create);

        let create2 = document.createElement('p');
        create2.innerHTML = email.value;
        emailIcon.appendChild(create2);

        let create3 = document.createElement('p');
        create3.innerHTML = facebook.value;
        facebookIcon.appendChild(create3);

        let create4 = document.createElement('h1');
        create4.innerHTML = firstname.value;
        header.appendChild(create4);
        let create5 = document.createElement('h1');
        create5.innerHTML = lastname.value;
        header.appendChild(create5);

        // MALE or FEMALE
        if(male.checked == true) {           
            let photo = document.getElementById('photo');
            photo.src = 'img/male.jpg';
        } else if (female.checked == true) {
            let photo = document.getElementById('photo');
            photo.src = 'img/female.jpg';
        }

        // LICENSE YES or NO
        if(license.checked == true) {
            let create = document.createElement('p');
            create.innerHTML = 'Yes';
            licenseIcon.appendChild(create);
        } else if (license.checked == false){
            let create = document.createElement('p');
            create.innerHTML = 'No';
            licenseIcon.appendChild(create);
        }



        // this.arr.map(value => {
        //     let p = document.createElement('p');
        //     li.innerHTML = value;
        //     ul.appendChild(li);
        // })
        // phoneIcon.appendChild(ul);
    }
}

// Берет значения input и вставляет их в constructer, затем создает tag
let createNewUser = () => {
    let firstnameValue = document.getElementById('firstname').value;
    let lastnameValue = document.getElementById('lastname').value;
    let phoneValue = document.getElementById('phone').value;
    let section2 = document.querySelector('#section2')
    let newUser = new User(firstnameValue, lastnameValue, phoneValue);
    if (firstnameValue && lastnameValue && phoneValue) {
        newUser.createTag();
        section2.style = 'display: block';
    } else {
        alert('Заполнте все поля!');
    }
}

// Создает еще один Input 
let createMoreLanguages = () => {
    let languageDiv = document.getElementById('languageDiv');
    let create = document.createElement('input');
    create.setAttribute('class', 'language');
    create.setAttribute('placeholder', 'Language(s)')
    languageDiv.appendChild(create);
}

let createMoreSkills = () => {
    let skillsDiv = document.getElementById('skillsDiv');
    let create = document.createElement('input');
    let create2 = document.createElement('input');
    create2.setAttribute('type', 'range');
    create2.setAttribute('min', '0');
    create2.setAttribute('max', '100');
    create2.setAttribute('value', '0');
    create.setAttribute('class', 'skills');
    create.setAttribute('placeholder', 'Skill(s)');
    skillsDiv.appendChild(create);
    skillsDiv.appendChild(create2);
}

// Создает несколько связанных input-ов
let createMoreWork = () => {
    let workDiv = document.getElementById('workDiv');
    let create = document.createElement('input');
    let create2 = document.createElement('input');
    let create3 = document.createElement('input');
    let div = document.createElement('div');
    create.setAttribute('class', 'work');
    create2.setAttribute('class', 'since');
    create3.setAttribute('class', 'untill');
    create.setAttribute('placeholder', 'Work(s) at')
    create2.setAttribute('placeholder', 'Since')
    create3.setAttribute('placeholder', 'Untill')
    workDiv.appendChild(create);
    workDiv.appendChild(div);
    div.appendChild(create2);
    div.appendChild(create3);
}

// Выводит значение range
let showSkillsRange = () => {
    let div = document.getElementById('skillsDiv');
    let range = document.getElementsByClassName('skillsRange');
    let create = document.createElement('p');
    div.appendChild(create);
    create.innerHTML = range.value;
}