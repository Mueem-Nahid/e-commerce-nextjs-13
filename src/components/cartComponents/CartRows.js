"use client"

import {useEffect, useState} from 'react';
import CartItem from "@/components/cartComponents/CartItem";
import Cookies from "js-cookie";

const CartRows = () => {
   const [cart, setCart] = useState([]);

   useEffect(() => {
      Cookies.get('products') && setCart(JSON.parse(Cookies.get('products')));
   }, [cart?.length])
   return (
      <div className="flex flex-col max-w-6xl mx-auto mt-5">
         <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
               <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                     <thead className="border-b font-medium dark:border-neutral-500">
                     <tr>
                        <th scope="col" className="px-6 py-4">Product</th>
                        <th scope="col" className="px-6 py-4">Title</th>
                        <th scope="col" className="px-6 py-4">Price</th>
                        <th scope="col" className="px-6 py-4">Action</th>
                     </tr>
                     </thead>
                     <tbody>
                     {
                        cart?.length > 0 && cart.map((cartItem) => (
                           <CartItem key={cartItem.id} cartItem={cartItem} setCart={setCart}/>
                        ))
                     }
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartRows;