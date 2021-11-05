// alert(add(90, 120));
// alert(m(80, 10));

// function add(v1, v2) {
//     return v1 + v2;
// }

// console.log('함수호출' + add(10, 30));

// const m = function(x1, x2) {return x1 * x2};

// console.log(m(9, 8));

// function f(x) {
//     fact = 1;
//     for (i = 1; i <= x; i++) {
//         return fact;
//     }
// }

let f = (x) => {
    let fact = 1;
    for (i = 1; i <= x; i++) {
        fact *= i;
    }
    return fact;
}

let x = function(x) {
    let fact = 1;
    for (i = 1; i <= x; i++) {
        fact *= i;
    }
    return fact;
}

alert(f(3));
alert(x(3));
