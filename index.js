let currentCoinHole;
let currentBombHole;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game board in html
    for(let i = 0; i < 9; i++) {
        let hole = document.createElement('div');
        hole.id = i.toString();
        hole.addEventListener('click', selectHole);
        document.getElementById('game-container').appendChild(hole);
    }

    setInterval(setCoin, 1000);
    setInterval(setBomb, 2000);
}

function getRandomHole() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}


function setCoin() {
    if(gameOver) {
        return;
    }

    if(currentCoinHole) {
        currentCoinHole.innerHTML = '';
    }

    let coin = document.createElement('img');
    coin.src = './coin.png';

    let num = getRandomHole();
    if(currentBombHole && currentBombHole.id == num) {
        return;
    }

    currentCoinHole = document.getElementById(num);
    currentCoinHole.appendChild(coin);
}


function setBomb() {
    if(gameOver) {
        return;
    }

    if(currentBombHole) {
        currentBombHole.innerHTML = '';
    }

    let bomb = document.createElement('img');
    bomb.src = './bomb.png';

    let num = getRandomHole();
    if(currentCoinHole && currentCoinHole.id == num) {
        return;
    }
    currentBombHole = document.getElementById(num);
    currentBombHole.appendChild(bomb);
}


function selectHole() {
    if(gameOver) {
        return;
    }

    if(this == currentCoinHole) {
        score += 10;
        document.getElementById('score').innerText = score.toString();
    } else if (this == currentBombHole) {
        let end = document.createElement('h3');
        end.innerText = 'GAME OVER!'
        document.getElementById('score').innerText = score.toString();
        document.getElementById('title-container').appendChild(end);
        gameOver = true;
    }
}