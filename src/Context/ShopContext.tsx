import React, { createContext } from 'react'
import all_product from '../Components/Assets/all_product';
// import all_product from '../Components/Assets/all_product.js';


export const ShopContext = createContext<{ all_product: any } | null>(null);
const ShopContextprovider=(props:any)=>{
    const contextValue={all_product};
    return(
       < ShopContext.Provider value={contextValue as { all_product: any } | null}>
            {props.children}

        </ShopContext.Provider>
    )
}
export default ShopContextprovider;

