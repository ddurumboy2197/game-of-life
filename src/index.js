function gameOfLife(board) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let liveNeighbors = 0;

            for (const direction of directions) {
                const x = i + direction[0];
                const y = j + direction[1];

                if (x >= 0 && x < rows && y >= 0 && y < cols && board[x][y] === 1) {
                    liveNeighbors++;
                }
            }

            if (board[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[i][j] = 2;
            } else if (board[i][j] === 0 && liveNeighbors === 3) {
                board[i][j] = 3;
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 2) {
                board[i][j] = 0;
            } else if (board[i][j] === 3) {
                board[i][j] = 1;
            }
        }
    }
}

// Test the function
const board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];

gameOfLife(board);
console.log(board);
