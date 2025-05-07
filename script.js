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
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  box5.innerHTML = "";
  box6.innerHTML = "";
  box7.innerHTML = "";
  box8.innerHTML = "";
  box9.innerHTML = "";
  gameEnded = false;
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


function perferedMove() {
  moves = [1,2,3,4,5,6,7,8,9];
  bestMove = [];
  for(let i = 0; i < 9; i++) {
    if (boxes[i].innerHTML == ("X" || "O")) {
      moves[i] = null;
    }
  };
  return moves;
};

function aiMove() {
  if (box5.innerHTML == "") {
    box5.innerHTML = "O";
  } else if (box5.innerHTML == true) {
    box1.innerHTML = "O";
  }
}

function vsAiMode() {
  CurrentPlayer = 1;
  if (CurrentPlayer == 1) {
    boxes.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (CurrentPlayer == 1 &&
          element.innerHTML == "" &&
          gameEnded == false) {
          element.innerHTML = "X";
          turnDisplay.innerHTML = "Player 2";
          xwin();
          owin();
          full();
          console.log(perferedMove());
          // setTimeout(aiMove, 1500);
          // console.log(perferedMove());
        }
      })
    });
  }
      // if (
      //   CurrentPlayer == 2 &&
      //   element.innerHTML == "" &&
      //   gameEnded == false
      // ) {
      //   element.innerHTML = "O";
      //   turnDisplay.innerHTML = "Player 1";
      //   CurrentPlayer = 1;
      //   xwin();
      //   owin();
      //   full();
      // };
}


vsAiMode();

// if (isPlayModeAi == true) {
//   twoPlayersMode();
// }
// else {
//   vsAiMode();
// }
