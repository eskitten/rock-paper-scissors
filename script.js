const rps = ['rock', 'paper', 'scissors'];
const movesRock = document.getElementById("card-one");
const movesPaper = document.getElementById("card-two");
const movesScissors = document.getElementById("card-three");
const round = document.getElementById("round");
const results = document.getElementById("results");
let score = 0;

function computerPlay() {
    var computerSelection = Math.floor(Math.random() * rps.length);
    console.log(rps[computerSelection]);
};

function playRound() {
    computerPlay();
    document.getElementById("round").textContent = "Round 1";
    document.getElementById("start").style.display = 'none';

    movesRock.style.display = 'inline-block';
    movesPaper.style.display = 'inline-block';
    movesScissors.style.display = 'inline-block';
};
function playRound2() {
    computerPlay();
    document.getElementById("round").textContent = "Round 2";

    movesRock.style.display = 'inline-block';
    movesPaper.style.display = 'inline-block';
    movesScissors.style.display = 'inline-block';

    if (score === 2) {
        score = 1;
    }
};
function playRound3() {
    computerPlay();
    document.getElementById("round").textContent = "Round 3";

    movesRock.style.display = 'inline-block';
    movesPaper.style.display = 'inline-block';
    movesScissors.style.display = 'inline-block';
};

function moveRock() {
    document.getElementById("start").style.display = 'none';
    const computerSelection = Math.floor(Math.random() * rps.length);
    if ("rock" === rps[computerSelection]) {
        results.textContent = "You and Computer both tied!";
    } else if (rps[computerSelection] === "scissors") {
        results.textContent = "Computer selected scissors. You won this round!";
        ++score;
    } else {
        results.textContent = "Computer selected paper. Computer won this round!";
    };
    checkRound();
    };
function movePaper() {
    document.getElementById("start").style.display = 'none';
    const computerSelection = Math.floor(Math.random() * rps.length);
    if ("paper" === rps[computerSelection]) {
        results.textContent = "You and Computer both tied!";
    } else if (rps[computerSelection] === "rock") {
        results.textContent = "Computer selected rock. You won this round!";
        ++score;
    } else {
        results.textContent = "Computer selected scissors. Computer won this round!";
    };
    checkRound();
    }
function moveScissors() {
    document.getElementById("start").style.display = 'none';
    const computerSelection = Math.floor(Math.random() * rps.length);
    if ("scissors" === rps[computerSelection]) {
        results.textContent = "You and Computer both tied!";
    } else if (rps[computerSelection] === "paper") {
        results.textContent = "Computer selected paper. You won this round!";
        ++score;
    } else {
        results.textContent = "Computer selected rock. Computer won this round!";
    };
    checkRound();
    };

function continued() {
    document.getElementById("continued").style.display = 'none';
    results.style.display = 'none';
    playRound2();
};
function final() {
    document.getElementById("final").style.display = 'none';
    results.style.display = 'none';
    playRound3();
}

function checkRound() {
    movesRock.style.display = 'none';
    movesPaper.style.display = 'none';
    movesScissors.style.display = 'none';

    if (round.innerHTML === "Round 1") {
        document.getElementById("continued").style.display = 'flex';
        results.style.display = 'block';
    } else if (round.innerHTML === "Round 2") {
        document.getElementById("final").style.display = 'flex';
        results.style.display = 'block';
    } else {
        finalResults();
        results.style.display = 'none';
    };

    results.style.display = 'block';
};
function finalResults() {
    results.style.display = 'block';
    document.getElementById("finalResult").style.display = 'block';

    if (score === 0) {
        document.getElementById("finalResult").textContent = "You Lost! You passed 0/3 rounds! Better luck next time!"
    } else if (score === 2) {
        document.getElementById("finalResult").textContent = "You Won! You passed 2/3 rounds."
    } else if (score === 3) {
        document.getElementById("finalResult").textContent = "Wow! You passed 3/3 rounds. Congratulations! You Won!"
    } else {
        document.getElementById("finalResult").textContent = "You Lost! You passed 1/3 rounds."
    }
    document.getElementById("playAgain").style.display = 'block';
};
function playAgain() {
    location.reload();
}
