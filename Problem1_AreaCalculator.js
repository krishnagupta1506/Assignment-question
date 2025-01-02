// test case-1 and output will be (The area of the triangle is: 25)
// let base = 10;
// let height = 5;

// test case-2 and output will be (The area of the triangle is: 0)
// let base = 0;
// let height = 15;

// test case-3 and output will be (The area of the triangle is: 0)
// let base = 8;
// let height = 0; 

// edge case 1: and output will be (The area of the triangle is: 0)
// let base = 0;
// let height = 0; 


// edge case 1: and output will be (The area of the triangle is: 0)
// let base = 0;
// let height = 0; 


if(base<0 || height < 0){
    console.log('Invalid number, base and height must be positive numbers.')
}else{
    let area_of_triangle = (base*height)/2
    let X = area_of_triangle
    
    console.log(`The area of the triangle is: ${X.toFixed(2)}`)
}



