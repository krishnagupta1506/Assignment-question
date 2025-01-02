let arr = [
    [1,2],
    [3,4],
    [5,6]
]
let str = ''

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j<arr[i].length; j++){
        str = str + ' ' + arr[i][j]
    }
    console.log(str + ' ')
    str = ''
}
