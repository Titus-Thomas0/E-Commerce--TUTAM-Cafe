import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';
import TuneIcon from '@mui/icons-material/Tune';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';

function Drinks() {
  const [products, setProducts] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  const categories = [
    'Espresso',
    'Frappucino* Blended Beverages',
    'Other Beverages',
    'Brewed Coffee',
    'Tea',
    'Cold Brew',
    'Bottled Beverage'
  ];

  const categoriesDescription = [
    'Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.',
    'The Frappuccino® is a blended beverage unique to Starbucks.',
    'The contemporary taste of TUTAM Cafe in a coffee-free avatar.',
    'The TUTAM Cafe brews are made with premium estate coffee to impart a unique flavour.',
    'An exclusive tea experience championed by TUTAM Cafe India.',
    'Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.',
    'Bottled Beverage'
  ];

  const filters = [
    'Hot',
    'Cold',
    'Milkshake',
    'Black',
    'Blended',
    'Caffeine Free',
    'Nitro',
    'On Top',
    'Ice Cream',
    'Cream',
    'Brew',
    'Juice'
  ];
  
    useEffect(() => {
      const savedTab = localStorage.getItem('productType');
      const tabValue = savedTab !== null ? Number(savedTab) : 0;
      setTabIndex(tabValue);

      fetch('/api/products/drinks') // Update your backend endpoint as needed
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error("Failed to load products", err));
    }, []);

    const handleTabChange = (index) => {
      setTabIndex(index);
      localStorage.setItem('productType', index);
    };


  return (
    <div >
      <div >
        <TabGroup selectedIndex={tabIndex} onChange={handleTabChange}>
          <div className='bg-[var(--color-background)] text-[var(--color-primary)] border-b-1 border- [var(--color-secondary)] w-full'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
              <div>
                <TabList className="flex overflow-x-auto whitespace-nowrap no-scrollbar items-center">
                  {categories.map((label, idx) => (
                    <React.Fragment key={idx}>
                      {idx !== 0 && <span className='mx-2'> </span>}
                      <Tab 
                        className={({ selected }) => 
                        `py-2 transition-color duration-200 ${
                          selected
                            ? 'font-bold border-b-2 border-[var(--color-primary)]'
                                    : 'hover:border-b-2'
                        }`}
                      >
                        {label}
                      </Tab>
                    </React.Fragment>
                  ))}
                </TabList>
              </div>
            </div>
          </div>

          <div className='bg-[var(--color-background)] text-[var(--color-primary)] border-b-1 border- [var(--color-secondary)] w-full'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
              <div>
                <TabList className="flex overflow-x-auto whitespace-nowrap no-scrollbar items-center">
                  <TuneRoundedIcon className='mr-2' />
                  {filters.map((label, idx) => (
                    <React.Fragment key={idx}>
                      {idx !== 0 && <span className='mx-2'> </span>}
                      <Tab 
                        className={({ selected }) => 
                        `py-2 transition-color duration-200 ${
                          selected
                            ? 'font-bold border-b-2 border-[var(--color-primary)]'
                                    : 'hover:border-b-2'
                        }`}
                      >
                        {label}
                      </Tab>
                    </React.Fragment>
                  ))}
                </TabList>
              </div>
            </div>
          </div>
          
          <div>
            <TabPanels>
              <TabPanel> 
                <div className="mt-10">
                  <div>
                    <h3 className="text-xl font-bold">{categories[0]}</h3>
                    <p className="text-base font-normal">
                      {categoriesDescription[0]}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-start gap-6 my-10">
                    {products.map((product, idx) => (
                      <ProductCard key={idx} product={product} />
                    ))}
                  </div>
                </div>
              </TabPanel>
              
              <TabPanel> 
                <div className="mt-10">
                  <div>
                    <h3 className="text-xl font-bold">{categories[1]}</h3>
                    <p className="text-base font-normal">
                      {categoriesDescription[1]}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-start gap-6 my-10">
                    {products.map((product, idx) => (
                      <ProductCard key={idx} product={product} />
                    ))}
                  </div>
                </div>
              </TabPanel>

              <TabPanel> 
                <div className="mt-10">
                  <div>
                    <h3 className="text-xl font-bold">{categories[2]}</h3>
                    <p className="text-base font-normal">
                      {categoriesDescription[2]}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-start gap-6 my-10">
                    {products.map((product, idx) => (
                      <ProductCard key={idx} product={product} />
                    ))}
                  </div>
                </div>
              </TabPanel>

              <TabPanel> 
                <div className="mt-10">
                  <div>
                    <h3 className="text-xl font-bold">{categories[3]}</h3>
                    <p className="text-base font-normal">
                      {categoriesDescription[3]}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-start gap-6 my-10">
                    {products.map((product, idx) => (
                      <ProductCard key={idx} product={product} />
                    ))}
                  </div>
                </div>
              </TabPanel>

              <TabPanel> 
                <div className="mt-10">
                  <div>
                    <h3 className="text-xl font-bold">{categories[4]}</h3>
                    <p className="text-base font-normal">
                      {categoriesDescription[4]}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-start gap-6 my-10">
                    {products.map((product, idx) => (
                      <ProductCard key={idx} product={product} />
                    ))}
                  </div>
                </div>
              </TabPanel>

              <TabPanel> 
                <div className="mt-10">
                  <div>
                    <h3 className="text-xl font-bold">{categories[5]}</h3>
                    <p className="text-base font-normal">
                      {categoriesDescription[5]}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-start gap-6 my-10">
                    {products.map((product, idx) => (
                      <ProductCard key={idx} product={product} />
                    ))}
                  </div>
                </div>
              </TabPanel>

              <TabPanel> 
                <div className="mt-10">
                  <div>
                    <h3 className="text-xl font-bold">{categories[6]}</h3>
                    <p className="text-base font-normal">
                      {categoriesDescription[6]}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-start gap-6 my-10">
                    {products.map((product, idx) => (
                      <ProductCard key={idx} product={product} />
                    ))}
                  </div>
                </div>
              </TabPanel>

              <TabPanel> 
                <div className="mt-10">
                  <div>
                    <h3 className="text-xl font-bold">{categories[7]}</h3>
                    <p className="text-base font-normal">
                      {categoriesDescription[7]}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-start gap-6 my-10">
                    {products.map((product, idx) => (
                      <ProductCard key={idx} product={product} />
                    ))}
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </div>
        </TabGroup>
      </div>
    </div>

    
  )
}

export default Drinks