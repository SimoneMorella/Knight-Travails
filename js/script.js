import knightMoves from "./knightMove.js";

const start = [0, 0];
const end = [3, 3];

const moves = knightMoves(start, end);
console.log(`Moves to go from ${start} to ${end} are ${moves.length - 1}:
    ${moves}`)