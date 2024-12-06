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

function login(username, password) {
    let data = usernames.filter((element, i) => element == username);
    if (data.length == 0) {
        console.log("User Not Found, Please Signup");
    }
    else {
        if (password == "Emp@123") {
            console.log("Login Successfull...");
        }
        else {
            console.log("Wrong Password...");
        }
    }
}
login("Mohit","Emp@123")
login("Sohit","amp@123")
login("Jeet","Emp@123")
login("Jiya","amp@123")
login("Jiya","Emp@123")
