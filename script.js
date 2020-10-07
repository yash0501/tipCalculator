console.log(document.querySelector("#submit"));
function caltulateTip() {
    var bill = document.getElementById("bill").value;
    var rating = document.getElementById("rating").value;
    var people = document.getElementById("people").value;
    var tip = (bill * rating) / people;
    console.log(tip);
    document.getElementById("display").innerHTML = tip;
}

document.getElementById("submit").addEventListener("click", caltulateTip);
