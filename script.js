
function shfaqOren() {
    var d = new Date()
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
document.getElementById("ora").innerHTML = hour + ":" + min + ":" + sec + " " +"PM";

}

shfaqOren();

setInterval(shfaqOren, 1000);