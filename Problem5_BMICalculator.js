// test case - 1
// let weight_in_kg = 70;
// let height_in_cm = 1.75;

// test case - 2
// let weight_in_kg = 55;
// let height_in_cm = 1.60;

// test case - 3
// let weight_in_kg = 90;
// let height_in_cm = 1.80;

// edge case 1:
// let weight_in_kg = 70;
// let height_in_cm = 1.75;

if(height_in_cm == 0 || weight_in_kg == 0 || height_in_cm<0 || weight_in_kg<0){
    console.log("Invalid input, height cannot be zero.")
}else{
    let BMI = weight_in_kg/(height_in_cm * height_in_cm)
console.log(`Your BMI is: ${BMI}`)
}




