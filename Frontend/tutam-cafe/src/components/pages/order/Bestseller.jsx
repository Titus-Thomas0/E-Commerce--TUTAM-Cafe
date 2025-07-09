import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function Bestseller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products/bestseller') // Update your backend endpoint as needed
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to load products", err));
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-10">
      <div>
        <h3 className="text-xl font-bold">Bestseller</h3>
        <p className="text-base font-normal">
          Everyone's favorite TUTAM Cafe put together in a specially curated collection.
        </p>
      </div>

      <div className="flex flex-wrap justify-start gap-6 my-10">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Bestseller;
