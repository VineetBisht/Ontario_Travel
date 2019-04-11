/*
    $("comments").innerHTML="<div id=\"comment\"><h4>Name:</h4><h5>Time</h5><img src=\"images/cavatar.png\"><p>Comment</p></div>";
*/
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var users = [{
    "fname": "Vineet",
    "lname": "Singh",
    "email": "vineetbisht2013@gmail.com",
    "pass": "root"
},
{
    "fname": "user",
    "lname": "temp",
    "email": "root",
    "pass": "toor"
}
];
var comm = document.getElementById("comm")
var $ = function (id) {
    return document.getElementById(id)
}
var emptyC = false;

function getBool(pre) {
    return localStorage.getItem(pre) == "true" ? true : false;
}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

var regisTer = function () {
    var psw1 = $("psw1").value;
    var psw2 = $("psw2").value;

    var isValid = true;

    if ($("email").value == "") {
        $("email_error").innerHTML =
            "This field is required.";
        isValid = false;
    }
    else { $("email_error").innerHTML = ""; }

    if ($("psw1").value == "") {
        $("psw1_error").innerHTML =
            "This field is required.";
        isValid = false;
    }
    else { $("psw1_error").innerHTML = ""; }

    if (psw1 !== psw2) {
        $("psw2_error").innerHTML =
            "Passwords didn't match";
        isValid = false;
    }
    else { $("psw2_error").innerHTML = ""; }

    if ($("first_name").value == "") {
        $("first_name_error").innerHTML =
            "This field is required.";
        isValid = false;
    }
    else { $("first_name_error").innerHTML = ""; }

    if ($("last_name").value == "") {
        $("last_name_error").innerHTML =
            "This field is required.";
        isValid = false;
    }
    else { $("last_name_error").innerHTML = ""; }

    if (isValid) {
        // submit the form if all entries are valid
        $("signup_form").submit();
    }
}

function login() {
    let temp_u = $("uname").value;
    let temp_psw = $("psw").value;
    for (let e of users) {
        if (e.email == temp_u && e.pass == temp_psw) {
            sessionStorage.setItem("verified", "true");
            sessionStorage.setItem("uname", e.fname);
            console.log(e.email + "+" + temp_u);
            break;
        }
    };
    if (sessionStorage.getItem("verified") == "true") {
        $("success").innerHTML = "Successfully Verified";
        $("logButton").innerHTML = "<h4>Hello, " + sessionStorage.getItem("uname") + "</h4>";
        $("logButton").innerHTML += "<button id=\"out\" onclick=\"logout();\">Logout</button>";
    }
    else {
        $("success").innerHTML = "Wrong Credentials";
    }
}

function logout() {
    sessionStorage.clear();
    location.reload();
}

window.onclick = function (event) {
    if (event.target === comm) {
        let text = $("text").value;
        text=text.trim();
        if (!text || 0 === text.length){
            $("c_e").innerHTML = "<p>Comment cannot be empty<p>";
            return;
        }
        $("c_e").innerHTML = "";
        if (emptyC === true)
            $("comments").innerHTML = "<div id=\"comment\"><h4>"+sessionStorage.getItem("uname")+":</h4><h5>" + new Date().toLocaleTimeString() + "</h5><img src=\"images/cavatar.png\"><p>" + text + "</p></div>";
        else
            $("comments").innerHTML += "<div id=\"comment\"><h4>"+sessionStorage.getItem("uname")+":</h4><h5>" + new Date().toLocaleTimeString() + "</h5><img src=\"images/cavatar.png\"><p>" + text + "</p></div>";
        emptyC = false;
    }
    if (event.target == modal || event.target == modal2) {
        modal.style.display = "none";
    }
}

window.onload = function () {
   $("register").onclick = regisTer;

    console.log(sessionStorage.getItem("verified") == "true");

    if (sessionStorage.getItem("verified") == "true") {
        $("logButton").innerHTML = "<h4>Hello, " + sessionStorage.getItem("uname") + "</h4>";
        $("logButton").innerHTML += "<button id=\"out\" onclick=\"logout();\">Logout</button>";
    }

    let com = document.querySelector("#comments");
    
    if (com.childNodes.length == 0) {
        $("comments").innerHTML = "<div id=\"emptyC\"><p>😀 Why don't you be the first to comment</p></div>";
        emptyC = true;
    }
   
   
}


