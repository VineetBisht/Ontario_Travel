var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

var $ = function (id) {
    return document.getElementById(id);
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

window.onload = function () {
    $("register").onclick = regisTer;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2) {
        modal.style.display = "none";
    }
}

