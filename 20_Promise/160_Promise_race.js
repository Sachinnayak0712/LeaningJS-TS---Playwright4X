let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast time 100ms")
    }), 100
});

let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast time 500ms")
    }), 500
});



Promise.race([fastServer, slowServer]).then(function (winner) {
    console.log("Winner:", winner);
})