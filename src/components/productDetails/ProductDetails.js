import Rating from "@/components/rating/Rating";
import AddToCart from "@/components/cart/AddToCart";


const ProductDetails = ({productDetails}) => {
   return (
      <div className="w-full mt-5">
         <div
            className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
            <img
               src={productDetails?.image}
               className="rounded-lg w-full max-h-96"
               placeholder="blur"
               alt="product image"
            />
            <div className="p-2">
               <h2 className="text-lg mb-3 font-bold">
                  {productDetails?.title}
               </h2>
               <p className="text-lg mb-3">
                  <span className="font-semibold mr-1">Summary:</span>
                  {productDetails?.description}
               </p>
               <p className="text-lg mb-3">
                  <span className="font-semibold mr-1">Price:</span>
                  {productDetails?.price}$
               </p>
               <p className="mb-3 flex items-center">
                  <span className="text-lg font-semibold mr-1">Rating:</span>
                  <Rating rating={productDetails?.rating}/>
               </p>
               <AddToCart productDetails={productDetails}/>
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;