import HeroSection from "@/components/heroSection/HeroSection";
import FeaturedSection from "@/components/featuredSection/FeaturedSection";
import {getProducts} from "@/services/products";

export default async function Home() {
   const products = await getProducts();
   return (
      <main>
         <HeroSection/>
         <FeaturedSection products={products}/>
      </main>
   )
}
