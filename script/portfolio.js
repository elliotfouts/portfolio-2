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