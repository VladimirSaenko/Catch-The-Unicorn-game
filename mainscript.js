
"use strict";

const box = document.getElementById("box");
const unicorncursor = document.getElementById("cursor");
const count = document.getElementById("count");
const line = document.getElementById("line");
let score = 0;
let coord1 = getRandomInt(50, 565);
let coord2 = getRandomInt(50, 565);
let coord3 = getRandomInt(50, 565);

unicorncursor.style.left = coord1 + 'px';
unicorncursor.style.top = coord2 + 'px';
unicorncursor.style.right = coord3 + 'px';
line.style.left = coord1 + 'px';
line.style.top = coord2 + 'px';
line.style.right = coord3 + 'px';

unicorncursor.addEventListener('mousemove', () => {
    coord1 = getRandomInt(50, 565);
    coord2 = getRandomInt(50, 565);
    coord3 = getRandomInt(50, 565);
    unicorncursor.style.left = coord1 + 'px';
    unicorncursor.style.top = coord2 + 'px';
    unicorncursor.style.right = coord3 + 'px';
    line.style.left = coord1 + 'px';
    line.style.top = coord2 + 'px';
    line.style.right = coord3 + 'px';
    ifMobileSite();
})

line.addEventListener('click', () => {
    score = score + getRandomInt(10, 50);
    count.innerText = `Count: ${score}`;
    updateBg();
    if(score >= 500) {
        score = score + getRandomInt(25, 75);
    }
})

function updateBg() {
    if(score >= 500) {
        box.style.background = "url(images/mw2.jpg)";
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center";
    }
    if(score >= 1000) {
        box.style.background = "url(images/mw3.jpg)";
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center";
    }
    if(score >= 2000) {
        box.style.background = "black";
        let winText = document.createElement("span");
        box.appendChild(winText);
        winText.classList.add("wintext");
        winText.innerText = "Congratulations! You Catch Unicorn! You Win!";
        score = 0;
        count.style.display = "none";
        unicorncursor.style.display = "none";
        line.style.display = "none";
        let title = document.getElementById("title");
        title.style.display = "none";
        let restartBtn = document.createElement("button");
        box.appendChild(restartBtn);
        restartBtn.classList.add("restart");
        restartBtn.innerText = "Restart";
        restartBtn.onclick = function() {
            location.reload();
        }
    }
}

function ifMobileSite() {
    if(window.matchMedia("(max-width: 400px)")) {
        coord1 = getRandomInt(50, 300);
        coord2 = getRandomInt(50, 300);
        coord3 = getRandomInt(50, 25);
        unicorncursor.style.left = coord1 + 'px';
        unicorncursor.style.top = coord2 + 'px';
        unicorncursor.style.right = coord3 + 'px';
        line.style.left = coord1 + 'px';
        line.style.top = coord2 + 'px';
        line.style.right = coord3 + 'px';
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}