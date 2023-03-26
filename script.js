console.log("Welcome to tic tac toe game");

let music = new Audio("images/music.mp3");
let audioturn = new Audio("images/ting.mp3");
let gameover = new Audio("images/gameover.mp3");
let turn = "X";
let isgameover = false;


// Music While playing the game
music.play();//play is an in built function to run the object name music 


// Create a function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}


// create a function check who win the match
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover.play();
            isgameover = true;
            document.querySelector('.img-icon').getElementsByTagName('img')[0].style.width = "300px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }

    })

}



// creating a function for printing X and O in the box using foreach loop
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }

    })
})


// Creating function of game logic
// let boxes = document.getElementsByClassName("box");

// Creating a reset button using arrow function without giving the name of the function
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.img-icon').getElementsByTagName('img')[0].style.width = "0px"
})




