let hasVisted = localStorage.getItem("hasVisited");
let titleElement = document.querySelector("#title");
let subtitleElement = document.querySelector("#subtitle");
let container = document.querySelector(".container");
console.log(hasVisted);
if (hasVisted == null) {
    console.log("test");
    localStorage.setItem("hasVisited", "true");
} else if (hasVisted == "true") {
    titleElement.innerText = "Welcome Back!"
    subtitleElement.innerText = "If you would like more info, click the button below";
    let newButton = document.createElement("a");
    newButton.classList.add("learn-more-button");
    newButton.innerText = "Learn More"
    container.appendChild(newButton);
    newButton.classList.add("appear")
}
// typewriter animation 

var titleTextArr = titleElement.innerText.split("");
var subtitleTextArr = subtitleElement.innerText.split("");

// creates an array of letters and erases current text
var currentLetter, newSpan, i = 0;
titleElement.innerText = "";
subtitleElement.innerText = "";
setTimeout(function(){
    var titleInterval = setInterval(function(){
        currentLetter = titleTextArr[i];
        newSpan = document.createElement("span");
        newSpan.innerText = currentLetter;
        titleElement.appendChild(newSpan)
        i++;
        if (i == titleTextArr.length) {
            clearInterval(titleInterval)
            i =  0;
            var subtitleInterval = setInterval(function(){
                currentLetter = subtitleTextArr[i];
                newSpan = document.createElement("span");
                newSpan.innerText = currentLetter;
                subtitleElement.appendChild(newSpan)
                i++;
                if (i == subtitleTextArr.length) {
                    clearInterval(subtitleInterval)
                }
            }, 50)
        }
    }, 100);
}, 100);
