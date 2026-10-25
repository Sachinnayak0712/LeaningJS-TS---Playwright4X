let responseTime_is = 650; 
let time_period = 4000;         
let slaStatus = responseTime_is <= time_period ? "Within SLA" : "SLA breached ";
console.log(`Response: ${responseTime_is}ms — ${slaStatus}`);

let responseTime_is1 = 6500; 
let time_period1 = 4000;      
let slaStatus1 = responseTime_is1 <= time_period1 ? "Within SLA" : "SLA breached ";
console.log(`Response: ${responseTime_is1}ms — ${slaStatus1}`);

// Template Literal
console.log(`What is the SLA time ? - ${slaStatus}`);
console.log(`What is the SLA time ? - ${slaStatus1}`);

