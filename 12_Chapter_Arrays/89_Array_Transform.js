let scores = [45, 82, 91, 60, 73];

let grades = scores.map(i => i > 60 ? "Pass" : "Fail");
console.log(grades);

// Filter
let passing = scores.filter(s => s >= 60);
console.log(passing);