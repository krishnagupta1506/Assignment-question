let task =  ['assignment', 'classes', 'cooking', 'running', 'meditation']

for(let i = 0; i<task.length; i++){
    if(i == 0){
        task[i] = 'exercise'
    }
    if(i == 1){
        task[i] = 'breakfast'
    }
    if(i == task.length-1){
        task[i] = 'reading'
    }
}
console.log(task)


