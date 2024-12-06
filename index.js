let usernames = ["Siya", "Tina", "Raj", "Sona", "Mohit"];
function signup(userName) {

    for (let i = 0; i < usernames.length; i++) {
        if (userName === usernames[i]) {
            return "User Already Regsistered, Please Login";
        }
    }
    usernames.push(userName);
    return "Signup Sucessfull, Please Login";

}
console.log(signup("Jiya"))
// console.log(usernames.join(" "))
console.log(signup("Mohit"))
console.log(signup("Ritu"))
console.log(signup("Ritu"))
console.log(signup("Reena"))
