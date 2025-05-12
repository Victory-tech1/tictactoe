let box1 = document.getElementById("box1"),
  box2 = document.getElementById("box2"),
  box3 = document.getElementById("box3"),
  box4 = document.getElementById("box4"),
  box5 = document.getElementById("box5"),
  box6 = document.getElementById("box6"),
  box7 = document.getElementById("box7"),
  box8 = document.getElementById("box8"),
  box9 = document.getElementById("box9"),
  p1Score = document.getElementById("p1Score"),
  p2Score = document.getElementById("p2Score"),
  turnDisplay = document.getElementById("turnDisplay"),
  contBtn = document.getElementById("continue"),
  display = document.getElementById("display"),
  resetScore = document.getElementById("resetScore"),
  playerName = "PLAYER 1";
const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
let p1 = 0;
let p2 = 0;
p1Score.innerHTML = p1;
p2Score.innerHTML = p2;
CurrentPlayer = 1;
winner = 0;
gameEnded = false;
isPlayModeAi = false;

function reset() {
  for ( x in boxes){
    boxes[x].innerHTML = "";
  }
  gameEnded = false;
  xPositions = [];
  oPositions = [];
  emptyBoxes = [...boxes];
}
function xwin() {
  if (
    (box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X") ||
    (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X") ||
    (box7.innerHTML == "X" && box8.innerHTML == "X" && box9.innerHTML == "X") ||
    (box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X") ||
    (box2.innerHTML == "X" && box5.innerHTML == "X" && box8.innerHTML == "X") ||
    (box3.innerHTML == "X" && box6.innerHTML == "X" && box9.innerHTML == "X") ||
    (box1.innerHTML == "X" && box5.innerHTML == "X" && box9.innerHTML == "X") ||
    (box3.innerHTML == "X" && box5.innerHTML == "X" && box7.innerHTML == "X")
  ) {
    display.innerHTML = playerName + " WON";
    winner = 1;
    turnDisplay.innerHTML = "Game Ended";
    p1 += 1;
    p1Score.innerHTML = p1;
    gameEnded = true;
    return;
  }
}
function owin() {
  if (
    (box1.innerHTML == "O" && box2.innerHTML == "O" && box3.innerHTML == "O") ||
    (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O") ||
    (box7.innerHTML == "O" && box8.innerHTML == "O" && box9.innerHTML == "O") ||
    (box1.innerHTML == "O" && box4.innerHTML == "O" && box7.innerHTML == "O") ||
    (box2.innerHTML == "O" && box5.innerHTML == "O" && box8.innerHTML == "O") ||
    (box3.innerHTML == "O" && box6.innerHTML == "O" && box9.innerHTML == "O") ||
    (box1.innerHTML == "O" && box5.innerHTML == "O" && box9.innerHTML == "O") ||
    (box3.innerHTML == "O" && box5.innerHTML == "O" && box7.innerHTML == "O")
  ) {
    display.innerHTML = playerName + " WON";
    winner = 2;
    turnDisplay.innerHTML = "Game Ended";
    p2 += 1;
    p2Score.innerHTML = p2;
    gameEnded = true;
    return;
  }
}
function full() {
  if (
    winner != 1 &&
    winner != 2 &&
    box1.innerHTML != "" &&
    box2.innerHTML != "" &&
    box3.innerHTML != "" &&
    box4.innerHTML != "" &&
    box5.innerHTML != "" &&
    box6.innerHTML != "" &&
    box7.innerHTML != "" &&
    box8.innerHTML != "" &&
    box9.innerHTML != ""
  ) {
    display.innerHTML = "NO WINNER";
    turnDisplay.innerHTML = "Game Ended";
    gameEnded = true;
  }
}
function scoreBoard() {
  if (winner == 1) {
    p1 += 1;
    return;
  }
  if (winner == 2) {
    p2 += 1;
    return;
  }
}
// Creating "play with AI" functionality.
// let aiSwitch = document.getElementById("ai-switch"),
//   aiSwitchCircle = document.getElementById("ai-switch-circle"),
//   TorF = 0,
//   ai = false,
//   i = 0;

// aiSwitch.addEventListener("click", () => {
//   if (TorF == 0) {
//     aiSwitch.style.backgroundColor = "green";
//     aiSwitchCircle.style.left = "19px";
//     TorF = 1;
//     ai = true;
//   } else {
//     aiSwitch.style.backgroundColor = "red";
//     aiSwitchCircle.style.left = "-19px";
//     TorF = 0;
//     ai = false;
//   }
// });

// while (i < 6) {
//   if (ai == true && CurrentPlayer == 2 && gameEnded == false) {
//     document.write("now!!!!");
//     box5.innerHTML = "O";
//     turnDisplay.innerHTML = "Player 1";
//     CurrentPlayer = 1;
//     xwin();
//     owin();
//     full();
//   }
//   boxes.forEach((element) => {
//     element.addEventListener("click", (e) => {
//       if (CurrentPlayer == 1 && element.innerHTML == "" && gameEnded == false) {
//         element.innerHTML = "X";
//         turnDisplay.innerHTML = "Player 2";
//         CurrentPlayer = 2;
//         xwin();
//         owin();
//         full();
//       }
//       if (
//         CurrentPlayer == 2 &&
//         element.innerHTML == "" &&
//         gameEnded == false &&
//         ai == false
//       ) {
//         element.innerHTML = "O";
//         turnDisplay.innerHTML = "Player 1";
//         CurrentPlayer = 1;
//         xwin();
//         owin();
//         full();
//       }
//     });
//   });
//   console.log("hello, world");
//   i++;
// }

contBtn.addEventListener("click", (e) => {
  if (
    winner == 1 ||
    winner == 2 ||
    (box1.innerHTML != "" &&
      box2.innerHTML != "" &&
      box3.innerHTML != "" &&
      box4.innerHTML != "" &&
      box5.innerHTML != "" &&
      box6.innerHTML != "" &&
      box7.innerHTML != "" &&
      box8.innerHTML != "" &&
      box9.innerHTML != "")
  ) {
    turnDisplay.innerHTML = "Game Ended";
    reset();
    display.innerHTML = "";
  }
  if (CurrentPlayer == 1) {
    turnDisplay.innerHTML = "Player 1";
  }
  if (CurrentPlayer == 2) {
    turnDisplay.innerHTML = "Player 2";
  }
});

scoreBoard();

resetScore.addEventListener("click", (e) => {
  if (p1 != 0 || p2 != 0) {
    p1 = 0;
    p2 = 0;
    p1Score.innerHTML = "0";
    p2Score.innerHTML = "0";
    resetScore.style.backgroundColor = "red";
  }
});



function twoPlayersMode() {
  boxes.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (CurrentPlayer == 1 &&
        element.innerHTML == "" &&
        gameEnded == false) {
        element.innerHTML = "X";
        turnDisplay.innerHTML = "Player 2";
        CurrentPlayer = 2;
        xwin();
        owin();
        full();
      }
      if (
        CurrentPlayer == 2 &&
        element.innerHTML == "" &&
        gameEnded == false
      ) {
        element.innerHTML = "O";
        turnDisplay.innerHTML = "Player 1";
        CurrentPlayer = 1;
        xwin();
        owin();
        full();
      }
    });
  });
}


