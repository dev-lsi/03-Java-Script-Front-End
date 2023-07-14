function addNewDelivery(currStock, deliveryStock) {

    //const allProducts = (currStock + ',' + deliveryStock).split(',');
    
    const allProducts=[...currStock,...deliveryStock];
   

    const storage = allProducts.reduce((acc, curr, index) => {

        if (index % 2 === 0) {

            const currProduct = allProducts[index];
            //console.log(currProduct)//................
            const currQuantity = allProducts[index + 1];
            //console.log(currQuantity)//...............

            if (!acc.hasOwnProperty(currProduct)) {
                acc[currProduct] = 0;
            }

            acc[currProduct] += Number(currQuantity);
            
            
            
        }

        return acc;

    }, {});

    const sortedKeysList = (Object.keys(storage)).sort();
    
    sortedKeysList.forEach(element=>{
        console.log(`${element} -> ${storage[element]}`);
    });


    

}

addNewDelivery(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);