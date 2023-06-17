"use client"

import Cookies from 'js-cookie';
import {useState} from "react";
import dynamic from "next/dynamic";

const ToastComponent = dynamic(() => import("../toast/ToastComponent"), { ssr: false });

const AddToCart = ({productDetails}) => {
   const [showToast, setShowToast] = useState(false);
   const addToCartHandler = () => {
      const existingProducts = Cookies.get('products');
      let productsArray = [];
      if (existingProducts) {
         productsArray = JSON.parse(existingProducts);
      }
      // Check if the product already exists in the array
      const isProductExisting = productsArray.some((product) => product.id === productDetails.id);
      if (!isProductExisting) {
         productsArray.push(productDetails);
         setShowToast(true);
      }
      Cookies.set('products', JSON.stringify(productsArray), {
         expires: 2,
         path: '/',
      });
   }
   return (
      <div>
         <button
            onClick={addToCartHandler}
            type="button"
            className="inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init="">
            Add to cart
         </button>
         {
            showToast && <ToastComponent/>
         }
      </div>
   );
};

export default AddToCart;