// function allPossibleMoves() {
//   possibleMoves = [1,2,3,4,5,6,7,8,9];
//   x = 0;
//   for(let i = 1; i <= 9; i++) {
//     if (boxes[x++].innerHTML == ("X" || "O")) {
//       possibleMoves.splice(possibleMoves.indexOf(i), 1);
//     }
//   };
//   return possibleMoves;
// };

let win1 = {att: [1, 2],def: 3},
win2 = {att: [1, 3],def: 2},
win3 = {att: [1, 4],def: 7},
win4 = {att: [1, 5],def: 9},
win5 = {att: [1, 7],def: 4},
win6 = {att: [1, 9],def: 5},
win7 = {att: [2, 3],def: 1},
win8 = {att: [2, 5],def: 8},
win9 = {att: [2, 8],def: 5},
win10 = {att: [3, 5],def: 7},
win11 = {att: [3, 6],def: 9},
win12 = {att: [3, 7],def: 5},
win13 = {att: [3, 9],def: 6},
win14 = {att: [4, 5],def: 6},
win15 = {att: [4, 6],def: 5},
win16 = {att: [4, 7],def: 1},
win17 = {att: [4, 6],def: 5},
win18 = {att: [5, 6],def: 4},
win19 = {att: [5, 7],def: 3},
win20 = {att: [5, 8],def: 2},
win21 = {att: [5, 9],def: 1},
win22 = {att: [6, 9],def: 3},
win23 = {att: [7, 8],def: 9},
win24 = {att: [7, 9],def: 8},
win25 = {att: [8, 9],def: 7};
winMoves = [ win1, win2, win3,
  win4, win5, win6, win7, 
  win8, win9, win10, win11,
  win12, win13, win14, win15,
  win16, win17, win18, win19,
  win20, win21, win22, win23,
  win24, win25
];

