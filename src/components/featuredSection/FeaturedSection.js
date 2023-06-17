import ProductCard from "@/components/productCard/ProductCard";

const FeaturedSection = ({products}) => {
   return (
      <section className="container my-24 mx-auto md:px-6">
         <div className="mb-32 text-center">
            <h2 className="mb-16 text-3xl font-bold">
               New Products
            </h2>
            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
               {
                  products.slice(0, 6).map((product) => (
                     <ProductCard key={product.id} product={product} newProduct/>
                  ))
               }
            </div>
         </div>
      </section>
   );
};

export default FeaturedSection;