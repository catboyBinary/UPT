import data from './members.json' assert { type: 'json' };
var index = -1;
var results = [];
const words = ["SMASH","PASS"];
fetch_next();


//im sorry for this tomfoolery idk its just a nasty bug that i cannot fix almright
document.getElementById("smash").addEventListener("click", function () {
    results.push({nickname:document.getElementById("nickname").textContent, result:words[this]});
    fetch_next();
}.bind(0))
document.getElementById("pass").addEventListener("click", function () {
    results.push({nickname:document.getElementById("nickname").textContent, result:words[this]});
    fetch_next();
}.bind(1))

function fetch_next() {
    index += 1;
    if (index >= data.members.length) {
        end();
        return;
    }
    document.getElementById("nickname").textContent = data.members[index].nickname;
    document.getElementById("names").textContent = data.members[index].name;
    document.getElementById("img").src = "skins/"+data.members[index].nickname+".png";
}

function end() {
    console.log("end")
    const resulttag = document.getElementById("results")
    for (const member of results) {
        var line = document.createElement('i')
        line.textContent = member.nickname+": "+member.result;
        resulttag.appendChild(line)
        resulttag.appendChild(document.createElement('br'))
    }
    document.getElementById("process").remove();
    document.getElementById("buttons").remove();
}