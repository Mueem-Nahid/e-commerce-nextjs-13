import ProductCard from "@/components/productCard/ProductCard";


const Shop = ({products}) => {
   return (
      <section className="container mt-5 mx-auto md:px-6">
         <div className="mb-32 text-center">
            <h2 className="mb-16 text-3xl font-bold">
               All Products
            </h2>
            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
               {
                  products.map((product) => (
                     <ProductCard key={product.id} product={product}/>
                  ))
               }
            </div>
         </div>
      </section>
   );
};

export default Shop;