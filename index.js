 let randomNumber = Math.floor(Math.random() * 100) + 1;

    function checkGuess() {
      let guess = document.getElementById("guessInput").value;
      guess = Number(guess);

      if (guess === randomNumber) {
        document.getElementById("result").innerText = "🎉 Correct! You guessed it!";
      } else if (guess < randomNumber) {
        document.getElementById("result").innerText = "📉 Too low! Try again.";
      } else {
        document.getElementById("result").innerText = "📈 Too high! Try again.";
      }
    }