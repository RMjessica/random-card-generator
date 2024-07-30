import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
    const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
    const cardSuits = ["♦", "♥", "♠", "♣"];
    let refreshInterval;

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

    function startAutoRefresh() {
        if (refreshInterval) {
            clearInterval(refreshInterval);
        }
        refreshInterval = setInterval(() => {
            updateCard();
        }, 10000); // Refresh every 10 seconds
    }

    function handleChangeCard() {
        updateCard();
        startAutoRefresh(); // Restart the auto-refresh timer
    }

    // Initial card update and start auto-refresh timer
    updateCard();
    startAutoRefresh();

    // Attach event listener for the Change Card button
    document.getElementById("changeCardBtn").addEventListener("click", handleChangeCard);

    // Attach event listener for the Refresh button
    document.getElementById("refreshBtn").addEventListener("click", () => {
        updateCard();
        startAutoRefresh(); // Restart the auto-refresh timer
    });
});
