console.log("page loaded...");

var newName = "John Doe"
function changeName() {
    document.querySelector(".card-body h1").innerText = newName;
}
//How do I make this reactive to an increase in connections.
var gone = 2;
function disappear() {
    gone--;
    document.querySelector("#conReq").innerText = gone;
    var removal = document.querySelector(".card-list-item");
    removal.remove();
}

var here = 500;
function reappear() {
    here++;
    document.querySelector("#yourCon").innerText = here;
    var seeya = document.querySelector(".card-list-item");
    seeya.remove();
    gone--;
    document.querySelector("#conReq").innerText = gone;
}