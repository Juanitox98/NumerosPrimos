document.addEventListener('DOMContentLoaded', () => {
    const primeDisplay = document.getElementById('primeNumber');
    let primes = [2]; // Inicia con el primer número primo
    let currentIndex = 0;

    // Función para verificar si un número es primo
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Función para encontrar el siguiente número primo
    function nextPrime() {
        let next = primes[primes.length - 1] + 1;
        while (!isPrime(next)) {
            next++;
        }
        primes.push(next);
        return next;
    }

    // Función para manejar el click izquierdo (avanzar al siguiente primo)
    function handleLeftClick() {
        if (currentIndex === primes.length - 1) {
            nextPrime();
        }
        currentIndex++;
        primeDisplay.textContent = primes[currentIndex];
    }

    // Función para manejar el click derecho (retroceder al primo anterior)
    function handleRightClick(event) {
        event.preventDefault(); // Evita el menú contextual del botón derecho
        if (currentIndex > 0) {
            currentIndex--;
            primeDisplay.textContent = primes[currentIndex];
        }
    }

    // Asigna los manejadores de eventos para clicks
    document.addEventListener('click', handleLeftClick);
    document.addEventListener('contextmenu', handleRightClick);
});
