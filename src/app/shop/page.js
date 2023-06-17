import {getProducts} from "@/services/products";
import Shop from "@/components/shop/Shop";

export default async function ShopPage() {
   const products = await getProducts();
   return (
      <Shop products={products}/>
   )
}