
"use strict";

const box = document.getElementById("box");
const unicorncursor = document.getElementById("cursor");
const count = document.getElementById("count");
const line = document.getElementById("line");
let score = 0;

unicorncursor.style.left = getRandomInt(50, 100) + 'px';
unicorncursor.style.top = getRandomInt(50, 100) + 'px';
unicorncursor.style.right = getRandomInt(50, 100) + 'px';
line.style.left = getRandomInt(50, 100) + 'px';
line.style.top = getRandomInt(50, 100) + 'px';
line.style.right = getRandomInt(50, 100) + 'px';

unicorncursor.addEventListener('mousemove', () => {
    if(window.matchMedia('(min-width: 300px) and (max-width: 800px)').matches) {
        unicorncursor.style.left = getRandomInt(50, 100) + 'px';
        unicorncursor.style.top = getRandomInt(50, 100) + 'px';
        unicorncursor.style.right = getRandomInt(50, 100) + 'px';
        line.style.left = getRandomInt(50, 100) + 'px';
        line.style.top = getRandomInt(50, 100) + 'px';
        line.style.right = getRandomInt(50, 100) + 'px';
    }
    else {
        unicorncursor.style.left = getRandomInt(75, 200) + 'px';
        unicorncursor.style.top = getRandomInt(75, 200) + 'px';
        unicorncursor.style.right = getRandomInt(75, 200) + 'px';
        line.style.left = getRandomInt(75, 200) + 'px';
        line.style.top = getRandomInt(75, 200) + 'px';
        line.style.right = getRandomInt(75, 200) + 'px';
    }
})

line.addEventListener('click', () => {
    score = score + getRandomInt(10, 50);
    count.innerText = `Count: ${score}`;
    updateBg();
    if(score >= 500) {
        score = score + getRandomInt(25, 45);
    }
})

function updateBg() {
    if(score >= 500) {
        box.style.background = "url(images/bg2.jpg)";
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center";
    }
    if(score >= 1000) {
        box.style.background = "url(images/bg3.jpg)";
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center";
    }
    if(score >= 2000) {
        box.style.background = "black";
        let winText = document.createElement("span");
        box.appendChild(winText);
        winText.classList.add("wintext");
        winText.innerText = "You Win!";
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
