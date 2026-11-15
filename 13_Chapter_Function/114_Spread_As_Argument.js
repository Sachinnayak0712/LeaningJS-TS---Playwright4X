function add(a, b, c, d) {
     return a + b + c + d;
}

let num = [1, 2, 3, 5];
console.log(add(...num));

// ----
function hasError(...codes) {
    return codes.some(c => c > 500);
}

let responseCodes = [200, 201, 404];
let responseCodes2 = [200, 201, 404, 500];
console.log("Has API arror " + hasError(...responseCodes2));