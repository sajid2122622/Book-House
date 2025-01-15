const cells = document.querySelectorAll('[data-cell]');
const resetButton = document.getElementById('resetButton');
let isXTurn = true;

const checkWin = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }
    return false;
};

const handleClick = (e) => {
    const cell = e.target;
    if (cell.textContent) return;

    cell.textContent = isXTurn ? 'O' : 'X';
    if (checkWin()) {
        setTimeout(() => alert(`${isXTurn ? 'X' : 'O'} wins!`), 10);
        cells.forEach(cell => cell.removeEventListener('click', handleClick));
    } else if ([...cells].every(cell => cell.textContent)) {
        setTimeout(() => alert('Draw!'), 10);
    }
    isXTurn = !isXTurn;
};

const resetGame = () => {
    cells.forEach(cell => cell.textContent = '');
    cells.forEach(cell => cell.addEventListener('click', handleClick));
    isXTurn = true;
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);


