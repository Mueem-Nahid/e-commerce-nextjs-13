import React from 'react';
import Link from "next/link";

const ProductRow = ({product}) => {
   return (
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img src={product?.image} className="w-28 h-28" alt="product"/>
         </th>
         <td className="px-6 py-4">
            {product?.title}
         </td>
         <td className="px-6 py-4">
            {product?.price} $
         </td>
         <td className="px-6 py-4">
            <Link href={`/product/${product.id}`}
               type="button"
               className="inline-block rounded-full bg-success px-4 py-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
               View
            </Link>
         </td>
      </tr>
   );
};

export default ProductRow;