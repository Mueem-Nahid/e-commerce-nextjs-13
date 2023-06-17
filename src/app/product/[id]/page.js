import {getProduct} from "@/services/products";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default async function ProductPage({params}){
   const productId = params.id;
   const productDetails = await getProduct(productId);

   return (
      <section>
         <ProductDetails productDetails={productDetails} />
      </section>
   )
}