let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);

browser.pop();
console.log(browser);

let removed = browser.shift();
console.log(removed);
console.log(browser);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "firefox") {
        console.log("Firefox is used for Automation testing now!");
    }
}