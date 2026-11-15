let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);

// Concatination using spread(Modern Way)
let d = [...a,...b];
console.log(d)