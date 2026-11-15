const greet = (score_Count) => {
    if(score_Count > 70) return "Pass";
    return "Fail"
}

console.log(greet(45));
console.log(greet(85));