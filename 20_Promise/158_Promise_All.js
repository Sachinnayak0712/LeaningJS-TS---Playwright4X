let checkAuth = Promise.resolve("Authintication Ok");
let checkDB = Promise.resolve("DataBase OK");
let checkCache = Promise.resolve("Cache data OK");


Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);
})


Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); })
    .catch(function (err) { console.log("Failed:", err); });