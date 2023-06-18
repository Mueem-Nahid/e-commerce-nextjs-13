import Link from "next/link";
import Rating from "@/components/rating/Rating";

const ProductCard = ({product, newProduct}) => {
   return (
      <div className="bg-white border rounded-lg overflow-hidden m-5">
         <div className="">
            <img src={product.image} className="h-96 w-full "  alt="image"/>
         </div>
         <div className="p-6">
            <div className="flex items-baseline">
               {
                  newProduct && <span
                     className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">New</span>
               }
               <div className={`${newProduct && 'ml-2'} text-gray-600 text-xs uppercase font-semibold tracking-wide`}>
                  {product.category}
               </div>
            </div>
            <Link href={`/product/${product.id}`} className="cursor-pointer hover:underline">
               <h4 className="mt-1 font-semibold text-lg leading-tight truncate">{product.title}</h4>
            </Link>
            <div className="mt-1">
               {product.price}
               <span className="text-gray-600 text-sm">$</span>
            </div>
            <div className="mt-2 flex items-center">
               <Rating rating={product?.rating}/>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;