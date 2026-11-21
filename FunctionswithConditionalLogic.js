function checkEligibility (age, isEmployed){
    if (age > 18 && isEmployed === true){
        console.log("You are eligible for the program.");
    } else if (age > 18 && isEmployed === false){
        console.log("You are conditionally eligible for the program.")
    } else {
        console.log("You are not eligble for the program.")
    }
}

checkEligibility(19, true);
checkEligibility(19, false);
checkEligibility(18);