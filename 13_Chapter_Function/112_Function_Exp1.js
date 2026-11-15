// Function Declaration

function statusAPICode(status_code){
    if(status_code >= 200 && status_code <=300){
        console.log("Request is fine!");
    }
}

// Function Expression

const statusAPICode_Exp = function(status){
    if(status >= 200 && status <=300){
        console.log("Request is fine!");
    }
}

// Arrow Function

const statusAPICode_Arrow = (status) => {
     if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}


statusAPICode(200);
statusAPICode_Arrow(200);
statusAPICode_Exp(200);
