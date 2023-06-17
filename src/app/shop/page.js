import {getProducts} from "@/services/products";
import Shop from "@/components/shopComponent/Shop";

export default async function ShopPage() {
   const products = await getProducts();
   return (
      <Shop products={products}/>
   )
}