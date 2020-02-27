// hamburger animation

var hamburgerIcon = document.querySelector(".hamburger");
var menuElement = document.querySelector("menu");
var menuLinkArr = document.querySelectorAll(".menu-link");
var menuTitleArr = document.querySelectorAll(".menu-title");
var isOpenMenu = false;

console.log(menuLinkArr);

hamburgerIcon.addEventListener("click", function(){
    if (isOpenMenu == false) {
        menuElement.classList.remove("hidden");
        this.classList.add("open");
        isOpenMenu = true;
        menuElement.classList.add("active");
        var i = 0;
        var menuInterval = setInterval(function (){
            menuLinkArr[i].classList.add("active");
            i++;
            if (i == menuLinkArr.length) {
                clearInterval(menuInterval)
            }
        }, 100);
    } else {
        this.classList.remove("open");
        menuElement.classList.add("hidden");
        isOpenMenu = false;
        for (var i = 0; i < menuLinkArr.length; i++) {
            menuLinkArr[i].classList.remove("active");
            
        }
        setTimeout(function(){

            menuElement.classList.remove("active");
        }, 700)
    }
})

// appearing elements 
function initELements () {
    hamburgerIcon.classList.add("appear");
}

setTimeout(initELements, 100);

// menu transition animation 
var htmlLinkArray = ["about.html", "resume.pdf", "portfolio.html", "contact.html"]
menuElement.addEventListener("click", function(target) {
    for (var i = 0; i < menuLinkArr.length; i++) {
        if (event.target == menuLinkArr[i] || event.target == menuTitleArr[i]) {
            if (i != 1)
                menuLinkArr[i].classList.add("transition");
                hamburgerIcon.classList.add("hidden");
                var destination = htmlLinkArray[i];
                console.log(destination)
                setTimeout(function(){
                        window.location.replace(destination)
                    }, 1200);
            }
        }
})

function menuLink(i) {
    console.log("hello")
}


