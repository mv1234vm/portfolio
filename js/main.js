const startDate = new Date("2025-12-15T14:34:03");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const counter = document.getElementById("counter");
    if (counter) {
        counter.textContent = `${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes`;
    }
}

updateCounter();
setInterval(updateCounter, 1000);
