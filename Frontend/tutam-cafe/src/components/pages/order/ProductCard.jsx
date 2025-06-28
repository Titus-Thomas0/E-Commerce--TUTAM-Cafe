// components/ProductCard.jsx
import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddItem = () => {
    const urlName = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/Order/Customize/${urlName}`, { state: { product } });
  };

  return (
    <>
      <div className="bg-[var(--color-background)] rounded-lg flex flex-col sm:flex-row w-full max-w-md boxShadow">
        <div className="p-4 flex justify-center items-center">
          <button onClick={() => setIsOpen(true)}>
            <img
              src={product.image}
              alt={product.name}
              className="w-32 sm:w-40 h-32 sm:h-40 object-cover rounded-full"
            />
          </button>
        </div>

        <div className="flex flex-col justify-between p-4 flex-grow">
          <div>
            <img src={product.isVeg ? 'src/assets/icons/veg.svg' : 'src/assets/icons/non-veg.svg'} alt="icon" className="w-4 h-4" />
            <h5 className="font-bold">{product.name}</h5>
            <small className="text-xs font-light">{product.size} - {product.calories} kcal</small>
            <p className="text-xs line-clamp-2">{product.description}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <h5 className="font-bold">&#8377; {product.price}</h5>
            <button
              onClick={handleAddItem}
              className="rounded-full bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary)] outline outline-1 px-3 py-2"
            >
              Add Item
            </button>
          </div>
        </div>
      </div>

      {/* Product Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="bg-[var(--color-background)] rounded-xl w-full max-w-2xl shadow-xl overflow-hidden text-[var(--color-primary)]">
            <div className="w-full h-[300px] sm:h-[400px] overflow-hidden">
              <img
                src={product.dialogImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="my-6 mx-5 space-y-3">
              <img src={product.isVeg ? 'src/assets/icons/veg.svg' : 'src/assets/icons/non-veg.svg'} alt="veg" className="w-4 h-4" />
              <DialogTitle className="text-xl font-bold">{product.name}</DialogTitle>
              <small className="text-xs font-light">{product.size} - {product.calories} kcal</small>
              <div>
                <small className="font-medium text-sm">Milk</small>
              </div>
              <Description className="text-sm">{product.description}</Description>
              <h5 className="font-bold text-lg">&#8377; {product.price}</h5>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default ProductCard;
