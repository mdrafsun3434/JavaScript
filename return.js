function tenTimes(number) {
    const result = number * 10
    return result
}

tenTimes(5);
const output = tenTimes(5);
console.log('output', output);




function add(price1, price2) {
    const total = price1 + price2;
    return total

}
const bill = add(5, 15);
console.log(bill);


function add2 (price1, price2){
    return price1 + price2;
}
const bill2 = add2(23,23);
console.log(add,add2);




function evenSizedString(str){
    const size = str.length;
    console.log(str,size)
}
evenSizedString('Dhaka');
evenSizedString('faka');



function doubleOrTriple( number,doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;

    }
    else{
        const result = number *3;
        return result

    }
}

 console.log (doubleOrTriple(5,true));
console.log (doubleOrTriple(5,false));

// Array 
function sumOfNumbers (numbers){
    let sum = 0;
    for (const number of numbers){
        console.log(number)
        sum = sum +number;
        
    }
    return sum;
    
}
const numbs = [54,63,13,7];
const sum = sumOfNumbers(numbs)
console.log('sum of numbers is', sum);