let temparature = 39;
let current_temparature = (temparature >= 40) ? "Very Hot" :
    (temparature >= 30) ? "Hot" :
        (temparature >= 20) ? "Warm" :
            (temparature >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temparature, "| Feel:", current_temparature);