// entrance animation

var portfolioArr = document.querySelectorAll(".portfolio-item");

function initElementsSpecific() {
    var i = 0;
    var portfolioInterval = setInterval(() => {
        portfolioArr[i].classList.add("appear");
        i++;
        if (i == portfolioArr.length) {
            clearInterval(portfolioInterval)
        }
    }, 200);
    
}

setTimeout(initElementsSpecific, 100)

// card animation 

var container = document.querySelector(".container")

container.addEventListener("click", function (event) {
    for (var i = 0; i < portfolioArr.length; i++) {
        if (portfolioArr[i].classList.contains("active")){
            portfolioArr[i].classList.remove("active");
        }
        portfolioArr[i].innerHTML = "";
    }
    var target = event.target;
    target.classList.add("active");
    newTitle = document.createElement("h1");
    newTitle.innerText = target.getAttribute("data-title");
    newTitle.classList.add("card-title");
    newSubtitle = document.createElement("h2");
    newSubtitle.innerText = target.getAttribute("data-subtitle");
    newSubtitle.classList.add("card-subtitle");
    newDescription = document.createElement("p");
    newDescription.innerText = target.getAttribute("data-description");
    newDescription.classList.add("card-description");
    newLinkContainer = document.createElement("div");
    newLinkContainer.classList.add("card-link-container");
    newGitLink = document.createElement("a");
    newGitLink.innerText = "View Github";
    newGitLink.setAttribute("href", target.getAttribute("data-git-link"))
    newGitLink.classList.add("card-link")
    newLiveLink = document.createElement("a");
    newLiveLink.innerText = "View Live";
    newLiveLink.setAttribute("href", target.getAttribute("data-live-link"))
    newLiveLink.classList.add("card-link")
    newGitLink.setAttribute("target", "blank")
    newLiveLink.setAttribute("target", "blank")
    
    newLinkContainer.appendChild(newGitLink);
    newLinkContainer.appendChild(newLiveLink);

    event.target.appendChild(newTitle)
    event.target.appendChild(newSubtitle)
    event.target.appendChild(newDescription)
    event.target.appendChild(newLinkContainer)
});

