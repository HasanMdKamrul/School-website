// ** This function will return us the products and the storedCart in the localStorage

import { getDataFromLs } from "../ManageDb/ManageDb";


export const getProductsAndStoredCart = async () =>{
    const productsData = await fetch(`/classes.json`);
    const products = await productsData.json();

    // ** get the initial id and quantity from the localStorage

    const storedCart = getDataFromLs();

    const initialCart = [];

    for (const id in storedCart) {
        const storedProductInLs = products.find(item => item._id === id);

        if (storedProductInLs) {
            storedProductInLs.quantity = storedCart[id];
            initialCart.push(storedProductInLs);
        }

    }


    return {products,initialCart};
    

}