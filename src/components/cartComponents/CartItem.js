import Cookies from 'js-cookie';

const CartItem = ({cartItem, setCart}) => {
   const removeCartHandler = () => {
      const existingProducts = Cookies.get('products');
      let productsArray = [];
      if (existingProducts) {
         productsArray = JSON.parse(existingProducts);
      }
      // Find the index of the product in the array
      const productIndex = productsArray.findIndex((product) => product.id == cartItem.id);
      if (productIndex !== -1) {
         productsArray.splice(productIndex, 1);
      }
      setCart((prevCart) => {
         prevCart.filter((item) => item.id !== cartItem.id);
      });
      Cookies.set('products', JSON.stringify(productsArray), {
         expires: 2,
         path: '/',
      });
   }
   return (
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img src={cartItem?.image} className="w-28 h-28" alt="product"/>
         </th>
         <td className="px-6 py-4">
            {cartItem?.title}
         </td>
         <td className="px-6 py-4">
            {cartItem?.price} $
         </td>
         <td className="px-6 py-4">
            <button
               onClick={removeCartHandler}
               type="button"
               className="inline-block rounded-full bg-danger px-4 py-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
               Remove
            </button>
         </td>
      </tr>
   );
};

export default CartItem;