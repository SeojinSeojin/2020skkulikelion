const range = 300;
const answer = Math.ceil(Math.random() * range);
console.log(answer);

//html에 있는 내용 받아오기
const inputtag = document.getElementById("input");
const resultdiv = document.getElementById("result");
const formbtn = document.getElementById("formBtn");

let wrongAns = 0;
let gotAns = 0;

//버튼에 onclick이벤트 추가
formbtn.onclick = (event) => {
    event.preventDefault(); //이거 안하면 버튼 누를때마다 새로고침 됨
    if (wrongAns > 10 || gotAns) return;
    const userAnswer = Number(inputtag.value); //Number()로 안바꿔도 잘돌아감,, 기묘한 자바스크립트,,
    const result = document.createElement("h2");
    result.textContent = userAnswer + " 💨 ";
    if (userAnswer === answer) {
        result.textContent += "Answer";
        gotAns = 1;
    } else {
        wrongAns += 1;
        userAnswer > answer ?
            (result.textContent += "Down") :
            (result.textContent += "Up");
    }
    resultdiv.append(result);
    inputtag.value = "";
};