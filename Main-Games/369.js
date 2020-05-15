const num = 100;
let i = 1;
let element;
let num369 = 0; //3,6,9의 갯수
let temp;
for (i; i <= num; i++) {
    element = document.createElement('div');
    document.body.append(element);
    temp = i;
    num369 = 0;
    while (temp != 0) {
        if (temp % 10 === 3 || temp % 10 === 6 || temp % 10 === 9) num369++; //((temp%10)%3===0)
        temp = Math.floor(temp / 10);
    } // 일의 자리부터 끝자리까지 3,6,9의 개수를 센다
    if (num369 === 0) element.textContent = i; //3, 6, 9가 없는 경우
    else element.textContent = '👏'.repeat(num369); //3, 6, 9가 있는 경우
}