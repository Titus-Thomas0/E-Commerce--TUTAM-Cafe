// pages/OrderCustomize.jsx
import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import BreadCrumbs from '../BreadCrumbs';

function OrderCustomize() {
  const { productName } = useParams(); // e.g., "cold-coffee"
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="p-10">
        <h2 className="text-xl font-bold">No product details found for "{productName}"</h2>
        <button
          className="mt-4 text-[var(--color-accent)] underline"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 text-[var(--color-primary)]">
      <BreadCrumbs />

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <img
          src={product.dialogImage || product.image}
          alt={product.name}
          className="w-full md:w-1/2 object-cover rounded-xl"
        />

        <div className="flex flex-col justify-between md:w-1/2">
          <div>
            <img
              src={product.isVeg ? 'src/assets/icons/veg.svg' : 'src/assets/icons/non-veg.svg'}
              alt="veg"
              className="w-5 h-5 mb-2"
            />
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <small className="text-sm text-gray-500">{product.size} - {product.calories} kcal</small>
            <p className="mt-4 text-sm">{product.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold">&#8377; {product.price}</h3>
            <button className="mt-3 px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCustomize;