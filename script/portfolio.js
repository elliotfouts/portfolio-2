// entrance animation

var cardArr = document.querySelectorAll(".card");

function initElementsSpecific() {
    var i = 0;
    var cardInterval = setInterval(() => {
        cardArr[i].classList.add("appear");
        i++;
        if (i == cardArr.length) {
            clearInterval(cardInterval)
        }
    }, 200);
    
}

setTimeout(initElementsSpecific, 100)

// card animation 

var container = document.querySelector(".container")

container.addEventListener("click", function (event) {
    if (event.target != document.querySelector(".container")) {
        for (var i = 0; i < cardArr.length; i++) {
            if (cardArr[i].classList.contains("active")){
                cardArr[i].classList.remove("active");
                cardArr[i].innerHTML = "";
            }
        }
        var target = event.target;
        console.log(target)
        target.classList.add("active");
        newTitle = document.createElement("h1");
        newTitle.innerText = target.getAttribute("data-title");
        newTitle.classList.add("card-title");
        newDescription = document.createElement("p");
        newDescription.innerText = target.getAttribute("data-description");
        newDescription.classList.add("card-description");
        newLinkContainer = document.createElement("div");
        newLinkContainer.classList.add("card-button-container");
        newGitLink = document.createElement("a");
        newGitLink.innerText = "View Code";
        newGitLink.setAttribute("href", target.getAttribute("data-git-link"))
        newGitLink.classList.add("card-button")
        newLiveLink = document.createElement("a");
        newLiveLink.innerText = "View Live";
        newLiveLink.setAttribute("href", target.getAttribute("data-live-link"))
        newLiveLink.classList.add("card-button")
        newGitLink.setAttribute("target", "blank")
        newLiveLink.setAttribute("target", "blank")
        newLinkContainer.appendChild(newLiveLink);
        newLinkContainer.appendChild(newGitLink);
        newContentContainer = document.createElement("div");
        newContentContainer.classList.add("card-content")
        newContentContainer.appendChild(newTitle)
        newContentContainer.appendChild(newDescription)
        event.target.appendChild(newContentContainer)
        event.target.appendChild(newLinkContainer)
    }
});

