import React, { useEffect, useState, useRef } from 'react';
import ProductCard from './ProductCard';
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

function Merchandise() {
  const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const tabListRef = useRef(null);

  const categories = [
    'Pen & pencil',
    'Mugs',
    'Cups',
    'Tumbler',
    'Water Bottles',
    'Accessories'
  ];

  const categoriesDescription = [
    'Premium pens and pencils crafted with precision and elegance.',
    'Artistic collection of ceramic mugs with acacia wood lids.',
    'Reusable Hot & Cold Cups that are perfect for beverages on the go.',
    'Functional range of stainless-steel tumblers with aesthetic designs.',
    'Contemporary Water Bottles with TUTAM design.',
    'Collection of functional and artistic accessories with custom TUTAM design.'
  ];

  const filters = [
    'core Essentials', 'Seasonal Collection', 'Been There Series', 'Ceramic', 'Stainless Steel',
    'Reusable Cups', 'Coasters', 'Cup Clips', 'Note Books', 'Pens', 'Bags'
  ];

  useEffect(() => {
    fetch('/api/products/drinks')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to load products", err));
  }, []);

  const getFilteredCategories = () => {
    if (selectedFilters.length === 0) return categories;

    return categories.filter(category =>
      products.some(p =>
        p.category === category &&
        p.tags?.some(tag => selectedFilters.includes(tag))
      )
    );
  };

  const visibleCategories = getFilteredCategories();

  useEffect(() => {
    setTabIndex(0); // Always start at index 0 on load/filter change
  }, [products, selectedFilters]);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  const scrollTabs = (direction) => {
    const container = tabListRef.current;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div>
      <TabGroup selectedIndex={tabIndex} onChange={handleTabChange}>
        {/* Category Tabs */}
        <div className='bg-[var(--color-background)] text-[var(--color-primary)] border-b w-full'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center'>
            <button onClick={() => scrollTabs('left')} className="p-2 hover:bg-[var(--color-secondary)] rounded-full">
              <ChevronLeftIcon className="h-5 w-5 text-[var(--color-primary)]" />
            </button>

            <div ref={tabListRef} className="flex-1 overflow-x-auto">
              <TabList className="flex whitespace-nowrap items-center">
                {visibleCategories.map((label, idx) => (
                  <Tab
                    key={idx}
                    className={({ selected }) =>
                      `mx-2 py-2 transition-colors duration-200 ${
                        selected
                          ? 'font-bold border-b-2 border-[var(--color-primary)]'
                          : 'hover:border-b-2'
                      }`
                    }
                  >
                    {label}
                  </Tab>
                ))}
              </TabList>
            </div>

            <button onClick={() => scrollTabs('right')} className="p-2 hover:bg-[var(--color-secondary)] rounded-full">
              <ChevronRightIcon className="h-5 w-5 text-[var(--color-primary)]" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className='bg-[var(--color-background)] text-[var(--color-primary)] border-b w-full'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div
              className="overflow-x-auto color mb-2"
            >
              <div className="inline-flex items-center gap-5 py-2 px-1">
                <TuneRoundedIcon className='text-[var(--color-primary)]' />
                {filters.map((label, idx) => (
                  <span
                    key={idx}
                    onClick={() => toggleFilter(label)}
                    className={`text-sm cursor-pointer px-3 py-1 rounded-md shadow-sm hover:shadow-md whitespace-nowrap ${
                      selectedFilters.includes(label)
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'bg-[var(--color-secondary)]'
                    }`}
                  >
                    {label}
                  </span>
                ))}
                {selectedFilters.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-[var(--color-primary)] underline ml-4"
                  >
                    Clear Filter
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Panels */}
        <TabPanels>
          {visibleCategories.map((cat, idx) => {
            const filtered = products.filter(p =>
              p.category === cat &&
              (selectedFilters.length === 0 || p.tags?.some(tag => selectedFilters.includes(tag)))
            );

            return (
              <TabPanel key={idx}>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-10">
                  <div>
                    <h3 className="text-xl font-bold">{cat}</h3>
                    <p className="text-base font-normal">
                      {categoriesDescription[categories.indexOf(cat)]}
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-start gap-6 my-10">
                    {filtered.length > 0 ? (
                      filtered.map((product, i) => (
                        <ProductCard key={i} product={product} />
                      ))
                    ) : (
                      <p className="text-gray-400">No products available.</p>
                    )}
                  </div>
                </div>
              </TabPanel>
            );
          })}
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default Merchandise