function checkAPIstatus(code){
    if(code >= 200 && code < 300){
        return "Success";
    } 
    else if(code >= 400 && code < 500){
        return "client Error";
    }
    else if (code > 500){
        return "Server error";
    }
    else{
        return "Unknown";
    }
}

console.log(checkAPIstatus(200));
console.log(checkAPIstatus(404));