export const addCart = (cart, product, quantity=false,quantityValue=0) => {
   let prevCart ={...cart};

   if(prevCart.items.length >0){
    let itemExixts =prevCart.items.find(item=>item.id=== product.id);
    let itemExixtsIndex =prevCart.items.findIndex(item=>item.id=== product.id);

        if(itemExixts) {
            if(quantity) {
                console.log(quantityValue);
                if(quantityValue <= 0) {
                    console.log(quantityValue, itemExixtsIndex);
                    prevCart.items.splice(itemExixtsIndex, 1)    

                    console.log(prevCart);
                }else {
                    prevCart.items.splice(
                        itemExixtsIndex, 1, {...itemExixts, quantity: quantityValue}
                    )
                }
            }else {
                prevCart.items.splice(
                    itemExixtsIndex, 1, {...itemExixts, quantity: itemExixts.quantity + 1}
                )
            }
        } else {
            prevCart.items.push({...product, quantity: 1})
        }
    }else {
        prevCart.items.push({...product, quantity: 1});
    }

    prevCart.subTotal = 0;
    prevCart.tax = 0;
    prevCart.grandTotal = 0;

    for (const item of prevCart.items) {
        prevCart.subTotal += (parseFloat(item.price) - ((parseFloat(item.discount) / 100) * parseFloat(item.price))) * item.quantity; 
        prevCart.grandTotal = prevCart.tax + prevCart.subTotal; 
    }


   return prevCart;

   }