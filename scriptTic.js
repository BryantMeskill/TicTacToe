const gameBoard = (() => {
  const board = new Array(9);
  return { board };
})();

const player = (name, mark) => {
  return { name, mark };
};

const createGame = (() => {
  const infoButton = document.querySelector(".info-button");
  infoButton.addEventListener("click", () => {
    const playerOneName = document.querySelector(".player-one").value;
    const playerTwoName = document.querySelector(".player-two").value;
    const inputBox = document.querySelector(".player-info");
    const boardGrid = document.querySelector(".grid");
    const subtitle = document.querySelector(".subtitle");
    const header = document.querySelector(".header");
    const playerOneSubtitle = document.createElement("h2");
    const playerTwoSubtitle = document.createElement("h2");

    playerOneSubtitle.classList.add(".subtitle");
    playerTwoSubtitle.classList.add(".subtitle");
    playerOneSubtitle.textContent = `Player One: ${playerOneName} (X)`;
    playerTwoSubtitle.textContent = `Player Two: ${playerTwoName} (O)`;

    header.appendChild(playerOneSubtitle);
    header.appendChild(playerTwoSubtitle);

    inputBox.classList.add("hidden");
    subtitle.classList.add("hidden");
    boardGrid.classList.remove("hidden");
    render();
  });
})();
let counter = 1;
const render = () => {
  const playerOne = player(document.querySelector(".player-one").value, "X");
  const playerTwo = player(document.querySelector(".player-two").value, "O");
  const boardGrid = document.querySelector(".grid");
  for (let i = 0; i < gameBoard.board.length; i++) {
    const boardTile = document.createElement("div");
    boardTile.classList.add("tile");
    boardGrid.appendChild(boardTile);
    if (gameBoard.board[i]) {
      boardTile.textContent = gameBoard.board[i];
    } else {
      boardTile.addEventListener("click", () => {
        if (counter % 2) {
          gameBoard.board[i] = playerOne.mark;
          counter++;
          boardGrid.replaceChildren();
          render();
          //gameplay();
        } else {
          gameBoard.board[i] = playerTwo.mark;
          counter++;
          boardGrid.replaceChildren();
          render();
          //gameplay();
        }
      });
    }
  }
};

//click happens
//update gameBoard.board
//render those changes
//check for 3/tie
//object to control flow of game

const gamePlay = () => {};
// if one of something is needed, create a module (gameboard, displayController)
// if multiples are needed, use a factory (players)
