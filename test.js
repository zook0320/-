let guess = new Set();

for (let i = 0; guess.size < 3; i++) {
  const randomNumber = Math.floor(Math.random() * 9) + 1; // 1부터 9까지의 난수 생성
  guess.add(randomNumber);
}
const guessArray = Array.from(guess);

console.log("컴퓨터가 생성한 숫자: " + guess.join(""));
console.log(guessArray);
console.log(guess);


// function getRandomThreeDigitNumbers() {
//   const uniqueNumbers = new Set(); // 중복을 방지하기 위해 Set을 사용합니다.

//   while (uniqueNumbers.size < 3) {
//       const randomNumber = Math.floor(Math.random() * 10); // 0부터 9까지의 무작위 숫자 생성
//       uniqueNumbers.add(randomNumber); // Set에 숫자를 추가 (중복은 자동으로 제거됨)
//   }

//   const threeDigitNumbers = [...uniqueNumbers]; // Set을 배열로 변환

//   return threeDigitNumbers.join(''); // 배열을 문자열로 변환
// }

// const randomThreeDigitNumber = getRandomThreeDigitNumbers();
// console.log(randomThreeDigitNumber);