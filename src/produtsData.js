const productsArray = [
    {
        id: 'price_1NbkmNFyH2nx9ZXqArk6VvSE',
        title: "Coffee",
        price: "4.99"
    },
    {
        id: 'price_1NbknkFyH2nx9ZXqcuc7ek9r',
        title: "Headset",
        price: "59.99"
    },
    {
        id: 'price_1NbkpWFyH2nx9ZXq6gy1SpQP',
        title: "Keystroker",
        price: "89.99"
    },
    {
        id: 'price_1NbkqaFyH2nx9ZXqBGBAQpel',
        title: "WatterBottle",
        price: "18.99"
    },
    {
        id: 'price_1Nbkr0FyH2nx9ZXqp6ZI8WUx',
        title: "Hoddie",
        price: "99.99"
    },
    {
        id: 'price_1NbkruFyH2nx9ZXq2lRvWMFW',
        title: "WinePine",
        price: "9.99"
    },


]

const getProductData = (id) => {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data doesn't exist for ID: ", id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData};