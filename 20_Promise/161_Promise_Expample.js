Promise.reject("Test failed")
    .then(function (data) {
        console.log("Data:", data);
    })
    .catch(function (err) {
        console.log("Error:", err);
    })
    .finally(function () {
        console.log("Cleanup done");
    });


let pro = new Promise(function (resolve, reject) {
    resolve(42);
});
pro.then(function (value) {
    console.log("Answer:", value);
});

let pro1 = new Promise(function (resolve, reject) {
    reject("Something broke");
});

pro1.catch(function (err) {
    console.log("Caught:", err);
});
let pro2 = Promise.resolve(5);

pro2.then(function (val) {
    return val * 10;
}).then(function (val) {
    console.log("Result:", val);
});
Promise.resolve(1)
    .then(function (val) {
        console.log(val);
        return val + 1;
    })
    .then(function (val) {
        console.log(val);
        return val + 1;
    })
    .then(function (val) {
        console.log(val);
    });

Promise.resolve("start")
    .then(function (val) {
        console.log(val);
        throw new Error("Broke at step 2");
    })
    .then(function () {
        console.log("This will NOT run");
    })
    .catch(function (err) {
        console.log("Caught:", err.message);
    });