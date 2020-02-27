
// typewriter animation 

var titleElement = document.querySelector("#title");
var subtitleElement = document.querySelector("#subtitle");
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
