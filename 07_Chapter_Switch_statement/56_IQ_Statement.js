// | Score Range | Grade | Performance       |
// | ----------- | ----- | ----------------- |
// | 91–100      | A     | Excellent         |
// | 81–90       | B     | Very Good         |
// | 71–80       | C     | Good              |
// | 61–70       | D     | Average           |
// | 50–60       | E     | Needs Improvement |
// | 0–49        | F     | Fail              |


let testScore = 0;

switch(true){
    case(testScore > 100):
        console.log("Invalid Score");
        break;
    case(testScore >= 91 && testScore <= 100):
        console.log("Grade A - Excellent");
        break;
    case(testScore >= 81 && testScore <= 90):
        console.log("Grade B - Very Good");
        break;
    case(testScore >= 71 && testScore <= 80):
        console.log("Grade C - Good");
        break;
    case(testScore >= 61 && testScore <= 70):
        console.log("Grade D - Average");
        break;
    case(testScore >= 51 && testScore <= 60):
        console.log("Grade E - Needs Improment");
        break;
    case(testScore > 0 && testScore <= 490):
        console.log("Grade F - Fail");
        break;
    default:
        console.log("Unsatisfactory — Requires training");
}