function placeOrder(item, callback){
    console.log("Placing an order");
    console.log("Order Placed", item);
    callback();
}

// First Way
function CompleteOrderPrint(){
    console.log("Normal Fn");
}

placeOrder("Burger", CompleteOrderPrint);


// Sencond Way way
placeOrder("Burger", function(){
    console.log("Order is ready!, pick it up!");
});


// Third Way using Arrow Function
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});

