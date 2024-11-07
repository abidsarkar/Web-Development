document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    let currentPlayer = "X";
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

    function checkWinner() {
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (
                boxes[a].textContent &&
                boxes[a].textContent === boxes[b].textContent &&
                boxes[a].textContent === boxes[c].textContent
            ) {
                return true;
            }
        }
        return false;
    }

    function handleClick(event) {
        const box = event.target;
        if (box.textContent === "") {
            box.textContent = currentPlayer;
            if (checkWinner()) {
                setTimeout(() => {
                    alert(`${currentPlayer} wins!`);
                    resetGame();
                }, 100);
            } else if (Array.from(boxes).every(box => box.textContent !== "")) {
                setTimeout(() => {
                    alert("It's a draw!");
                    resetGame();
                }, 100);
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    function resetGame() {
        boxes.forEach(box => (box.textContent = ""));
        currentPlayer = "X";
    }

    boxes.forEach(box => box.addEventListener("click", handleClick));
});
