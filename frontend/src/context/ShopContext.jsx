import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'Lkr';
    const delivery_fee = 10; // Fixed spelling mistake

    const value = {
        products,
        currency,
        delivery_fee // Updated spelling
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
