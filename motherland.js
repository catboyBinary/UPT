import data from './members.json' assert { type: 'json' };
var index = -1;
var results = "";
const words = ["SMASH","PASS"];
fetch_next();

document.getElementById("smash").addEventListener("click", function () {
    results += document.getElementById("nickname").textContent + ": " + words[this] + '\n';
    fetch_next();
}.bind(0)
)

document.getElementById("pass").addEventListener("click", function () {
    results += document.getElementById("nickname").textContent + ": " + words[this] + '\n';
    fetch_next();
}.bind(1)
)

function fetch_next() {
    index += 1;
    document.getElementById("nickname").textContent = data.members[index].nickname;
    document.getElementById("names").textContent = data.members[index].name;
    document.getElementById("img").src = data.members[index].skinurl;
}