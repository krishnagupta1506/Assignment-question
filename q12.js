let arr = [
    [1,2],
    [3,4],
    [5,6]
]
let str = ''
for(let i = 0; i<arr.length;i++){
    for(let j = 0; j<arr[i].length; j++){
        let sum = 0
        sum = i + j
        str = str + ' ' + sum
    }
    console.log(str)
    str= ''
}
