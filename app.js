const diya = "🪔";
let localDiyasCount = 0;

function createDiyaList() {
    let li = document.createElement("li");
    li.innerText = diya;
    return li;
}

function addDiya() {
    localDiyasCount += 1;
    document.getElementById('diyaList').appendChild(createDiyaList());
}

// https://stackoverflow.com/questions/63906648/how-do-i-show-the-javascript-timer-in-my-code-in-an-html-div
function Timer() {
    document.getElementById("testTimer").innerHTML = 'Starting soon...';
    let counter = 10;
    let myTimer = setInterval(function () {
        document.getElementById("testTimer").innerHTML = counter;
        counter--;
        if (counter < 0) {
            clearInterval(myTimer);
            document.getElementById("testTimer").style.color = "red";
            document.getElementById("testTimer").innerHTML = 'Time Over';
            document.getElementById("diyaAction").disabled = true;
            document.getElementById("totalCount").innerHTML = 'Total ' + diya + ' count : ' + localDiyasCount;
            document.getElementById("customMessage").style.display = 'block';
            twitterTweet();
        }
    }, 1000);
}

function twitterTweet() {
    let a = document.createElement('a');
    let link = document.createTextNode("Tweet your score!");
    a.appendChild(link);
    a.title = "Tweet your score!";
    a.href = "https://twitter.com/intent/tweet?text=I just light up " + localDiyasCount + " 🪔 on https://main--magenta-mooncake-b45d1b.netlify.app go and try and see can you beat my score!";
    document.getElementById("customMessage").appendChild(a);
}
