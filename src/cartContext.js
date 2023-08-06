import { createContext, useState } from "react";
import { productsArray, getProductData } from "./produtsData";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    // fucntion to get quantity of items
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if(quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    // function to add one item to cart
    function addOneToCart (id) {
        const quantity = getProductQuantity(id);

        if(quantity === 0) {
            setCartProducts(
                [...cartProducts, {id: id, quantity: 1}]
            );
        } else {
            setCartProducts(
                cartProducts.map(product => product.id === id ? {...product, quantity: product.quantity + 1} : product)
            )
        }
    }

    // function to delete item from cart
    function deleteFromCart(id) {
        setCartProducts(cartProducts => cartProducts.filter(currentProduct => {
            return currentProduct.id !== id;
        }));
    }

    // function to remove form cart
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(product => product.id === id ? {...product, quantity: product.quantity - 1} : product)
            )
        }
    }


    // function to get totalCost
    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });

        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }


    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
        
    )
}