function formatFullName(firstName, lastName){
    if (!lastName || !firstName){
        console.log("Invalid name input.")
} else{

    let firstName = firstName[0].toUpperCase() + firstName.slice(1);
    let lastName = lastName[0].toUpperCase() + lastName.slice(1);
    console.log(`${lastName}, ${firstName}`)

}
}

formatFullName("tristen", "gallardo");
