function setTitleDateAnimation() {
    if (navSrc.endsWith("orange.png")) {
        document.getElementById("title").innerHTML = "A Clockwork Orange"
        document.getElementById("date").innerHTML = "March 10, 7:00PM"

        document.getElementById("orangeDisplay").style.display = "block"
        document.getElementById("shiningDisplay").style.display = "none"
        document.getElementById("strangeloveDisplay").style.display = "none"
        document.getElementById("lolitaDisplay").style.display = "none"
        document.getElementById("spaceDisplay").style.display = "none"

    } else if (navSrc.endsWith("hal.png")) {
        document.getElementById("title").innerHTML = "2001: A Space Odyssey"
        document.getElementById("date").innerHTML = "March 11, 7:00PM"

        document.getElementById("orangeDisplay").style.display = "none"
        document.getElementById("shiningDisplay").style.display = "none"
        document.getElementById("strangeloveDisplay").style.display = "none"
        document.getElementById("lolitaDisplay").style.display = "none"
        document.getElementById("spaceDisplay").style.display = "block"

    } else if (navSrc.endsWith("wall.png")) {
        document.getElementById("title").innerHTML = "The Shining"
        document.getElementById("date").innerHTML = "March 12, 7:00PM"

        document.getElementById("orangeDisplay").style.display = "none"
        document.getElementById("shiningDisplay").style.display = "block"
        document.getElementById("strangeloveDisplay").style.display = "none"
        document.getElementById("lolitaDisplay").style.display = "none"
        document.getElementById("spaceDisplay").style.display = "none"

    } else if (navSrc.endsWith("pentagon.png")) {
        document.getElementById("title").innerHTML = "Dr. Strangelove"
        document.getElementById("date").innerHTML = "March 13, 7:00PM"

        document.getElementById("orangeDisplay").style.display = "none"
        document.getElementById("shiningDisplay").style.display = "none"
        document.getElementById("strangeloveDisplay").style.display = "block"
        document.getElementById("lolitaDisplay").style.display = "none"
        document.getElementById("spaceDisplay").style.display = "none"

    } else if (navSrc.endsWith("loli.png")) {
        document.getElementById("title").innerHTML = "Lolita"
        document.getElementById("date").innerHTML = "March 14, 7:00PM"

        document.getElementById("orangeDisplay").style.display = "none"
        document.getElementById("shiningDisplay").style.display = "none"
        document.getElementById("strangeloveDisplay").style.display = "none"
        document.getElementById("lolitaDisplay").style.display = "block"
        document.getElementById("spaceDisplay").style.display = "none"

    }
}

function changeImage1() {
    navSrc = document.getElementById("b-1").src
    lastTitle = document.getElementById("title").innerHTML

    setTitleDateAnimation()
    setNav("b-1", lastTitle)
}

function changeImage2() {
    navSrc = document.getElementById("b-2").src
    lastTitle = document.getElementById("title").innerHTML


    setTitleDateAnimation()
    setNav("b-2", lastTitle)
}

function changeImage3() {
    navSrc = document.getElementById("b-3").src
    lastTitle = document.getElementById("title").innerHTML

    setTitleDateAnimation()
    setNav("b-3", lastTitle)
}

function changeImage4() {
    navSrc = document.getElementById("b-4").src
    lastTitle = document.getElementById("title").innerHTML

    setTitleDateAnimation()
    setNav("b-4", lastTitle)
}

function setNav(whatToSet, lastTitle) {
    if (lastTitle == "A Clockwork Orange") {
        document.getElementById(whatToSet).src = "images/orange.png"
    } else if (lastTitle == "2001: A Space Odyssey") {
        document.getElementById(whatToSet).src = "images/hal.png"
    } else if (lastTitle == "The Shining") {
        document.getElementById(whatToSet).src = "images/wall.png"
    } else if (lastTitle == "Dr. Strangelove") {
        document.getElementById(whatToSet).src = "images/pentagon.png"
    } else if (lastTitle == "Lolita") {
        document.getElementById(whatToSet).src = "images/loli.png"
    }

}
