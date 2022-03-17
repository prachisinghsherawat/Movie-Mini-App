var arr = JSON.parse(localStorage.getItem("signData")) || [];

document.querySelector("#submit").addEventListener("submit", login)
function login() {
        var useremail = document.getElementById("email").value;
        var userpassword = document.getElementById("password").value;


    for(var i in arr) {
        if (arr[i].email == useremail && arr[i].password == userpassword) {
            window.location.href = "home.html";
            alert("Login successful");
            break;
        }
        else {
            alert("invalid Credentials");
        }
    }


}