import Products from "@/components/dashboard/Products";
import {getProducts} from "@/services/products";

export default async function ProductsPage() {
   const products = await getProducts();
   return (
      <Products products={products}/>
   )
}