import React, { useEffect, useState } from 'react';

function Suggestions() {
  const [suggestedItems, setSuggestedItems] = useState([]);

  useEffect(() => {
    fetch('/api/suggestions') // update this API endpoint as per your backend
      .then(res => res.json())
      .then(data => setSuggestedItems(data))
      .catch(err => console.error('Failed to load suggested items', err));
  }, []);

  return (
    <div className='bg-[var(--color-secondary)] w-full my-15 py-10'>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-7">
        <div className='flex flex-row justify-between items-center'>
          <h3 className="font-bold text-3xl">Barista Recommends</h3>
          <a href="/Order" className='text-sm'>View Menu</a>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center gap-1 mt-10'>
          {suggestedItems.map((item, index) => (
            <div
              key={index}
              className='bg-[var(--color-background)] rounded-lg p-4 m-2 w-90 h-40'
            >
              <div className='flex flex-row justify-start'>
                <div className='ml-2'>
                  <a href="#">
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-20 h-20 rounded-lg'
                    />
                  </a>
                </div>
                <div className='flex flex-col ml-4 pt-2'>
                  <img
                    src={item.isVeg ? '/assets/icons/veg.svg' : '/assets/icons/non-veg.svg'}
                    alt={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    className='w-4 h-4'
                  />
                  <h5 className='font-bold'>{item.name}</h5>
                  <small className='text-xs'>
                    {item.size}. {item.calories} kcal
                  </small>
                </div>
              </div>
              <div className='flex flex-row justify-between items-center'>
                <div className='ml-2 mt-4'>
                  <h5 className='font-bold'>&#8377; {item.price}</h5>
                </div>
                <div className='mt-4'>
                  <a
                    href='/Order'
                    className='rounded-full bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary)] outline-1 outline-solid px-2 py-2'
                  >
                    Add Item
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
