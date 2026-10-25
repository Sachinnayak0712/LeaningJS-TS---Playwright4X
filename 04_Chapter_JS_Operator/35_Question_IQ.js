let statusCode = 401;
let category =
    statusCode < 200 ? "Success" :
        statusCode < 401 ? "Redirect" :
            statusCode < 402 ? "Client Error" : "Server Error";



console.log(`Status ${statusCode}: ${category}`);