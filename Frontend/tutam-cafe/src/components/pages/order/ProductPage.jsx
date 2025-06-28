import React, { useEffect, useState } from 'react';
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';
import Bestseller from './Bestseller';
import Drinks from './Drinks';
import Food from './Food';
import Merchandise from './Merchandise'
import CoffeeAtHome from './CoffeeAtHome'
import ReadyToEat from './ReadyToEat'

function ProductPage() {
  const [tabIndex, setTabIndex] = useState(0);

  const categories = [
    'Bestseller',
    'Drinks',
    'Food',
    'Merchandise',
    'Coffee At Home',
    'Ready to Eat'
  ];

  useEffect(() => {
    const savedTab = localStorage.getItem('productType');
    const tabValue = savedTab !== null ? Number(savedTab) : 0;
    setTabIndex(tabValue);
  }, []);

  const handleTabChange = (index) => {
    setTabIndex(index);
    localStorage.setItem('productType', index);
  };

  return (
    <TabGroup selectedIndex={tabIndex} onChange={handleTabChange}>
      <div className='bg-[var(--color-secondary)] text-[var(--color-primary)] w-full'>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div>
            <TabList className="flex overflow-x-auto whitespace-nowrap no-scrollbar items-center">
              {categories.map((label, idx) => (
                <React.Fragment key={idx}>
                  {idx !== 0 && <span className="mx-2">|</span>}
                  <Tab
                    className={({ selected }) =>
                      `py-2 transition-colors duration-200 ${
                        selected
                          ? 'font-bold border-b-2 border-[var(--color-primary)]'
                          : 'hover:border-b-2'
                      }`
                    }
                  >
                    {label}
                  </Tab>
                </React.Fragment>
              ))}
            </TabList>
          </div>
        </div>
      </div>
      <div className='bg-[var(--color-background)] text-[var(--color-primary)]'>
        <div>
          <TabPanels>
              <TabPanel> <Bestseller /> </TabPanel>
              <TabPanel> <Drinks /> </TabPanel>
              <TabPanel> <Food /> </TabPanel>
              <TabPanel> <Merchandise /> </TabPanel>
              <TabPanel> <CoffeeAtHome /> </TabPanel>
              <TabPanel> <ReadyToEat /> </TabPanel>
            </TabPanels>
        </div> 
      </div>
    </TabGroup>
  );
}

export default ProductPage;
