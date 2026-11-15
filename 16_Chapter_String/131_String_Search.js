let url = "https://staging.vwo.com/api/login?retry=true";

console.log(url.includes("staging"));  
console.log(url.includes("production"));

// startsWith / endsWith
console.log(url.startsWith("https"));
console.log(url.startsWith("http://")); 
url.endsWith("true"); 

// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));

