import React, { useContext } from 'react';
import { CardDataContext } from '../ClassDetails/ClassDetails';
import { PriceContext } from '../OrderSummary/OrderSummary';

const Pricing = () => {
    const price = useContext(PriceContext);
    const [cart] = useContext(CardDataContext);
   
   
    return (
        <div>
            <h1 className='text-xl text-blue-700'>Total Price: {price}</h1>
            {
                cart.length > 0 ? <h1>Items Avaiable</h1> : <h1>No Items Found</h1>
            }
        </div>
    );
};

export default Pricing;