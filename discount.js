function discountedPrice(quantity){
    if(quantity <=100){
        const total = quantity * 100;
        return total;
    }
    else if ( quantity <=200){
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 80;
        return total;
    }
}
 const totalPrice = discountedPrice(150);
    console.log(totalPrice);




    function discountedPrice2(quantity){
        const first100Price = 100;
        const second100Price = 90;
        const third200Price = 80;
        if(quantity <=100){
            const total = quantity * first100Price;
            return total;
        }
        else if (quantity <=200){
            const first100Total = 100 * first100Price;
            const remaining = quantity -100;
            const remainingTotal = remaining * second100Price;
            const total = first100Total + remainingTotal;
            return total;
        }
        else{
            const first100Total = 100 * first100Price;
            const second100Total = 100 * second100Price;
            const remainingQuantity = quantity - 200;
            const remainingTotal =remainingQuantity * third200Price;
            const total = first100Total + second100Total + remainingTotal;
            return total;
        }
        
      

    }

      const totalPrice2 = discountedPrice2(250);
        console.log(totalPrice2);

        
