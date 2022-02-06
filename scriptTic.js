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
  count = 0;
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
          gamePlay();
        } else {
          gameBoard.board[i] = playerTwo.mark;
          counter++;
          boardGrid.replaceChildren();
          render();
          gamePlay();
        }
      });
    }
  }
};

function checkIndexesX(indexes) {
  return indexes.every(function (indexes) {
    if (gameBoard.board[indexes] === "X") {
      return gameBoard.board[indexes];
    }
  });
}

function checkIndexesO(indexes) {
  return indexes.every(function (indexes) {
    if (gameBoard.board[indexes] === "O") {
      return gameBoard.board[indexes];
    }
  });
}

let count = 0;
const gamePlay = () => {
  const playerOne = player(document.querySelector(".player-one").value, "X");
  const playerTwo = player(document.querySelector(".player-two").value, "O");
  const header = document.querySelector(".header");
  const boardGrid = document.querySelector(".grid");
  const winSection = document.querySelector(".win-section");
  const winningIndices = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  if (winningIndices.some(checkIndexesX)) {
    boardGrid.classList.add("hidden");
    header.classList.add("hidden");
    winSection.classList.remove("hidden");

    const playerOneWin = document.createElement("div");
    const newGameBtn = document.createElement("button");

    playerOneWin.classList.add("player-win");
    newGameBtn.classList.add("win-button");

    playerOneWin.textContent = `${playerOne.name} wins!`;
    newGameBtn.textContent = "New Game";

    winSection.appendChild(playerOneWin);
    winSection.appendChild(newGameBtn);
    newGameBtn.addEventListener("click", () => {
      for (let i = 0; i < gameBoard.board.length; i++) {
        gameBoard.board[i] = undefined;
      }
      winSection.replaceChildren();
      winSection.classList.add("hidden");
      boardGrid.classList.remove("hidden");
      header.classList.remove("hidden");
      boardGrid.replaceChildren();
      render();
    });
  } else if (winningIndices.some(checkIndexesO)) {
    boardGrid.classList.add("hidden");
    header.classList.add("hidden");
    winSection.classList.remove("hidden");

    const playerTwoWin = document.createElement("div");
    const newGameBtn = document.createElement("button");

    playerTwoWin.classList.add("player-win");
    newGameBtn.classList.add("win-button");

    playerTwoWin.textContent = `${playerTwo.name} wins!`;
    newGameBtn.textContent = "New Game";

    winSection.appendChild(playerTwoWin);
    winSection.appendChild(newGameBtn);
    newGameBtn.addEventListener("click", () => {
      for (let i = 0; i < gameBoard.board.length; i++) {
        gameBoard.board[i] = undefined;
      }
      winSection.replaceChildren();
      winSection.classList.add("hidden");
      boardGrid.classList.remove("hidden");
      header.classList.remove("hidden");
      boardGrid.replaceChildren();
      render();
    });
  } else {
    for (let i = 0; i < gameBoard.board.length; i++) {
      if (gameBoard.board[i] !== undefined) {
        count++;
      }
      if (count === 9) {
        boardGrid.classList.add("hidden");
        header.classList.add("hidden");
        winSection.classList.remove("hidden");

        const gameDraw = document.createElement("div");
        const newGameBtn = document.createElement("button");

        newGameBtn.classList.add("win-button");
        gameDraw.classList.add("draw");

        gameDraw.textContent = "It's a draw!";
        newGameBtn.textContent = "New Game";

        winSection.appendChild(gameDraw);
        winSection.appendChild(newGameBtn);
        newGameBtn.addEventListener("click", () => {
          for (let i = 0; i < gameBoard.board.length; i++) {
            gameBoard.board[i] = undefined;
          }
          winSection.replaceChildren();
          winSection.classList.add("hidden");
          boardGrid.classList.remove("hidden");
          header.classList.remove("hidden");
          boardGrid.replaceChildren();
          render();
        });
      }
    }
  }
};
