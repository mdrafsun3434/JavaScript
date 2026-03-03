const prices = [20000,400000,4545533,3243242,2453215,4534214312];
 function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        console.log(num);
        if(num < min){
            min = num;
        }
    }
    // console.log(numbers);
    return min;
 }
 const cheap = getMin(prices);
 console.log("The cheapest price is: " + cheap);



 const phones =[
    {name:'samsung',price:20000, camera:'12mp', color:'black'},
    {name:'apple',price:40000, camera:'16mp', color:'white'},
    {name:'oppo',price:15000, camera:'8mp', color:'blue'},
    {name:'xoami',price:15000, camera:'8mp', color:'blue'},
    {name:'vivo',price:15000, camera:'8mp', color:'blue'}
 ]
  function getMax (phones){
    let max = phones [0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    // console.log(phones);
    return max;
  }
  const maxPrice = getMax(phones);
  console.log("The most expensive phone is: ", maxPrice);