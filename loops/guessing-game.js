const maxNumber = prompt("Choose maximum number");
const minNumber = prompt("Choose minimum number");
alert("You have 10 chances to guess");

const number = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

for (let i = 1; i <= 10; i++) {
  const guess = prompt("What's your guess");
  if (guess == number) {
    alert(`You guessed! It took you ${i} attempts`);
    break;
  } else if (guess < number) {
    alert("Too low");
  } else if (guess > number) {
    alert("Too high");
  } else {
    alert("You didn't guess");
  }
}
