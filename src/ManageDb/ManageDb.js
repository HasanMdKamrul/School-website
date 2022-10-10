// ** get data fron local Storage

const getDataFromLs = ()=>{
    const savedData = JSON.parse(localStorage.getItem('shopping-cart'));

    let cart = {};

    savedData && (cart = savedData);

    return cart;
}


// ** Set data to local Storage

const setDataToLocalStorage = (id)=>{
    // ** get data from ls
    const savedData = getDataFromLs();

    if (id in savedData) {
        savedData[id] = savedData[id] + 1;
        localStorage.setItem('shopping-cart', JSON.stringify(savedData));

    } else{
        savedData[id] = 1;
        localStorage.setItem('shopping-cart', JSON.stringify(savedData));
    }

};


// ** Items remove from cart

const removeDataFromLs = (id)=>{
    const storedCart = getDataFromLs();

    if (storedCart){
        if (id in storedCart) {
            delete storedCart[id];
    
            localStorage.setItem('shopping-cart',JSON.stringify(storedCart));
        }
    }
    

}

// ** reset the localStorage

const resetLocalStorage = ()=>{
    localStorage.removeItem('shopping-cart')
}

export { getDataFromLs, setDataToLocalStorage, removeDataFromLs, resetLocalStorage };

