let arr = [
    [1,2,3,4,5],
    [6,7,8,9,1],
    [3,2,5,4,6],
    [7,8,9,1,2]
]
let str = ''

for(let i = 0; i<arr.length; i++){
    if(i%2==0){
        for(let j = arr[i].length-1; j>=0;j--){
            str = str + ' ' + arr[i][j]
        }
    }else{
        for(let k = 0; k<arr[i].length; k++){
            str = str + ' ' + arr[i][k]
        }
    }
}
console.log(str)