const textcount = document.getElementById("textcount");
const gameOver = document.getElementById("gameOver");
const result = document.getElementById("result");

let guess = [];
for (let i = 0; i < 3; i++) {
  const randomNumber = Math.floor(Math.random() * 9);
  if (guess.indexOf(randomNumber) === -1) {
    guess.push(randomNumber);
  } else {
    i--;
  }
}
console.log("컴퓨터가 생성한 숫자: " + guess.join(""));
let count = 0;

while (true) {
  const userInput = prompt("서로 다른 3자리 숫자를 입력하세요:");
  const userInputstring = userInput.toString();

  count++;

  let S = 0;
  let B = 0;

  for (let i = 0; i < 3; i++) {
    if (guess[i].toString() === userInputstring[i]) {
      S++;
    } else if (guess.includes(parseInt(userInputstring[i]))) {
      B++;
    }
  }
  textcount.textContent = `${count}, 번째시도`;
  result.textContent = `결과,${S}S,${B},B`;

  if (S === 3) {
    gameOver.textContent`${count} 번만에 맞히셧습니다 게임을 종료합니다.`;
   } else{
    coutinue;
    }
   
  }
