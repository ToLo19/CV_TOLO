const idTag = (id) => {
    return document.getElementById(id).value;
}
/// content Tag
const userInfo = document.getElementById('userInformation')


class UserInfo {
    constructor(firstName,lastName, number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.number = number;
    }
    createUserInformation() {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.innerHTML = this.firstName;
        li.innerHTML = this.lastName;
        li.innerHTML = this.number;
        ul.appendChild(li);
        userInfo.appendChild(ul);
    }
}

const takeUserInformation = () => {
    const firstName = idTag('firstName');
    const lastName = idTag('lastName');
    const number = idTag('number');
    const userInfo = new UserInfo(firstName, lastName, number);
    return userInfo.createUserInformation();

}

