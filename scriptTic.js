//store gameboard as an array inside of a gameboard object.
const gameBoard = (() => {
  const board = new Array(9);
  return { board };
})();
//players stored in objects
const player = (name, mark) => {
  return { name, mark };
};
//object to control flow of game

//if one of something is needed, create a module (gameboard, displayController)
//if multiples are needed, use a factory (players)
