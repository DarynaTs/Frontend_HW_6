// Задача1. Написать функцию, которая аргументами получается 
// два числа и возвращает большее из них.


function numberOne (a,b){
    if (a>b){
        return a
    } else{
        return b
    }
    }
    console.log(numberOne(10,5))

// Задача2. Написать функцию, которая принимает аргументом число(больше 0)
// и возвращает массив чисел от 0 до этого числа
numberTwo()
let c = 8
function numberTwo(c){
    let result = []
    for( i = 0; i < c ; i++){
        result.push(i)
    }
    console.log(result)
}



