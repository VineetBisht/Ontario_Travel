/*--------------------------------Variable declaration----------------------------------*/
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var comm = document.getElementById("comm");
var navbar = document.getElementById("mainnav");
var search = document.getElementById("inpt_search");
var sticky = navbar.offsetTop;
var emptyC = false;

var $ = function (id) {
    return document.getElementById(id)
}

var users = [{      // Hard-Coded login info.
    "fname": "Vineet",
    "lname": "Singh",
    "email": "vineetbisht2013@gmail.com",
    "pass": "admin"
}, {
    "fname": "Shravani",
    "lname": "temp",
    "email": "root",
    "pass": "admin"
}, {
    "fname": "Vinisha",
    "lname": "temp",
    "email": "root",
    "pass": "admin"
}, {
    "fname": "Samuel",
    "lname": "temp",
    "email": "root",
    "pass": "admin"
}, {
    "fname": "Guest",
    "lname": "temp",
    "email": "root",
    "pass": "Guest"
}
];
/*--------------------------------------------------------------------------------------*/
/*--------------------------------Functions declaration----------------------------------*/

var regisTer = function () {        // Form validation check function
    var psw1 = $("psw1").value;
    var psw2 = $("psw2").value;

    var isValid = true;

    if ($("email").value == "") {
        $("email_error").innerHTML =
            "This field is required.";
        isValid = false;
    }
    else { $("email_error").innerHTML = ""; isValid = true; }

    if ($("psw1").value == "") {
        $("psw1_error").innerHTML =
            "This field is required.";
        isValid = false;
    }
    else { $("psw1_error").innerHTML = ""; isValid = true; }

    if (psw1 !== psw2) {
        $("psw2_error").innerHTML =
            "Passwords didn't match";
        isValid = false;
    }
    else { $("psw2_error").innerHTML = ""; isValid = true; }

    if ($("first_name").value == "") {
        $("first_name_error").innerHTML =
            "This field is required.";
        isValid = false;
    }
    else { $("first_name_error").innerHTML = ""; isValid = true; }

    if ($("last_name").value == "") {
        $("last_name_error").innerHTML =
            "This field is required.";
        isValid = false;
    }
    else { $("last_name_error").innerHTML = ""; isValid = true; }
    console.log('here');
    if (isValid) {
        document.getElementById("success2").innerHTML = "Paragraph changed!";
    }

}

function login() {              // Function to check login
    let temp_u = $("uname").value;
    let temp_psw = $("psw").value;
    for (let e of users) {
        if (e.fname.toUpperCase() == temp_u.toUpperCase() && e.pass.toUpperCase() == temp_psw.toUpperCase()) {
            sessionStorage.setItem("verified", "true");
            sessionStorage.setItem("uname", e.fname);
            break;
        }
    };
    if (sessionStorage.getItem("verified") == "true") {
        $("success").innerHTML = "Successfully Verified";
        $("logButton").innerHTML = "<h4>Hello, " + sessionStorage.getItem("uname") + "</h4>";
        $("logButton").innerHTML += "<button id=\"out\" onclick=\"logout();\">Logout</button></>";
    }
    else {
        $("success").innerHTML = "Wrong Credentials";
    }
}

function logout() {             // logout just clears the sessionStorage variables
    var sure = confirm("Are you sure?");
    if (sure == true) {
        sessionStorage.clear();
        location.reload();
    }
}

window.onclick = function (event) { // onclick events

    if (event.target === comm) {
        let text = $("text").value;
        text = text.trim();

        if (sessionStorage.getItem("uname") == null) {
            alert("You must login first");
            return false;
        }

        if (!text || 0 === text.length) {
            $("c_e").innerHTML = "<p>Comment cannot be empty<p>";
            return false;
        }
        $("c_e").innerHTML = "";
        if (emptyC === true)
            $("comments").innerHTML = "<div id=\"comment\"><h4>" + sessionStorage.getItem("uname") + ":</h4><h5>" + new Date().toLocaleTimeString() + "</h5><img src=\"images/cavatar.png\"><p>" + text + "</p></div>";
        else
            $("comments").innerHTML += "<div id=\"comment\"><h4>" + sessionStorage.getItem("uname") + ":</h4><h5>" + new Date().toLocaleTimeString() + "</h5><img src=\"images/cavatar.png\"><p>" + text + "</p></div>";
        emptyC = false;
    } else if (event.target == modal || event.target == modal2) {
        modal.style.display = "none";
    }
}

window.onload = function () {       // onload events
    $("register").onclick = regisTer;

    let com = document.querySelector("#comments");

    if (com.childNodes.length == 0) {
        $("comments").innerHTML = "<div id=\"emptyC\"><p>😀 Why don't you be the first to comment</p></div>";
        emptyC = true;
    }
}

function stick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function onBlur() {
    document.getElementById("inpt_search").parentNode.classList.remove("active");
}


function onFocus() {
    document.getElementById("inpt_search").parentNode.classList.add("active");
}

const searchStates = async searchText =>{
    const res= await fetch('data/data.json');
    const states = await res.json();

    let matches = states.filter(state => {
        const regex = new RegExp('^${searchText}','gi');
        return state.name.match(regex);
    });
    console.log(matches);
}

search.addEventListener('input', ()=>searchStates(search.value));


window.onscroll = function () { stick() };

document.onreadystatechange = function (e) {
    if (document.readyState === 'complete') {
        //dom is ready, window.onload fires later
        if (sessionStorage.getItem("verified") == "true") {
            $("logButton").innerHTML = "<h4>Hello, " + sessionStorage.getItem("uname") + "</h4>";
            $("logButton").innerHTML += "<button id=\"out\" onclick=\"logout();\">Logout</button>";
        }
    }


};


