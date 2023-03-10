console.log("Welcome top Tic Tac Toe")
let turn = new Audio("ding2-89720.mp3")
let gameover = new Audio("negative_beeps-6008.mp3")

let turn = "X"

changeTurn = () =>{
    return turn === "X"?"0": "X"
}

const checkWin = () =>{

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = document.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if (e.innerText === ''){
            e.innerText = turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName(turn)[0].innerText = "Turn for" + turn; 
        }
    })
})