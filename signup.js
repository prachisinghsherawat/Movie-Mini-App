document.querySelector("#form").addEventListener("submit",signUp);

    var arr = JSON.parse(localStorage.getItem("signData")) || [];
    function signUp(event){
        event.preventDefault();

        var name = document.querySelector("#name").value;
        var number = document.querySelector("#number").value;
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;

        var signObj = {
            name : name,
            number : number,
            email : email,
            password : password,
        };

        arr.push(signObj);
        localStorage.setItem("signData",JSON.stringify(arr));
        alert("your account is successfully created !")

    }
