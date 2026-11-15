// Promise Resolved

let apiCall = new Promise(function(resolve,reject){
           resolve({status : 200, body : "User Data"});
});


apiCall.then(function(response){
    console.log(response); 
});

/* Execution Flow
A Promise object is created.
resolve() is called immediately.
The Promise state becomes fulfilled.
.then() receives the resolved value.
*/

// Promise Rejected
let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");
});

testRun.then(function (data) { 
    console.log(data);
}).catch(function (error) { 
    console.log(error);
});

/*
Execution Flow
 A Promise object is created.
reject() is called immediately.
The Promise state becomes rejected.
.then() is skipped.
.catch() receives the error.
*/