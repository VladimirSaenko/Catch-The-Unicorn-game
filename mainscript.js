
"use strict";

const box = document.getElementById("box");
const Unicorncursor = document.getElementById("cursor");
const count = document.getElementById("count");
const line = document.getElementById("line");
let score = 0;
let coordinateX = getRandomInt(50, 565);
let coordinateY = getRandomInt(50, 565);
let coordinateY2 = getRandomInt(50, 565);

Unicorncursor.style.left = coordinateX + 'px';
Unicorncursor.style.top = coordinateY + 'px';
Unicorncursor.style.right = coordinateY2 + 'px';
line.style.left = coordinateX + 'px';
line.style.top = coordinateY + 'px';
line.style.right = coordinateY2 + 'px';

Unicorncursor.addEventListener('mousemove', () => {
    coordinateX = getRandomInt(50, 565);
    coordinateY = getRandomInt(50, 565);
    coordinateY2 = getRandomInt(50, 565);
    Unicorncursor.style.left = coordinateX + 'px';
    Unicorncursor.style.top = coordinateY + 'px';
    Unicorncursor.style.right = coordinateY2 + 'px';
    line.style.left = coordinateX + 'px';
    line.style.top = coordinateY + 'px';
    line.style.right = coordinateY2 + 'px';
    // if(window.matchMedia('screen and (min-width: 300px) and (max-width: 800px)')) {
    //     coordinateX = getRandomInt(50, 100);
    //     coordinateY = getRandomInt(50, 100);
    //     coordinateY2 = getRandomInt(50, 100);
    //     Unicorncursor.style.left = coordinateX + 'px';
    //     Unicorncursor.style.top = coordinateY + 'px';
    //     Unicorncursor.style.right = coordinateY2 + 'px';
    //     line.style.left = coordinateX + 'px';
    //     line.style.top = coordinateY + 'px';
    //     line.style.right = coordinateY2 + 'px';
    // }
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
        Unicorncursor.style.display = "none";
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}