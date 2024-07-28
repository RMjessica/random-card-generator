import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
  const cardSuits = ["♦", "♥", "♠", "♣"];
  
  function getRandom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }

  function updateCard() {
      const value = getRandom(cardValues);
      const suit = getRandom(cardSuits);
      
      document.getElementById("value").textContent = value;
      
      const suitElements = ["top", "bot"].map(id => document.getElementById(id));
      suitElements.forEach(element => {
          element.textContent = suit;
          element.style.color = ["♥", "♦"].includes(suit) ? "red" : "black";
      });
  }

  function refresh() {
      const urlParams = new URLSearchParams(window.location.search);
      const shouldRefresh = urlParams.get("refresh") === "yes";

      if (shouldRefresh) {
          setTimeout(() => {
              window.location.replace(window.location.href);
          }, 10000);
      } else {
          window.location.search = "refresh=yes";
      }
  }

  updateCard();
  window.refresh = refresh;
});
