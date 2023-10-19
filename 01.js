
// // let guess = [];
// // for (let i = 0; i < 3; i++) {
// //   const randomNumber = Math.floor(Math.random() * 10);
// //   if (guess.indexOf(randomNumber) === -1) {
// //     guess.push(randomNumber);
// //   } else {
// //     i--;
// //   }
// // }
// // console.log("컴퓨터가 생성한 숫자: " + guess.join(""));
// // let count = 0;

// //             while (true) {
// //             const userInput = prompt("서로 다른 3자리 숫자를 입력하세요:");
// //             const userInputstring = userInput;

// //             count++;

// //             let S = 0;
// //             let B = 0;

// //             for (let i = 0; i < 3; i++) {
// //                 if (guess[i].toString() === userInputstring[i]) {
// //                 S++;
// //                 } else if (guess.includes(parseInt(userInputstring[i]))) {
// //                 B++;
// //                 }
// //             }
// //             console.log( count + '번째시도')
// //             console.log ("결과  S :", S ,"B:", B)

// //             if (S === 3) {
// //                 gameOver.textContent = `${count} 번만에 맞히셧습니다 게임을 종료합니다.`;
// //                 break
// //             } else{
// //                 console.log ("결과  S :", S ,"B:", B)

// //                 continue
// //                 }
            
// //             }




// // document.addEventListener("DOMContentLoaded", function () {
// //     const textcount = document.getElementById("textcount");
// //     const gameOver = document.getElementById("gameOver");
// //     const result = document.getElementById("result");
// //     const userInput = document.getElementById("user-input");
// //     const submitButton = document.getElementById("submit-button");
  
  
// //     let guess = [];
// //     for (let i = 0; i < 3; i++) {
// //       const randomNumber = Math.floor(Math.random() * 10);
// //       guess.push(randomNumber);
// //     }
// //     console.log("컴퓨터가 생성한 숫자: " + guess.join(""));
  
  
// //   // - 숫자의 값과 위치가 모두 일치하면 S
// //   // - 숫자의 값은 일치하지만 위치가 틀렸으면 B
  
// //     let count = 0;
// //     let maxAttempts = 15; // 원하는 횟수로 변경 가능
  
// //     submitButton.addEventListener("click", function () {
      
// //       const userInputValue = userInput.value;
  
// //       count++;
  
// //       let S = 0;
// //       let B = 0;
    
// //       for (let i = 0; i < 3; i++) {
// //         if (guess[i].toString() === userInputValue[i]) {
// //           S++;
// //         } else if (guess.includes(parseInt(userInputValue[i]))) { //includes 특정문자열을 포함
// //           B++;
// //         }
// //       }

// //       textcount.innerHTML += `${count}번째 시도: ${userInputValue}<br>`;
// //       result.innerHTML = `결과, ${S}S, ${B}B`;
  
// //       if (S === 3) {
// //         gameOver.textContent = `${count}번만에 맞히셨습니다. 게임을 종료합니다.`;
// //         gameOver.style.display = "block";
// //         userInput.setAttribute("disabled", true);
// //         submitButton.setAttribute("disabled", true);
  
  
        
// //       } else if (count >= maxAttempts) {
// //         gameOver.textContent = "게임 오버! 더 이상 시도할 수 없습니다.";
// //         gameOver.style.display = "block";
// //         userInput.setAttribute("disabled", true);
// //         submitButton.setAttribute("disabled", true);
// //       }
// //     });
// //   });
   
  



// function solution(arr) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0 || arr[i] !== arr[i - 1]) {
//             // 현재 원소가 이전 원소와 다를 때만 결과 배열에 추가
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }




// function solution(arr1) {


// for (let i = 0; i < arr1.length; i++) {
//         if (i === 0 || arr1[i] !== arr[i - 1]) {
//             result.push(arr1[i]);
//         }}

        
//         const arr1 = [1, 1, 3, 3, 0, 1, 1];
//         const arr2 = [4, 4, 4, 3, 3];


// console.log(solution(arr1)); // [1, 3, 0, 1]
// console.log(solution(arr2)); // [4, 3]

for(let i=0;i<10;i++) {
	if(i==5) continue;
        if(i==7) break;
	console.log(i);
}