let currentPosition = 1;

function createTable() {
  const tableBody = document.getElementById("table-body");
  let counter = 1;

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement("td");
      cell.className =
        (i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)
          ? "box even"
          : "box odd";

      const counterText = document.createElement("div");
      counterText.className = "counter";
      counterText.textContent = counter;

      if (counter === 1) {
        const redBlock = document.createElement("div");
        cell.classList.add("red-box");

        cell.appendChild(counterText);
        cell.appendChild(redBlock);
      }

      cell.appendChild(counterText);
      row.appendChild(cell);
      counter++;
    }

    tableBody.appendChild(row);
  }
}

function rollDice() {
  const diceResult = Math.floor(Math.random() * 6) + 1;
  const resultParagraph = document.querySelector(".result-paragraph");
  resultParagraph.textContent = "Dice Result= " + diceResult;

  if (currentPosition + diceResult <= 100) {
    moveRedBlock(currentPosition + diceResult);
  }
}

function moveRedBlock(newPosition) {
  const tableCells = document.querySelectorAll(".box");
  const currentCell = tableCells[currentPosition - 1];
  const newCell = tableCells[newPosition - 1];

  currentCell.classList.remove("red-box");
  newCell.classList.add("red-box");
  currentPosition = newPosition;

  if (currentPosition === 100) {
    alert("YOU WON!!!");
  }
}

function resetTable() {
  moveRedBlock(1);
  const resultParagraph = document.querySelector(".result-paragraph");
  resultParagraph.textContent = "";
}

document.addEventListener("DOMContentLoaded", function () {
  createTable();
});