// test case-1
// let value_in_dollar = 25

// test case-2
// let value_in_dollar = 20

// test case-3
// let value_in_dollar = 15

// edge case 1
// let value_in_dollar = -30


let price = value_in_dollar

if(price>20){
   finalprice = price*90/100
    console.log(`The final price of the item is: $${finalprice}`)

}else if(price == 20){
    console.log(`no discount applied`)

}else if(price<0){
    console.log('Invalid price, the price must be a non-negative number.')

}else{
    console.log(`The final price of the item is: $${price}`)
}