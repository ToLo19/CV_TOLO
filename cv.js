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
        let ul = document.createElement('ul');
        let template = document.getElementById('template');
        this.arr.map(value => {
            let li = document.createElement('li');
            li.innerHTML = value;
            ul.appendChild(li);
        })
        template.appendChild(ul);
        
    }
}

// Берет значения input и вставляет их в constructer, затем создает tag
let createNewUser = () => {
    let firstnameValue = document.getElementById('firstname').value;
    let lastnameValue = document.getElementById('lastname').value;
    let phoneValue = document.getElementById('phone').value;
    let newUser = new User(firstnameValue, lastnameValue, phoneValue);
    if (firstnameValue && lastnameValue && phoneValue) {
        newUser.createTag();
    } else {
        alert('Заполнте все поля!');
    }
}