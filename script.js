document.addEventListener('DOMContentLoaded', () => {
    // Zde nastavíš reálná čísla
    const targetStats = {
        servers: 15, // Celkem serverů
        bots: 2,     // Počet botů
        users: 12500 // Počet uživatelů
    };

    // Funkce pro animované přičítání čísel
    function animateCounter(elementId, targetNumber, duration) {
        const element = document.getElementById(elementId);
        if (!element) return;

        let startNumber = 0;
        const steps = 50;
        const increment = targetNumber / steps;
        const stepTime = duration / steps;

        const counter = setInterval(() => {
            startNumber += increment;
            if (startNumber >= targetNumber) {
                element.innerText = targetNumber.toLocaleString();
                clearInterval(counter);
            } else {
                element.innerText = Math.ceil(startNumber).toLocaleString();
            }
        }, stepTime);
    }

    // Spuštění animací
    animateCounter('server-count', targetStats.servers, 1500);
    animateCounter('bot-count', targetStats.bots, 1000);
    animateCounter('user-count', targetStats.users, 2000);
});
