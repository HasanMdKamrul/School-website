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

export { getDataFromLs, setDataToLocalStorage };
