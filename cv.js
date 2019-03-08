const idTag = (id) => {
    return document.getElementById(id).value
}
/// content Tag
const userInfo= document.getElementById('userInformation')


class UserInfo {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    createUserInformation() {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.innerHTML = this.firstName;
        ul.appendChild(li);
        userInfo.appendChild(ul)
    
    }
}

const takeUserInformation = () => {
    
    const firstName = idTag('firstName');
    const lastName = idTag('lastName');
    const userInfo = new UserInfo(firstName,lastName);
    console.log(firstName)
    return userInfo.createUserInformation()

}

