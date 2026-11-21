function calculateTotalCost(price, quantity, taxRate){
    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)){
        console.log("Invalid input");
    } else{

    let totalCost = (price * quantity) * (1 + taxRate);
    console.log(`Your total cost is $${totalCost}`);
}
}

calculateTotalCost(100,2,"s")
calculateTotalCost(100,2,0.5)