let environment = "testing";
let baseUrl = environment === "production"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);

let baseUrl2 = environment === "testing"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
    console.log(baseUrl2)