import React, { useRef, useEffect, useState } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

function Favourites() {
  const scrollRef = useRef(null);
  const [favouriteItems, setFavouriteItems] = useState([]);

  useEffect(() => {
    fetch('/api/favourites') // Make sure this matches your backend route
      .then((res) => res.json())
      .then((data) => setFavouriteItems(data))
      .catch((err) => console.error('Failed to load favourites:', err));
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full my-15 py-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-7">
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-bold text-3xl">Your Favourites</h3>
        </div>

        <div className="relative">
          <button
            type="button"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-[var(--color-primary)] cursor-pointer rounded-full p-2"
            onClick={() => scroll('left')}
          >
            <ArrowBackRoundedIcon className="text-[var(--color-background)]" style={{ fontSize: '2rem' }} />
          </button>

          <button
            type="button"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-[var(--color-primary)] cursor-pointer rounded-full p-2"
            onClick={() => scroll('right')}
          >
            <ArrowForwardRoundedIcon className="text-[var(--color-background)]" style={{ fontSize: '2rem' }} />
          </button>

          <div
            ref={scrollRef}
            className="mt-10 flex overflow-x-auto scroll-smooth gap-4 px-6 pb-4"
          >
            {favouriteItems.map((item, index) => (
              <div
                key={index}
                className="bg-[var(--color-secondary)] flex-shrink-0 w-72 md:w-80 rounded-lg"
              >
                <div className="w-full h-40 rounded-t-lg overflow-hidden">
                  <a href="#">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1">
                    <img
                      src={item.isVeg ? '/assets/icons/veg.svg' : '/assets/icons/non-veg.svg'}
                      alt={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      className="w-4 h-4"
                    />
                    <h5 className="font-bold">{item.name}</h5>
                  </div>
                  <small className="text-xs">
                    {item.size}. {item.calories} kcal
                  </small>
                  <div className="flex flex-row justify-between items-center mt-4">
                    <h5 className="font-bold">&#8377; {item.price}</h5>
                    <a
                      href="/Order"
                      className="rounded-full bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary)] outline outline-1 px-3 py-2"
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
    </div>
  );
}

export default Favourites;
