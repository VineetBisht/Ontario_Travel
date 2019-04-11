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

var $ = function (id) {
    return document.getElementById(id);
};

function getBool(pre) {
    return localStorage.getItem(pre) == "true" ? true : false;
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
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
        if (e.email == temp_u && e.pass == temp_psw){
                sessionStorage.setItem("verified","true");
                sessionStorage.setItem("uname",e.fname);
                break;
            }
    };
    console.log(getBool(sessionStorage.getItem("verified")));
    if(sessionStorage.getItem('verified')){
    $("success").innerHTML="Successfully Verified";
    $("logButton").innerHTML="<h4>Hello "+sessionStorage.getItem("uname")+"</h4>";
    }else{
    $("success").innerHTML="Wrong Credentials";
    }
}

window.onload = function () {
    $("register").onclick = regisTer;
    if(getBool(sessionStorage.getItem("verified"))){
        $("logButton").innerHTML="<h4>Hello "+sessionStorage.getItem("uname")+"</h4>";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2) {
        modal.style.display = "none";
    }
}

