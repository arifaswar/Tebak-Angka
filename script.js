let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");
    
    if (guess === randomNumber) {
        message.textContent = "Selamat! Tebakanmu benar!";
        message.style.color = "green";
    } else if (guess < randomNumber) {
        message.textContent = "Terlalu kecil, coba lagi!";
        message.style.color = "red";
    } else {
        message.textContent = "Terlalu besar, coba lagi!";
        message.style.color = "red";
    }
}