import "./style.css";

window.onload = function() {
  const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
  const cardSuits = ["♦", "♥", "♠", "♣"];

  function getRandom(arr) {
    let r = Math.floor(Math.random() * arr.length);
    return arr[r];
  }

  document.getElementById("value").innerHTML = getRandom(cardValues);

  const randomSuits = getRandom(cardSuits);

  for (let suit of ["top", "bot"]) {
    suit = document.getElementById(suit);
    suit.style.color =
      randomSuits === "♥" || randomSuits === "♦" ? "red" : "black";

    suit.innerHTML = randomSuits;
  }
};
