export const getProducts = async () => {
   const response = await fetch(
      `https://fakestoreapi.com/products`,
      {next: {revalidate: 10}}
   );
   if (!response.ok) {
      throw new Error('Failed to fetch data')
   }
   return await response.json();
}

export const getProduct = async (id) => {
   const response = await fetch(
      `https://fakestoreapi.com/products/${id}`,
      {next: {revalidate: 10}}
   );
   if (!response.ok) {
      throw new Error('Failed to fetch data')
   }
   return await response.json();
}