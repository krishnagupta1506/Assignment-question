let score = [10,20,30,40,91,60,95,50,80,75]
let count = 0
for(let i =0; i<=score.length; i++){
    if(score[i] < 40){
        score[i] = score[i]+20
    }else if(score[i]>50){
        count++
    }
    else if(score[i]>=90){
        score[i] = 90
    }
}
console.log(score)
console.log(`student pass: ${count}`)
