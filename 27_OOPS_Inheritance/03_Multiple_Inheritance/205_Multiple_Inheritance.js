// Mixin concept can help you to perform the multiple inheritance. 
// Mixin 1: Adds logging ability

let LoggerMixin = function (Base) {
    return class extends Base {
        log(msg) {
            console.log("[Log] " + msg);
        }
    }
}

let ScreenshotMixin = function (Base) {
    return class extends Base {
        takeScreenshot() {
            console.log("[SCREENSHOT] captured");
        }
    };
};

// Base class
class TestCase {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log("Running: " + this.name);
    }
}

// Apply BOTH mixins
class SmartTest extends ScreenshotMixin(LoggerMixin(TestCase)) {
    constructor(name) {
        super(name);
    }
}

let test = new SmartTest("Login Flow");
test.run();
test.log("Test started");
test.takeScreenshot();