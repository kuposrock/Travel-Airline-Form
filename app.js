var submit = document.getElementById("submit");

function formAlert() {
    var firstName = document.airlineForm.firstName.value;
    var lastName = document.airlineForm.lastName.value;
    var age = document.airlineForm.age.value;
    var gender = document.airlineForm.gender.value;
    var location = document.airlineForm.travelLocation.value;
    var diet = [];
    if (document.airlineForm.vegan.checked) {
        diet.push(document.airlineForm.vegan.value);
    }
    if (document.airlineForm.gluten.checked) {
        diet.push(document.airlineForm.gluten.value);
    }
    if (document.airlineForm.paleo.checked) {
        diet.push(document.airlineForm.paleo.value);
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nHave a safe flight.");
}

submit.addEventListener("click", function(){
    formAlert();
});
