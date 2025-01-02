// tese case - 1
// let principle_Amt = 1000;
// let rate = 5;
// let time = 3;

// tese case - 2
// let principle_Amt = 1500;
// let rate = 7;
// let time = 5;

// tese case - 3
// let principle_Amt = 0;
// let rate = 6;
// let time = 2;

// edge case-1
// let principle_Amt = 0;
// let rate = 7;
// let time = 5;

// edge case - 2

// let principle_Amt = -10;
// let rate = 7;
// let time = 5;



if(principle_Amt == 0 ){
    rate = 0
    let simple_interest = (principle_Amt*rate*time)/100
    console.log(`The simple interest is: ${simple_interest}.0`)

}else if(principle_Amt<0 || rate<0 || time<0){
    console.log("Invalid input, all values must be non-negative.")
}else{
    let simple_interest = (principle_Amt*rate*time)/100
    console.log(`The simple interest is: ${simple_interest}.0`)
}

