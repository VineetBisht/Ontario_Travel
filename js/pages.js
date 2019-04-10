/*
    $("comments").innerHTML="<div id=\"comment\"><h4>Name:</h4><h5>Time</h5><img src=\"images/cavatar.png\"><p>Comment</p></div>";
*/
var comm = document.getElementById("comm")
var $ = function (id) {
    return document.getElementById(id)
}
var emptyC = false;

window.onclick = function (event) {
    if (event.target === comm) {
        let text = $("text").value;
        text=text.trim();
        if (!text || 0 === text.length){
            $("c_e").innerHTML = "<p>Comment cannot be empty<p>"
            return
        }
        $("c_e").innerHTML = "";
        console.log(!text || 0 === text.length );
        if (emptyC === true)
            $("comments").innerHTML = "<div id=\"comment\"><h4>Name:</h4><h5>" + new Date().toLocaleTimeString() + "</h5><img src=\"images/cavatar.png\"><p>" + text + "</p></div>"
        else
            $("comments").innerHTML += "<div id=\"comment\"><h4>Name:</h4><h5>" + new Date().toLocaleTimeString() + "</h5><img src=\"images/cavatar.png\"><p>" + text + "</p></div>"
        emptyC = false;
    }
}

window.onload = function () {
    let com = document.querySelector("#comments")
    if (com.childNodes.length == 0) {
        $("comments").innerHTML = "<div id=\"emptyC\"><p>😀 Why don't you be the first to comment</p></div>"
        emptyC = true;
    }
}


