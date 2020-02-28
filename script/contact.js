var formInputs = document.querySelectorAll("input");
var socialIcons = document.querySelector("#social-media-container")
var formInputArr = [];
for (var i = 0; i < formInputs.length; i++) {
    formInputArr.push(formInputs[i])
}
formInputArr.push(document.querySelector("textarea"));
formInputArr.push(document.querySelector(".form-button"));
var formTitleArr = document.querySelectorAll(".contact-title")
var socialMediaArr = document.querySelectorAll(".social-media-link");
var contactInfo = document.querySelector(".info-container");
console.log(contactInfo);

function initElementsSpecific () {
    var i = 0;
    for (var j = 0; j < formTitleArr.length; j++) {
        formTitleArr[j].classList.add("appear");
    }
    var inputInterval = setInterval(function(){
        formInputArr[i].classList.add("appear");
        i++;
        if (i == formInputArr.length) {
            clearInterval(inputInterval);
        }
    }, 200);
    var k = 0;
    var socialInterval = setInterval(function(){
        socialMediaArr[k].classList.add("appear");
        k++;
        if (k == socialMediaArr.length) {
            clearInterval(socialInterval);
        }
    }, 200);
    socialIcons.classList.add("appear")
    contactInfo.classList.add("appear");
}

setTimeout(initElementsSpecific, 100);