let oPositions = [],
xPositions = [],
emptyBoxes = [...boxes];

function aiDefMove() {
  let outerBreak = false;
  for ( x in winMoves ) {
    for( y in xPositions ){
      if (winMoves[x].att[0] == ((boxes.indexOf(xPositions[y])) + 1)) {
        for ( z in xPositions ){
          if( winMoves[x].att[1] == ((boxes.indexOf(xPositions[z])) + 1 )) {
            console.log(winMoves[x].def);
            outerBreak = true;
            break;
          }
        }
      }
      if(outerBreak) {
        break;
      }
    }
    if(outerBreak) {
      break;
    }
  }
}
function positions() {
  for( x in emptyBoxes ) {
    if (emptyBoxes[x].innerHTML == "X"){
      xPositions.push(emptyBoxes[x]);
      emptyBoxes.splice(emptyBoxes.indexOf(emptyBoxes[x]), 1);
    }
    else if (emptyBoxes[x].innerHTML == "O"){
      oPositions.push(emptyBoxes[x]);
      emptyBoxes.splice(emptyBoxes.indexOf(emptyBoxes[x]), 1);
    }
  }
}
// function defMove() {
//   for(const x in winMoves) {
//     if (boxes[(allDef[x].att[0])] == "X" && boxes[(allDef[x].att[1])] == "X") {
//       console.log(allDef[x].def);
//     }
//   };
// }
// defMove();
function perferedMove() {
  // box 5 will be the most prefered move.
  // next any winning move will be prefered.
  // next any defence move will be prefered.
  // flollowed by the the boxes on the edges.
  box5preference = 20;
}

function aiMove() {
  if (box5.innerHTML == "") {
    box5.innerHTML = "O";
  } else if (box5.innerHTML != "") {
    box1.innerHTML = "O";
  }
}

function vsAiMode() {
  CurrentPlayer = 1;
  openBoxes = 9;
  if (CurrentPlayer == 1) {
    boxes.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (CurrentPlayer == 1 &&
          element.innerHTML == "" &&
          gameEnded == false) {
          element.innerHTML = "X";
          openBoxes--;
          // console.log(openBoxes);
          // turnDisplay.innerHTML = "Player 2";
          xwin();
          full();
          // allPossibleMoves();
          // positions();
          // setTimeout(aiMove, 1500);
          positions();
          aiDefMove();
          // turnDisplay.innerHTML = "Player 1";
          // owin();
          // full();
        }
      })
    });
  }
}


vsAiMode();

// if (isPlayModeAi == true) {
//   twoPlayersMode();
// }
// else {
//   vsAiMode();
// }
