// typewriter animation 

var titleElement = document.querySelector(".title");
var titleTextArr = titleElement.innerText.split("")
var newSpan, i = 0, currentLetter; 
titleElement.innerText = "";
setTimeout(function(){
    var titleInterval = setInterval(function(){
        currentLetter = titleTextArr[i];
        newSpan = document.createElement("span");
        newSpan.innerText = currentLetter;
        titleElement.appendChild(newSpan)
        i++;
        if (i == titleTextArr.length) {
            clearInterval(titleInterval)
            initELementsSpecific()
        }
    }, 150);
}, 100);


function initELementsSpecific() {

}