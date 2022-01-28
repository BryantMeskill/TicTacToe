//store gameboard as an array inside of a gameboard object.
const gameBoard = (() => {
  const board = new Array(9);
  return { board };
})();
//players stored in objects
const player = (name, mark) => {
  return { name, mark };
};

const render = (() => {
  const boardGrid = document.querySelector(".grid");
  for (let i = 0; i < gameBoard.board.length; i++) {
    const boardTile = document.createElement("div");
    boardTile.classList.add("tile");
    boardGrid.appendChild(boardTile);
  }
})();
//object to control flow of game

//if one of something is needed, create a module (gameboard, displayController)
//if multiples are needed, use a factory (players)
