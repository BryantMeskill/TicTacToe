const gameBoard = (() => {
  const board = new Array(9);
  return { board };
})();

const player = (name, mark) => {
  return { name, mark };
};

//TODO: take data from user form to create player objects

const createGame = (() => {
  const infoButton = document.querySelector(".info-button");
  infoButton.addEventListener("click", () => {
    const playerOne = player(document.querySelector(".player-one").value, "X");
    const playerTwo = player(document.querySelector(".player-two").value, "O");
    const inputBox = document.querySelector(".player-info");
    const boardGrid = document.querySelector(".grid");
    const subtitle = document.querySelector(".subtitle");
    const header = document.querySelector(".header");
    const playerOneSubtitle = document.createElement("h2");
    const playerTwoSubtitle = document.createElement("h2");

    playerOneSubtitle.classList.add(".subtitle");
    playerTwoSubtitle.classList.add(".subtitle");
    playerOneSubtitle.textContent = `Player One: ${playerOne.name} (X)`;
    playerTwoSubtitle.textContent = `Player Two: ${playerTwo.name} (O)`;

    header.appendChild(playerOneSubtitle);
    header.appendChild(playerTwoSubtitle);

    inputBox.classList.add("hidden");
    subtitle.classList.add("hidden");
    boardGrid.classList.remove("hidden");
  });
})();

//each player needs to be assigned 'x' or 'o' for the sake of logic later.

//TODO: logic for game. (if three in a row, player one wins, ...) check for tie!

const render = (() => {
  const boardGrid = document.querySelector(".grid");
  for (let i = 0; i < gameBoard.board.length; i++) {
    const boardTile = document.createElement("div");
    boardTile.classList.add("tile");
    boardGrid.appendChild(boardTile);
    boardTile.addEventListener("click", () => {
      boardTile.textContent = "x";
      gameBoard.board[i] = boardTile.textContent;
    });
  }
})();

//object to control flow of game

//if one of something is needed, create a module (gameboard, displayController)
//if multiples are needed, use a factory (players)
