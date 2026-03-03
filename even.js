function evenNumbersOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
        // console.log(number);
    }
    return evens;
        }

const numbers = [23,22,16,7,8];
const evens = evenNumbersOnly(numbers);
console.log(evens)
