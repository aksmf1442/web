const a = [10, 30, 50, 100, 70]; // 배열선언과 초기화
const b = new Array(60, 80, 90, 20);

// console.log(a);
// console.log(b);

let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log('합=' + sum);
for (let val of b) {
    console.log(val);
}
// 배열 조작하는 메서드

b.push(300);
b.push(500);
console.log(b);
b.pop();
console.log(b);
b.unshift(77);
console.log(b);
console.log(b.indexOf(90));
console.log(b.includes(80));
