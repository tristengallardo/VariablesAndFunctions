function calculateTotalCost(price, quantity, taxRate, discount = 0){
    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)){
        console.log("Invalid input");
    } else{
        let totalCost = ((price * quantity) - discount) * (1 + taxRate);
        console.log(`Your total cost is $${totalCost}`);
}
}

calculateTotalCost(100, 2, 0.5, 20);
calculateTotalCost(100, 2, 0.5);