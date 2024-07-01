import Move from "./move.js";


function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

export default function knightMoves(start, end) {
    const directions = [
        [1, 2], [2, 1], [-1, 2], [1, -2],
        [2, -1], [-1, -2], [-2, -1], [-2, 1]
    ]
    let queue = [new Move(start, [start])];
    let visitedGrid = Array.from({length : 8}, () => Array(8).fill(0));
    visitedGrid[start[0][start[1]]] = 1;
    while (queue.length > 0) {
        let currentMove = queue.shift();
        let [x, y] = currentMove.pos;
        let path = currentMove.path;
        console.log(path)
        if (x === end[0] && y === end[1]) return path;

        directions.forEach(([dx, dy]) => {
            const newX = x + dx;
            const newY = y + dy;

            if (isValid(newX, newY) && !visitedGrid[newX][newY]) {
                visitedGrid[newX][newY] = 1;
                queue.push(new Move([newX, newY], path.concat([[newX, newY]])))
            }
        })
    }
    return -1;
}