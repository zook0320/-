document.addEventListener("DOMContentLoaded", function () {
  const textcount = document.getElementById("textcount");
  const gameOver = document.getElementById("gameOver");
  const result = document.getElementById("result");
  const userInput = document.getElementById("user-input");
  const submitButton = document.getElementById("submit-button");


let guess = new Set();

for (let i = 0; guess.size < 3; i++) {
  const randomNumber = Math.floor(Math.random() * 9) + 1; // 1부터 9까지의 난수 생성
  guess.add(randomNumber);
}
const guessArray = Array.from(guess);
  console.log("컴퓨터가 생성한 숫자: " + guessArray.join(""));


// - 숫자의 값과 위치가 모두 일치하면 S
// - 숫자의 값은 일치하지만 위치가 틀렸으면 B

  let count = 0;
  let maxAttempts = 15; // 원하는 횟수로 변경 가능

  submitButton.addEventListener("click", function () {
    
    const userInputValue = userInput.value;
    if (!/^[1-9]{3}$/.test(userInputValue)) {
      alert("입력값이 유효하지 않습니다. 1부터 9까지의 숫자 3개를 입력하세요.");
      return;
    }

    count++;

    let S = 0;
    let B = 0;
  
    for (let i = 0; i < 3; i++) {
      if (guessArray[i].toString() === userInputValue[i]) {
        S++;
      } else if (guessArray.includes(parseInt(userInputValue[i]))) { //includes 특정문자열을 포함
        B++;
      }
    }
    textcount.innerHTML += `${count}번째 시도: ${userInputValue}<br>`;
    result.innerHTML += `결과, ${S}S, ${B}B<br>`;

    if (S === 3) {
      gameOver.textContent = `${count}번만에 맞히셨습니다. 게임을 종료합니다.`;
      gameOver.style.display = "block";
      userInput.setAttribute("disabled", true);
      submitButton.setAttribute("disabled", true);


      
    } else if (count >= maxAttempts) {
      gameOver.textContent = "게임 오버! 더 이상 시도할 수 없습니다.";
      gameOver.style.display = "block";
      userInput.setAttribute("disabled", true);
      submitButton.setAttribute("disabled", true);
    }
  });
});
 
