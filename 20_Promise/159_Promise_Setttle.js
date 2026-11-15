Promise.allSettled([
    Promise.resolve("Test case A Passed!"),
    Promise.reject("Test case B failed"),
    Promise.resolve("Test case C passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
})